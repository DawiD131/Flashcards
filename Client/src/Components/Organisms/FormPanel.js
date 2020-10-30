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
  value,
  handleSubmit,
  handleLessonSelect,
  handleLessonSubmit,
  handleWordInput,
  handleLessonInput,
  handleTranslationInput,
  lessonValue,
}) => {
  return (
    <>
      {isFormPanelVisible ? (
        <BouncyDiv>
          <ChooseLessonForm
            lessonsSubjects={lessonsSubjects}
            value={value}
            handleSubmit={handleSubmit}
            handleLessonSelect={handleLessonSelect}
          />
          <AddWordForm
            lessonsSubjects={lessonsSubjects}
            handleAction={handleAction}
            currentLessonValue={currentLessonValue}
            handleTranslationInput={handleTranslationInput}
            handleWordInput={handleWordInput}
          />
          <AddLessonForm
            lessonValue={lessonValue}
            handleLessonSubmit={handleLessonSubmit}
            handleLessonInput={handleLessonInput}
          />
        </BouncyDiv>
      ) : null}
    </>
  );
};

export default FormPanel;
