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

function PanelForm(props) {
  return (
    <BouncyDiv>
      {props.lessonsSubjects.length > 0 ? (
        <ChooseLessonForm
          lessons={props.lessonsSubjects}
          value={props.value}
          handleSubmit={props.handleSubmit}
          handleChange={props.handleChange}
        />
      ) : null}
      {props.lessonsSubjects.length > 0 ? (
        <AddWordForm
          WordValue={props.WordValue}
          TranslationValue={props.TranslationValue}
          handleAddWordSubmit={props.handleAddWordSubmit}
          handleChange={props.handleChange}
        />
      ) : null}

      <AddLessonForm
        LessonValue={props.LessonValue}
        handleLessonSubmit={props.handleLessonSubmit}
        handleChange={props.handleChange}
      />
    </BouncyDiv>
  );
}

export default PanelForm;
