import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${(props) =>
    props.dangerous
      ? "#F25F5C"
      : props.good
      ? "#70C1B3"
      : props.warning
      ? "#FFE066"
      : props.control
      ? "#247BA0"
      : props.toggle
      ? "#59B3D9"
      : "#87A5C0"};
  font-size: 15px;
  box-shadow: 1px 1px 2px black;
  border-radius: 3px;
  border: none;
  margin-right: ${(props) => (props.secondary ? "7px" : "null")};
  color: black;
  width: ${(props) =>
    props.toggle
      ? "60px"
      : props.isLearned
      ? "40px"
      : props.control
      ? "30px"
      : null};
  height: 30px;
  outline: none;
  cursor: pointer;
  margin-top: ${(props) => (props.submit ? "15px" : null)};
  &:hover {
    box-shadow: 3px 3px 4px black;
  }
`;

const Button = (props) => {
  return (
    <StyledButton
      submit={props.submit}
      control={props.control}
      isLearned={props.isLearned}
      dangerous={props.dangerous}
      secondary={props.secondary}
      warning={props.warning}
      good={props.good}
      onClick={props.function}
      toggle={props.toggle}
    >
      {props.txt}
    </StyledButton>
  );
};

export default Button;
