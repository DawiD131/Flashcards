import React, { useState, useEffect } from "react";
import "../../style.css";
import styled from "styled-components";
import KeyboardEventHandler from "react-keyboard-event-handler";
import Header from "../Atoms/Header";
import Board from "../Organisms/Board";
import ButtonBottomBar from "../Molecules/ButtonBottomBar";
import GlobalStyle from "../Shared/GlobalTheme";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 85vh;
  width: 100%;
`;

const MainTemplate = () => {
  const [words, setWords] = useState([]);
  const [currentLessonValue, setCurrentLessonValue] = useState("");
  const [lessonsSubjects, setLessonsSubjects] = useState([]);
  const [number, setNumber] = useState(0);
  const [lessonSelectValue, setLessonSelectValue] = useState("");
  const [wordValue, setWordValue] = useState("");
  const [translationValue, setTranslationValue] = useState("");
  const [lessonValue, setLessonValue] = useState("");
  const [isWordVisible, setIsWordVisible] = useState(false);
  const [isFormPanelVisible, setIsFormPanelVisible] = useState(true);
  const [procentValue, setProcentValue] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:9000/lessons/get_lessons_with_words`)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        const lessons = data.map((item) => item.lesson);
        if (lessons.length > 0) {
          setWords(data[0].words);
          setCurrentLessonValue(lessons[0]);
          setLessonSelectValue(lessons[0]);
        }
        setLessonsSubjects(lessons);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleLessonInput = (e) => setLessonValue(e.target.value);
  const handleWordInput = (e) => setWordValue(e.target.value);
  const handleLessonSelect = (e) => setLessonSelectValue(e.target.value);
  const handleTranslationInput = (e) => setTranslationValue(e.target.value);

  const procentCalculator = (words) => {
    let counter = 0;
    words.map((item) => {
      if (item.isLearned === true) {
        counter++;
      }
    });
    setProcentValue(Math.round((counter / words.length) * 100));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:9000/words/get_words/${lessonSelectValue}`)
      .then((response) => response.json())
      .then((data) => {
        setWords(data.words);
        procentCalculator(data.words);
      });
    setNumber(0);
    setCurrentLessonValue(lessonSelectValue);
  };

  const handleAddWordSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:9000/words/save_word", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lesson: currentLessonValue,
        word: wordValue,
        translation: translationValue,
        isLearned: false,
      }),
    });

    words.push({
      word: wordValue,
      translate: translationValue,
      isLearned: false,
    });

    procentCalculator(words);
    setWords(words);
    setTranslationValue("");
    setWordValue("");
  };

  const handleLessonSubmit = (event) => {
    event.preventDefault();
    lessonsSubjects.push(lessonValue);
    fetch("http://localhost:9000/lessons/create_new_lesson", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lesson: lessonValue }),
    });

    if (lessonsSubjects.length === 1) {
      setCurrentLessonValue(lessonValue);
      setLessonSelectValue(lessonValue);
      setLessonsSubjects(lessonValue);
    }
    setLessonsSubjects(lessonsSubjects);
    setLessonValue("");
  };

  const handleClick = (NextOrPrev) => {
    setIsWordVisible(false);

    switch (NextOrPrev) {
      case "Next":
        if (number + 1 === words.length) {
          setNumber(0);
        } else {
          setNumber((prevValue) => prevValue + 1);
        }
        break;
      case "Prev":
        if (number < 1) {
          setNumber(words.lenght - 1);
        } else {
          setNumber((prevValue) => prevValue - 1);
        }
    }
  };

  const handleIsFormPanelVisibleClick = () =>
    setIsFormPanelVisible((prevValue) => !prevValue);

  const handleShowWordClick = () => setIsWordVisible((prevValue) => !prevValue);

  const handleIsLearnedClick = (status) => {
    fetch("http://localhost:9000/words/update_word_status", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lesson: currentLessonValue,
        word: words[number].word,
        translate: words[number].translate,
        isLearned: status,
      }),
    });
    setWords(
      words.map((item) => {
        if (words[number].word === item.word) {
          item.isLearned = status;
          return item;
        } else return item;
      })
    );
    procentCalculator(words);
  };

  const handleKeyEvent = (key) => {
    if (key === "left") {
      handleClick("Prev");
    } else if (key === "right") {
      handleClick("Next");
    } else if (key === "down") {
      setIsWordVisible((prevValue) => !prevValue);
    }
  };

  return (
    <>
      <KeyboardEventHandler
        handleKeys={["left", "right", "down"]}
        onKeyEvent={(key) => handleKeyEvent(key)}
      />
      <GlobalStyle />
      <Header txt="FLASHCARDS" />
      <StyledWrapper>
        <Board
          words={words}
          isFormPanelVisible={isFormPanelVisible}
          isWordVisible={isWordVisible}
          word={words.length > 0 ? words[number].word : null}
          translation={words.length > 0 ? words[number].translate : null}
          handleIsLearnedClick={handleIsLearnedClick}
          Showfunc={handleShowWordClick}
          handleClick={handleClick}
          lessonsSubjects={lessonsSubjects}
          value={lessonSelectValue}
          handleSubmit={handleSubmit}
          handleWordInput={handleWordInput}
          handleTranslationInput={handleTranslationInput}
          handleLessonInput={handleLessonInput}
          handleLessonSelect={handleLessonSelect}
          WordValue={wordValue}
          TranslationValue={translationValue}
          handleAddWordSubmit={handleAddWordSubmit}
          lessonValue={lessonValue}
          handleLessonSubmit={handleLessonSubmit}
        />
      </StyledWrapper>
      <ButtonBottomBar
        main
        lesson={currentLessonValue}
        procentValue={procentValue}
        words={words}
        lessonsSubjects={lessonsSubjects}
        handleIsFormPanelVisibleClick={handleIsFormPanelVisibleClick}
        visible={isFormPanelVisible}
        show={false}
        lessonsSubjects={lessonsSubjects}
      />
    </>
  );
};

export default MainTemplate;
