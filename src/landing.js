import React from "react";
import styled from "styled-components";

const LandingContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const DescText = styled("div")`
  font-family: "Grotesk Font";
  color: #222222;
`;

const HeaderText = styled("div")`
  font-family: "Calluna Font";
  color: #848862;
`;

const ActionButtons = styled("button")`
  background: #848862;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  font-family: "Grotesk Font";
  color: white;
  width: 250px;
  margin: 40px 18px;
  border: none;
  font-size: 1em;
  font-weight: 200;
  height: 60px;

  @media (max-width: 500px) {
    margin: 10px;
  }
`;

const ButtonContainer = styled("div")`
  @media (max-width: 500px) {
    display: flex;
    margin-top: 20px;
    flex-direction: column;
  }
`;

export default () => {
  return (
    <LandingContainer>
      <DescText style={{ fontSize: "2.5rem" }}>Welcome to</DescText>
      <HeaderText style={{ fontSize: "5.5rem", lineHeight: "80px" }}>
        Wearwell
      </HeaderText>
      <DescText style={{ fontSize: "1.25rem" }}>
        Mindful Fashion Made Easy
      </DescText>
      <ButtonContainer>
        <ActionButtons>Learn More</ActionButtons>
        <ActionButtons>Download Extension</ActionButtons>
      </ButtonContainer>
    </LandingContainer>
  );
};
