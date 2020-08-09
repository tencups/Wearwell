import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Calluna from "./fonts/Calluna-Regular.otf";
import Grotesk from "./fonts/HKGrotesk-Regular.otf";

import Landing from "./landing";
import Content from "./content";
import Footer from "./footer";

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Calluna Font';
        src: local('Font Name'), local('FontName'),
        url(${Calluna}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Grotesk Font';
        src: local('Font Name'), local('FontName'),
        url(${Grotesk}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
    
  body { 
    background: #F5F3F1;
  }

`;

export default () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Landing />
      <Content />
      <Footer />
    </React.Fragment>
  );
};
