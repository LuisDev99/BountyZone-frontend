import React, { useState } from "react";
import useAsyncEffect from "use-async-effect";
import ModalWindow from "../../../Components/ModalWindow";
import { Leader } from "../../../Models/Leader";
import LeaderService from "../../../Services/LeaderService";
import { LeaderProfileCard } from "./LeaderProfileCard";
import VictimCard from "./VictimCard";

import { Text, VictimsContent, VictimCardsContent } from "./StyledComponents";
import BountyCard from "./BountyCard";
import { BountyInfo } from "../../../Models/Bounty";

interface PopularVictimsProps {
  leader: Leader;
}

interface ModalInfo {
  title: string;
  isOpen: boolean;
  content: JSX.Element;
}

const defaultModalInfo: ModalInfo = {
  title: "",
  isOpen: false,
  content: <></>,
};

export default function PopularVictims({ leader }: PopularVictimsProps) {
  const [modalInfo, setModalInfo] = useState<ModalInfo>(defaultModalInfo);
  const [popularVictims, setPopularVictims] = useState<Leader[]>([]);
  const [selectedVictim, setSelectedVictim] = useState<Leader>();

  useAsyncEffect(async () => {
    try {
      const response = await new LeaderService().getPopularVictims();
      setPopularVictims(response.data);
    } catch (e) {
      console.log("Error while getting popular victims");
      console.log({ e });
    }
  }, []);

  function handleModalClose() {
    setModalInfo(defaultModalInfo);
  }

  function handleViewVictim(victim: Leader) {
    setModalInfo({
      title: "Your enemy's information. Want to attack him?",
      isOpen: true,
      content: (
        <LeaderProfileCard
          title={`Opponent: ${victim.Player.NickName}`}
          leader={victim}
        />
      ),
    });
  }

  async function handleBountyConfirm(bountyInfo: BountyInfo) {
    console.log(leader, selectedVictim);
    try {
      await new LeaderService().placeBountyOnVictim({
        Price: bountyInfo.price,
        LeaderID: leader.ID,
        Time: bountyInfo.time,
        VictimID: selectedVictim!.ID,
      });

      setModalInfo(defaultModalInfo);
    } catch (e) {
      console.log("Failed to place bounty on target", e);
    }
  }

  function handlePlaceBounty(victim: Leader) {
    setSelectedVictim(victim);
    setModalInfo({
      title: "Your enemy's information. Want to attack him?",
      isOpen: true,
      content: <BountyCard onConfirm={handleBountyConfirm} />,
    });
  }

  return (
    <>
      <ModalWindow
        isOpen={modalInfo.isOpen}
        title={modalInfo.title}
        onClose={handleModalClose}
      >
        {modalInfo.content}
      </ModalWindow>

      <VictimsContent>
        <h3>Not feeling happy about your performance? </h3>
        <Text>
          Here are the most popular leaders for you to take down and feel better
        </Text>

        {popularVictims.length === 0 ? (
          <h4>Loading your targets....</h4>
        ) : (
          <VictimCardsContent>
            {popularVictims.map((victim, idx) => (
              <VictimCard
                key={idx}
                victim={victim}
                onViewVictim={handleViewVictim}
                onPlaceBounty={handlePlaceBounty}
              />
            ))}
          </VictimCardsContent>
        )}
      </VictimsContent>
    </>
  );
}
