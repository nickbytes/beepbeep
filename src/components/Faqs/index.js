import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  max-width: 668px;
`;

const Section = styled.div`
  margin-bottom: 60px;
`;

const Blockquoute = styled.blockquote`
  line-height: 1.8em;
  padding: 0 0 0 15px;
  margin: 0;
  border-left: 3px solid black;
`;

const Title = styled.h2`
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 40px;
`;

const Faqs = () => (
  <Container>
    <Title>FAQs</Title>
    <Section>
      <h3>What is the Beep Test?</h3>
      <Blockquoute>
        The multi-stage fitness test, also known as the pacer test or the beep
        test, is a series of stages that have different tasks sometimes used by
        sports and coaches and trainers to estimate an athlete's VO2 max
        (maximum oxygen uptake). The most common variation of the multi-stage
        fitness test is the FitnessGram/Cooper PACER test, a multistage aerobic
        capacity test that progressively gets more difficult as it continues.
      </Blockquoute>
    </Section>
    <Section>
      <h3>How does it work?</h3>
      <Blockquoute>
        The test involves running continuously between two points that are 20 m
        apart from side to side. The runs are synchronized with a pre-recorded
        audio tape, CD or laptop software, which plays beeps at set intervals.
        As the test proceeds, the interval between each successive beep
        decreases, forcing the athletes to increase their speed over the course
        of the test until it is impossible to keep in sync with the recording
        (or, on extremely rare occasions, until the athlete completes the test).
        Many people who test people using the multi-stage fitness test allow one
        level to beep before the person makes the line
      </Blockquoute>
    </Section>
  </Container>
);

export default Faqs;
