import React from "react";
import styled from "styled-components";

import Icon from "./Icon.png";

const ActionButton = styled("button")`
  background: #848862;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  font-family: "Grotesk Font";
  color: white;
  width: 250px;
  border: none;
  margin-top: 50px;
  font-size: 1em;
  font-weight: 200;
  height: 60px;
  cursor: pointer;
`;

const FooterContainer = styled("footer")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const DescText = styled("div")`
  font-family: "Grotesk Font";
  color: #222222;
  margin-top: 100px;
`;

const FooterIcon = styled("img")`
  margin-top: 0px;
`;

export default () => {
  return (
    <FooterContainer>
      <ActionButton>Download Extension</ActionButton>
      <DescText>Created with 💖 by students for HackZ</DescText>
      <FooterIcon src={Icon} />
    </FooterContainer>
  );
};
