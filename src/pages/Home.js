import React from "react";

import styled from "styled-components";
import MainGrid from "../styles/Grid";
import BuilderContainer from "../components/BuilderContainer";
import UsageContainer from "../components/UsageContainer";

export const StyledHome = styled.div`
  padding: 1.3rem;
  width: 93%;
  margin: 0 auto;
  padding-bottom: 7rem;
  h2 {
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 1093px) {
    width: 95%;
  }
  @media screen and (max-width: 1090px) {
    width: 99%;
  }
  @media screen and (max-width: 870px) {
    width: 90%;
  }
  @media screen and (max-width: 670px) {
    width: 99%;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
  }
  @media screen and (max-width: 530px) {
    width: 100%;
  }
`;

const Home = () => {

  return (
    <StyledHome>
      <MainGrid>
        <BuilderContainer />
        <UsageContainer />
      </MainGrid>
    </StyledHome>
  );
}

export default Home;
