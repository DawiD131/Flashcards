import React from "react";
import styled from "styled-components";

const WordText = styled.h2`
  font-size: 35px;
`;

function WordField(props) {
  return <WordText>{props.word}</WordText>;
}

export default WordField;
