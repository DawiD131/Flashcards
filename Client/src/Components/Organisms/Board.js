import React, { useState } from "react";
import "../../style.css";
import styled from "styled-components";
import Card from "../Molecules/Card";
import ButtonBar from "../Molecules/ButtonBar";
import KeyboardEventHandler from "react-keyboard-event-handler";
import API_URL from "../../api";

const StyledCardBox = styled.div`
  display: flex;
  grid-row: 2/3;
  justify-self: center;
  align-self: center;
  width: 400px;
  margin-bottom: 20px;
  flex-direction: column;
  justify-content: center;
  // @media all and (min-width: 1368px) {
  //   width: 30%;
  // }
  // @media all and (max-width: 1367px) {
  //   width: 40%;
  // }

  // @media all and (max-width: 1050px) {
  //   width: 45%;
  // }

  // @media all and (max-width: 750px) {
  //   width: 60%;
  // }

  // @media all and (max-width: 749px) {
  //   width: 75%;
  // }

  @media all and (max-width: 550px) {
    width: 90%;
  }
  height: 38%;
`;

const Board = ({ words, lessonsSubjects, currentLessonValue, dispatch }) => {
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

    dispatch({
      type: "IS_WORD_LEARNED",
      lesson: currentLessonValue,
      word: words[wordNumber].word,
      translation: words[wordNumber].translate,
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
    <StyledCardBox>
      <KeyboardEventHandler
        handleKeys={["left", "right", "down"]}
        onKeyEvent={(key) => handleKeyEvent(key)}
      />

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
  );
};

export default Board;
