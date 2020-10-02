import React from "react";
import styled from "styled-components";
import Button from "../Atoms/Button";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
  width: 100%;
  border-radius: 10px;
  height: 4%;
`;

function ButtonBar(props) {
  return (
    <StyledWrapper>
      <Button
        isLearned
        secondary
        dangerous
        function={() => props.handleIsLearnedClick(false)}
        txt="-"
      />
      <Button control secondary function={props.Prevfunc} txt="<" />
      <Button
        control
        secondary
        function={props.Showfunc}
        txt={props.isWordVisible ? "HIDE" : "SHOW"}
      />
      <Button control secondary function={props.Nextfunc} txt=">" />
      <Button
        isLearned
        secondary
        good
        function={() => props.handleIsLearnedClick(true)}
        txt="+"
      />
    </StyledWrapper>
  );
}

export default ButtonBar;
