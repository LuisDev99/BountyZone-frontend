import React from "react";
import Navbar from "./Navbar";

import background from "../../Assets/background1.jpg";
import InfoSection from "./InfoSection";

import { Body, Content, Image, Title, StyledLink } from "./StyledComponents";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Content>
        <Title>BountyZone</Title>
        <p>A place where mistakes cannot be made </p>
        <Image src={background} />
        <Body>
          <p>Ready to join the fight? Here is what you need to know</p>
          <InfoSection />
          <StyledLink to='/login'>Start Playing!</StyledLink>
        </Body>
      </Content>
    </>
  );
}

export default LandingPage;
