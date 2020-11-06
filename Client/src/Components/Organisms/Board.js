import React, { useState, useEffect } from "react";
import "../../style.css";
import styled from "styled-components";
import Card from "../Molecules/Card";
import ButtonBar from "../Molecules/ButtonBar";
import KeyboardEventHandler from "react-keyboard-event-handler";
import API_URL from "../../api";

const StyledCardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 35%;
`;

const Board = ({
  words,
  lessonsSubjects,
  currentLessonValue,
  handleAction,
}) => {
  const [wordNumber, setWordNumber] = useState(0);
  const [isTranslationVisible, setIsTranslationVisible] = useState(false);

  const handleShowTranslationVisibleClick = () =>
    setIsTranslationVisible((prevValue) => !prevValue);

  const handleNextOrPrevClick = (NextOrPrev) => {
    setIsTranslationVisible(false);
    switch (NextOrPrev) {
      case "Next":
        if (wordNumber + 1 === words.length) {
          setWordNumber(0);
        } else {
          setWordNumber((prevValue) => prevValue + 1);
        }
        break;
      case "Prev":
        if (wordNumber < 1) {
          setWordNumber(words.length - 1);
        } else {
          setWordNumber((prevValue) => prevValue - 1);
        }
        break;
      default:
        return null;
    }
  };

  const handleIsLearnedClick = (status) => {
    fetch(`${API_URL}words/update_word_status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lesson: currentLessonValue,
        word: words[wordNumber].word,
        translation: words[wordNumber].translate,
        isLearned: status,
      }),
    });
    handleAction({
      type: "IS_WORD_LEARNED",
      lesson: currentLessonValue,
      word: words[wordNumber].word,
      status,
    });
  };

  const handleKeyEvent = (key) => {
    switch (key) {
      case "left":
        handleNextOrPrevClick("Prev");
        break;
      case "right":
        handleNextOrPrevClick("Next");
        break;
      case "down":
        handleShowTranslationVisibleClick();
        break;
      default:
        return null;
    }
  };

  return (
    <>
      <KeyboardEventHandler
        handleKeys={["left", "right", "down"]}
        onKeyEvent={(key) => handleKeyEvent(key)}
      />
      <StyledCardBox>
        <Card
          isTranslationVisible={isTranslationVisible}
          word={words.length > 0 ? words[wordNumber].word : null}
          translation={words.length > 0 ? words[wordNumber].translation : null}
          lessonsSubjects={lessonsSubjects}
        />
        <ButtonBar
          words={words}
          isTranslationVisible={isTranslationVisible}
          handleIsLearnedClick={handleIsLearnedClick}
          handleNextOrPrevClick={handleNextOrPrevClick}
          handleShowTranslationVisibleClick={handleShowTranslationVisibleClick}
        />
      </StyledCardBox>
    </>
  );
};

export default Board;
