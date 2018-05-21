import React from "react";
import Header from "./components/Header";
import Faqs from "./components/Faqs";

import styled from "styled-components";

const Container = styled.div`
  padding: 40px 15px 80px;
`;

const App = () => (
  <Container>
    <Header />
    <Faqs />
  </Container>
);

export default App;
