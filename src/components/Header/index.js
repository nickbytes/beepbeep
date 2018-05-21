import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto 80px;
  max-width: 668px;
`;

const Title = styled.h1`
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 40px;
  @media (min-width: 668px) {
    font-size: 64px;
    line-height: 78px;
    margin-bottom: 60px;
  }
`;

const Subtitle = styled.h2`
  font-size: 16px;
  line-height: 20px;
  border: 1px solid black;
  padding: 20px;

  @media (min-width: 668px) {
    font-size: 32px;
    line-height: 40px;
    border: 1px solid black;
    padding: 40px;
  }
`;

const Help = styled.p`
  font-size: 12px;
  line-height: 16px;

  @media (min-width: 668px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

const Header = () => (
  <Container>
    <Title>Beepbeep</Title>
    <Subtitle>
      The next beep test is: Wednesday, May 23rd, 6:30am @ Prospect Park
    </Subtitle>
    <Help>Questions? Text Ryan.</Help>
  </Container>
);

export default Header;
