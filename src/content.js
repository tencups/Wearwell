import React from "react";
import styled from "styled-components";
import Mockup from "./mockup2.png";
import Scoring from "./scoring.png";
import Sustainability from "./sustainability.png";

const ContentContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  margin: 100px 0;
`;

const ContentSection = styled("section")`
  margin-top: 30px;
`;

const LeftSide = styled("div")`
  grid-column: 3/6;
`;

const RightSide = styled("div")`
  grid-column: 7/10;
`;

const Image = styled("img")`
  width: 100%;
`;

const DescText = styled("div")`
  font-family: "Grotesk Font";
  color: #222222;
  font-size: 1.2rem;
`;

const HeaderText = styled("div")`
  font-family: "Calluna Font";
  color: #848862;
  font-size: 2rem;
`;

const SustainContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export default () => {
  return (
    <React.Fragment>
      <ContentContainer id="learn">
        <LeftSide>
          <Image
            src={Mockup}
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          />
        </LeftSide>
        <RightSide>
          <HeaderText>Sustainability: Uncovered</HeaderText>
          <DescText>
            The Wearwell Extension makes it easy to determine the sustainability
            of your favorite brands. Through a Brand Score, you will be able to
            learn the true impact a company makes on the world whenever you shop
            on their site.
          </DescText>
        </RightSide>
      </ContentContainer>

      <ContentContainer>
        <LeftSide>
          <HeaderText>The Scoring Method</HeaderText>
          <DescText>
            The Wearwell Brand Score is calculated using a variety of factors.
            We analyze each company’s decisions surrounding labor, agriculture,
            carbon emissions, water consumption, and the supply chain to produce
            a score out of 250.{" "}
            <strong>
              If a brand scores high, they are considered more sustainable.
            </strong>
          </DescText>
        </LeftSide>
        <RightSide>
          <Image src={Scoring} />
        </RightSide>
      </ContentContainer>

      <SustainContainer>
        <HeaderText style={{ marginTop: "-120px" }}>
          Why Sustainability Matters
        </HeaderText>
        <LeftSide>
          <Image src={Sustainability} />
        </LeftSide>
        <RightSide style={{ marginTop: "-70px" }}>
          <DescText style={{ width: "50vw" }}>
            Data shows that only 50% of consumers have accessed information
            about sustainability in fashion. This lack of information is the
            biggest barrier to consumers purchasing from sustainable brands.
            <br />
            <br />
            The Fashion Industry plays a significant role in the problems the
            world faces today. The industry accounts for 10% of global carbon
            emissions, uses over 24 trillion gallons of water anually, and
            utilizes labor practices that prevent economic development.
            <br />
            <br />
            You, as a consumer, have power. You can determine whether or not
            companies can continue their negative actions.{" "}
            <strong>Your choices can shape our future.</strong>
          </DescText>
        </RightSide>
      </SustainContainer>
    </React.Fragment>
  );
};
