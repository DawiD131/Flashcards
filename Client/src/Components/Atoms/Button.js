import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${(props) =>
    props.dangerous
      ? "#ff691f"
      : props.good
      ? "green"
      : props.warning
      ? "#ffa91f"
      : props.control
      ? "#0e486c"
      : "#0276f2"};
  font-size: 16px;
  box-shadow: 1px 2px 4px black;
  border: 0;
  border-radius: 5px;
  margin-right: ${(props) => (props.secondary ? "7px" : "null")};
  color: black;
  width: ${(props) => (props.isLearned ? "8%" : "")};
  height: 30px;
  outline: none;
  cursor: pointer;
  margin-top: ${(props) => (props.submit ? "5px" : null)};
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
    >
      {props.txt}
    </StyledButton>
  );
};

export default Button;
