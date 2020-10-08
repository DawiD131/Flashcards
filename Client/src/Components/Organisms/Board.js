import React from "react";
import "../../style.css";
import styled from "styled-components";
import Card from "../Molecules/Card";
import ButtonBar from "../Molecules/ButtonBar";
import PanelForm from "../Organisms/PanelForm";

const StyledCardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 35%;
`;

const Board = ({
  words,
  isWordVisible,
  word,
  translation,
  lessonsSubjects,
  isFormPanelVisible,
  lessonSelectValue,
  wordValue,
  translationValue,
  lessonValue,
  handleIsLearnedClick,
  handleClick,
  Showfunc,
  handleSubmit,
  handleWordInput,
  handleLessonInput,
  handleLessonSelect,
  handleTranslationInput,
  handleAddWordSubmit,
  handleLessonSubmit,
}) => {
  return (
    <>
      <StyledCardBox>
        <Card
          words={words}
          isWordVisible={isWordVisible}
          word={word}
          translation={translation}
          lessonsSubjects={lessonsSubjects}
        />
        <ButtonBar
          words={words}
          isWordVisible={isWordVisible}
          handleIsLearnedClick={handleIsLearnedClick}
          handleClick={handleClick}
          Showfunc={Showfunc}
        />
      </StyledCardBox>
      {isFormPanelVisible ? (
        <PanelForm
          isFormPanelVisible={isFormPanelVisible}
          handleWordInput={handleWordInput}
          handleTranslationInput={handleTranslationInput}
          handleLessonInput={handleLessonInput}
          handleLessonSelect={handleLessonSelect}
          lessonsSubjects={lessonsSubjects}
          value={lessonSelectValue}
          handleSubmit={handleSubmit}
          WordValue={wordValue}
          TranslationValue={translationValue}
          handleAddWordSubmit={handleAddWordSubmit}
          lessonValue={lessonValue}
          handleLessonSubmit={handleLessonSubmit}
        />
      ) : null}
    </>
  );
};

export default Board;
