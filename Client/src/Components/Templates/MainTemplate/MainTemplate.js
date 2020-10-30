import React, { useState, useEffect } from "react";
import { StyledWrapper } from "./StyledTemplate";
import Header from "../../Atoms/Header";
import Board from "../../Organisms/Board";
import FormPanel from "../../Organisms/FormPanel";
import ButtonBottomBar from "../../Molecules/ButtonBottomBar";
import GlobalStyle from "../../Shared/GlobalTheme";
import "../../../style.css";

const MainTemplate = ({ data, handleAction }) => {
  const [words, setWords] = useState([]);
  const [currentLessonValue, setCurrentLessonValue] = useState("");
  const [lessonsSubjects, setLessonsSubjects] = useState([]);
  const [lessonSelectValue, setLessonSelectValue] = useState("");
  const [lessonValue, setLessonValue] = useState("");
  const [isFormPanelVisible, setIsFormPanelVisible] = useState(true);

  useEffect(() => {
    console.log(data);
    const lessons = data.map((item) => item.lesson);
    if (data.length > 0) {
      setWords(data[0].words);
      setCurrentLessonValue(lessons[0]);
      setLessonSelectValue(lessons[0]);
    }
    setLessonsSubjects(lessons);
  }, [data]);

  const handleLessonInput = (e) => setLessonValue(e.target.value);
  const handleLessonSelect = (e) => setLessonSelectValue(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:9000/words/get_words/${lessonSelectValue}`)
      .then((response) => response.json())
      .then((data) => {
        setWords(data.words);
      });
    setCurrentLessonValue(lessonSelectValue);
  };

  const handleLessonSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:9000/lessons/create_new_lesson", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lesson: lessonValue }),
    });

    handleAction({
      type: "ADD",
      lessonValue,
    });
    setLessonValue("");
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
          currentLessonValue={currentLessonValue}
          handleAction={handleAction}
        />
        {isFormPanelVisible ? (
          <FormPanel
            isFormPanelVisible={isFormPanelVisible}
            handleAction={handleAction}
            handleLessonInput={handleLessonInput}
            handleLessonSelect={handleLessonSelect}
            lessonsSubjects={lessonsSubjects}
            value={lessonSelectValue}
            handleSubmit={handleSubmit}
            currentLessonValue={currentLessonValue}
            lessonValue={lessonValue}
            handleLessonSubmit={handleLessonSubmit}
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
