import React from "react";
import styled from "styled-components";
import Button from "../Atoms/Button";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  border-radius: 10px;
  height: 4%;
`;

const ButtonBar = ({
  handleIsLearnedClick,
  words,
  handleNextOrPrevClick,
  handleShowTranslationVisibleClick,
  isTranslationVisible,
}) => {
  return (
    <>
      {words.length > 0 ? (
        <StyledWrapper>
          <Button
            isLearned
            secondary
            dangerous
            function={() => handleIsLearnedClick(false, words)}
            txt="-"
          />
          <Button
            control
            secondary
            function={() => handleNextOrPrevClick("Prev")}
            txt="<"
          />
          <Button
            toggle
            secondary
            function={handleShowTranslationVisibleClick}
            txt={isTranslationVisible ? "HIDE" : "SHOW"}
          />
          <Button
            control
            secondary
            function={() => handleNextOrPrevClick("Next")}
            txt=">"
          />
          <Button
            isLearned
            secondary
            good
            function={() => handleIsLearnedClick(true, words)}
            txt="+"
          />
        </StyledWrapper>
      ) : null}
    </>
  );
};

export default ButtonBar;
