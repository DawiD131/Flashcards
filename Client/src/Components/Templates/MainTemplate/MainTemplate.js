import React, { useState, useEffect } from "react";
import { StyledWrapper } from "./StyledTemplate";
import Header from "../../Atoms/Header";
import Board from "../../Organisms/Board";
import FormPanel from "../../Organisms/FormPanel";
import ButtonBottomBar from "../../Molecules/ButtonBottomBar";
import GlobalStyle from "../../Shared/GlobalTheme";
import API_URL from "../../../api";
import "../../../style.css";

const MainTemplate = ({ state, dispatch }) => {
  const [wordValue, setWordValue] = useState("");
  const [translationValue, setTranslationValue] = useState("");
  const [lessonsSubjects, setLessonsSubjects] = useState([]);
  const [lessonSelectValue, setLessonSelectValue] = useState("");
  const [lessonInputValue, setLessonInputValue] = useState("");
  const [isFormPanelVisible, setIsFormPanelVisible] = useState(true);

  useEffect(() => {
    setLessonSelectValue(
      state.currentLesson
        ? state.currentLesson
        : state.lessonsSubjects
        ? state.lessonsSubjects[0]
        : ""
    );
    setLessonsSubjects(state.lessonsSubjects ? state.lessonsSubjects : []);
  }, [state]);

  const handleWordInput = (e) => setWordValue(e.target.value);
  const handleTranslationInput = (e) => setTranslationValue(e.target.value);
  const handleLessonInput = (e) => setLessonInputValue(e.target.value);
  const handleLessonSelect = (e) => setLessonSelectValue(e.target.value);

  const formValidation = (type) => {
    switch (type) {
      case "lesson":
        if (
          lessonInputValue.length === 0 ||
          lessonInputValue[0] === " " ||
          (lessonsSubjects.indexOf(lessonInputValue) === -1) === false
        ) {
          window.alert(
            "Nazwa lekcji nie moze być pusta, powtarzać się i zaczynać od spacji!"
          );
          return false;
        } else return true;
      case "flashcard":
        if (
          wordValue.length === 0 ||
          translationValue.length === 0 ||
          wordValue[0] === " " ||
          translationValue[0] === " " ||
          state.words.find(
            (item) =>
              item.word === wordValue && item.translation === translationValue
          ) !== undefined
        ) {
          window.alert(
            "Słówko i tłumaczenie nie mogą być puste i zaczynać się od spacji lub powtarzać się!"
          );
          return false;
        } else return true;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${API_URL}words/get_words/${lessonSelectValue}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "GET_LESSON",
          words: data.words,
          currentLesson: lessonSelectValue,
        });
      });
  };

  const handleAddLessonSubmit = (event) => {
    event.preventDefault();
    if (formValidation("lesson")) {
      fetch(`${API_URL}lessons/create_new_lesson`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lesson: lessonInputValue }),
      });

      dispatch({ type: "ADD_LESSON", lessonInputValue: lessonInputValue });
    }

    setLessonInputValue("");
  };

  const handleAddWordSubmit = (event) => {
    event.preventDefault();
    if (formValidation("flashcard")) {
      fetch(`${API_URL}words/save_word`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lesson: lessonSelectValue,
          word: wordValue,
          translation: translationValue,
          isLearned: false,
        }),
      });

      dispatch({
        type: "ADD_WORD",
        lesson: lessonSelectValue,
        wordToAdd: {
          word: wordValue,
          translation: translationValue,
          isLearned: false,
        },
      });
    }

    setTranslationValue("");
    setWordValue("");
  };

  const handleIsFormPanelVisibleClick = () =>
    setIsFormPanelVisible((prevValue) => !prevValue);

  return (
    <>
      <GlobalStyle />

      <StyledWrapper>
        <Header txt="FLASHCARDS" />
        <Board
          dispatch={dispatch}
          words={state.words}
          lessonsSubjects={lessonsSubjects}
          currentLessonValue={lessonSelectValue}
        />
        {isFormPanelVisible ? (
          <FormPanel
            currentLesson={state.currentLesson}
            handleAddWordSubmit={handleAddWordSubmit}
            wordValue={wordValue}
            handleWordInput={handleWordInput}
            translationValue={translationValue}
            handleTranslationInput={handleTranslationInput}
            isFormPanelVisible={isFormPanelVisible}
            handleLessonInput={handleLessonInput}
            handleLessonSelect={handleLessonSelect}
            lessonsSubjects={lessonsSubjects}
            lessonSelectValue={lessonSelectValue}
            handleSubmit={handleSubmit}
            currentLessonValue={lessonSelectValue}
            lessonInputValue={lessonInputValue}
            handleAddLessonSubmit={handleAddLessonSubmit}
          />
        ) : null}
        <ButtonBottomBar
          main
          handleIsFormPanelVisibleClick={handleIsFormPanelVisibleClick}
          visible={isFormPanelVisible}
          show={false}
          lessonsSubjects={lessonsSubjects}
        />
      </StyledWrapper>
    </>
  );
};

export default MainTemplate;
