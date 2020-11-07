import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 250px;
  text-align: center;
  background: #fff;
  padding: 10px;
`;

const NoLessonAlertBox = () => (
  <Wrapper>
    <h1>Brak Lekcji</h1>
    <h3>Przejdź do panelu głównego</h3>
    <h3>i dodaj lekcję</h3>
  </Wrapper>
);

export default NoLessonAlertBox;
