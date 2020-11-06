import React, { useState, useEffect } from "react";
import { StyledWrapper } from "./StyledTemplate";
import Header from "../../Atoms/Header";
import Board from "../../Organisms/Board";
import FormPanel from "../../Organisms/FormPanel";
import ButtonBottomBar from "../../Molecules/ButtonBottomBar";
import GlobalStyle from "../../Shared/GlobalTheme";
import API_URL from "../../../api";
import "../../../style.css";

const MainTemplate = ({ data, handleAction }) => {
  const lessons = data.map((item) => item.lesson);

  const [words, setWords] = useState([]);
  const [wordValue, setWordValue] = useState("");
  const [translationValue, setTranslationValue] = useState("");
  const [lessonsSubjects, setLessonsSubjects] = useState([]);
  const [lessonSelectValue, setLessonSelectValue] = useState(lessons[1]);
  const [lessonInputValue, setLessonInputValue] = useState("");
  const [isFormPanelVisible, setIsFormPanelVisible] = useState(true);

  useEffect(() => {
    console.log("rerender");

    console.log(lessons[0]);
    setWords(data.length > 0 ? data[0].words : []);
    // setLessonSelectValue(lessons[0]);
    setLessonsSubjects(lessons);
  }, [data]);

  const handleWordInput = (e) => setWordValue(e.target.value);
  const handleTranslationInput = (e) => setTranslationValue(e.target.value);
  const handleLessonInput = (e) => setLessonInputValue(e.target.value);
  const handleLessonSelect = (e) => setLessonSelectValue(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${API_URL}words/get_words/${lessonSelectValue}`)
      .then((response) => response.json())
      .then((data) => {
        setWords(data.words);
        handleAction({ type: "GET_LESSON" });
      });
    // setLessonSelectValue(lessons[0]);
  };

  const handleAddLessonSubmit = (event) => {
    event.preventDefault();
    fetch(`${API_URL}lessons/create_new_lesson`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lesson: lessonInputValue }),
    });

    handleAction({
      type: "ADD",
      lessonValue: lessonInputValue,
    });
    setLessonInputValue("");
  };

  const handleAddWordSubmit = (event) => {
    event.preventDefault();
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

    handleAction({
      type: "ADD_WORD",
      lesson: lessonSelectValue,
      wordToAdd: {
        word: wordValue,
        translation: translationValue,
        isLearned: false,
      },
    });

    setTranslationValue("");
    setWordValue("");
  };

  const handleIsFormPanelVisibleClick = () =>
    setIsFormPanelVisible((prevValue) => !prevValue);

  return (
    <>
      <GlobalStyle />
      <Header txt="FLASHCARDS" />
      <StyledWrapper>
        <Board
          words={words}
          lessonsSubjects={lessonsSubjects}
          currentLessonValue={lessonSelectValue}
          handleAction={handleAction}
        />
        {isFormPanelVisible ? (
          <FormPanel
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
            lessonValue={lessonInputValue}
            handleAddLessonSubmit={handleAddLessonSubmit}
          />
        ) : null}
      </StyledWrapper>
      <ButtonBottomBar
        main
        handleIsFormPanelVisibleClick={handleIsFormPanelVisibleClick}
        visible={isFormPanelVisible}
        show={false}
        lessonsSubjects={lessonsSubjects}
      />
    </>
  );
};

export default MainTemplate;
