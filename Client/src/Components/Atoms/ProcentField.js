import React from "react";
import styled from "styled-components";

const StyledText = styled.h3`
  margin-left: 20px;
`;

const ProcentField = (props) => {
  return <StyledText>{props.txt}</StyledText>;
};

export default ProcentField;
