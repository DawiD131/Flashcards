import React from "react";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import ChooseLessonForm from "../Molecules/ChooseLessonForm";
import AddWordForm from "../Molecules/AddWordForm";
import AddLessonForm from "../Molecules/AddLessonForm";

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
  display: flex;
  grid-row: 3/4;
  margin-bottom: 70px;
  width: 100%;
  justify-content: center;
  @media all and (max-width: 750px) {
    margin: 50px 0 30px 0;
    flex-wrap: wrap;
  }
`;

const FormPanel = ({
  isFormPanelVisible,
  currentLesson,
  lessonsSubjects,
  handleAction,
  currentLessonValue,
  lessonSelectValue,
  handleSubmit,
  handleLessonSelect,
  handleAddLessonSubmit,
  handleWordInput,
  handleLessonInput,
  handleTranslationInput,
  handleAddWordSubmit,
  wordValue,
  translationValue,
  lessonInputValue,
}) => {
  return (
    <>
      {isFormPanelVisible ? (
        <BouncyDiv>
          <ChooseLessonForm
            currentLesson={currentLesson}
            lessonsSubjects={lessonsSubjects}
            lessonsSelectValue={lessonSelectValue}
            handleSubmit={handleSubmit}
            handleLessonSelect={handleLessonSelect}
          />
          <AddWordForm
            lessonsSubjects={lessonsSubjects}
            handleAddWordSubmit={handleAddWordSubmit}
            wordValue={wordValue}
            handleWordInput={handleWordInput}
            translationValue={translationValue}
            handleTranslationInput={handleTranslationInput}
            handleAction={handleAction}
            currentLessonValue={currentLessonValue}
          />
          <AddLessonForm
            lessonInputValue={lessonInputValue}
            handleAddLessonSubmit={handleAddLessonSubmit}
            handleLessonInput={handleLessonInput}
          />
        </BouncyDiv>
      ) : null}
    </>
  );
};

export default FormPanel;
