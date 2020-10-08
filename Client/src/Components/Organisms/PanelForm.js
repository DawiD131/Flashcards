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

const PanelForm = ({
  isFormPanelVisible,
  lessonsSubjects,
  value,
  handleSubmit,
  handleLessonSelect,
  handleLessonSubmit,
  handleWordInput,
  handleLessonInput,
  handleTranslationInput,
  wordValue,
  TranslationValue,
  handleAddWordSubmit,
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
            WordValue={wordValue}
            TranslationValue={TranslationValue}
            handleAddWordSubmit={handleAddWordSubmit}
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

export default PanelForm;
