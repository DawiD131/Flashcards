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
  width: 100%;
  justify-content: center;
`;

const FormPanel = ({
  isFormPanelVisible,
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
  lessonValue,
}) => {
  return (
    <>
      {isFormPanelVisible ? (
        <BouncyDiv>
          <ChooseLessonForm
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
            lessonsSubjects={lessonsSubjects}
            handleAction={handleAction}
            currentLessonValue={currentLessonValue}
          />
          <AddLessonForm
            lessonValue={lessonValue}
            handleAddLessonSubmit={handleAddLessonSubmit}
            handleLessonInput={handleLessonInput}
          />
        </BouncyDiv>
      ) : null}
    </>
  );
};

export default FormPanel;
