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

const ButtonBar = ({
  handleIsLearnedClick,
  words,
  handleClick,
  Showfunc,
  isWordVisible,
}) => {
  return (
    <>
      {words.length > 0 ? (
        <StyledWrapper>
          <Button
            isLearned
            secondary
            dangerous
            function={() => handleIsLearnedClick(false)}
            txt="-"
          />
          <Button
            control
            secondary
            function={() => handleClick("Prev")}
            txt="<"
          />
          <Button
            control
            secondary
            function={Showfunc}
            txt={isWordVisible ? "HIDE" : "SHOW"}
          />
          <Button
            control
            secondary
            function={() => handleClick("Next")}
            txt=">"
          />
          <Button
            isLearned
            secondary
            good
            function={() => handleIsLearnedClick(true)}
            txt="+"
          />
        </StyledWrapper>
      ) : null}
    </>
  );
};

export default ButtonBar;
