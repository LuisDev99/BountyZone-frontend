import React, { useState } from "react";

import BountyCard from "./BountyCard";
import VictimCard from "./VictimCard";
import ModalWindow from "../../../Components/ModalWindow";
import LeaderService from "../../../Services/LeaderService";
import useAsyncEffect from "use-async-effect";

import { Leader } from "../../../Models/Leader";
import { BountyInfo } from "../../../Models/Bounty";
import { LeaderProfileCard } from "./LeaderProfileCard";
import { Text, VictimsContent, VictimCardsContent } from "./StyledComponents";

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

  async function handleBountyConfirm(victim: Leader, bountyInfo: BountyInfo) {
    try {
      await new LeaderService().placeBountyOnVictim({
        Price: bountyInfo.price,
        LeaderID: leader.ID,
        Time: bountyInfo.time,
        VictimID: victim.ID,
      });

      alert("You've succesfully created the bounty!");
      setModalInfo(defaultModalInfo);
    } catch (e) {
      console.log("Failed to place bounty on target", e);
      alert(e.response.data);
    }
  }

  function handlePlaceBounty(victim: Leader) {
    setModalInfo({
      title: "Your enemy's information. Want to attack him?",
      isOpen: true,
      content: <BountyCard victim={victim} onConfirm={handleBountyConfirm} />,
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
        <Text>Try creating bounties! Here are the most popular leaders:</Text>

        {popularVictims.length === 0 ? (
          <h4>Loading your targets....</h4>
        ) : (
          <VictimCardsContent>
            {popularVictims.map(
              (victim, idx) =>
                leader.ID !== victim.ID && (
                  <VictimCard
                    key={idx}
                    victim={victim}
                    onViewVictim={handleViewVictim}
                    onPlaceBounty={handlePlaceBounty}
                  />
                )
            )}
          </VictimCardsContent>
        )}
      </VictimsContent>
    </>
  );
}
