import React from "react";
import "../../style.css";
import styled from "styled-components";
import GlobalStyle from "../Shared/GlobalTheme";
import Header from "../Atoms/Header";
import ButtonBottomBar from "../Molecules/ButtonBottomBar";
import WordTable from "../Molecules/WordTable";
import API_URL from "../../api";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: space-between;
  width: 100%;
`;

const WordList = ({ state, dispatch }) => {
  const handleConfirm = (lessonOrWord, itemToDelete, lesson) => {
    switch (lessonOrWord) {
      case "lesson":
        if (
          window.confirm(`Czy na pewno chcesz usunąć lekcję ${itemToDelete}?`)
        ) {
          handleDeleteLessonClick(itemToDelete);
        }
        break;
      case "word":
        if (
          window.confirm(`Czy na pewno chcesz usunąć słówko ${itemToDelete}?`)
        ) {
          handleDeleteWordClick(lesson, itemToDelete);
        }
        break;
      default:
        return null;
    }
  };

  const handleDeleteWordClick = (lesson, element) => {
    fetch(`${API_URL}words/delete_word`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lesson: lesson,
        word: element.word,
        translation: element.translate,
      }),
    });

    console.log(lesson, element);
    dispatch({
      type: "DELETE_WORD",
      lesson: lesson,
      wordToDelete: element,
    });
  };

  const handleDeleteLessonClick = (itemToDelete) => {
    // fetch(`${API_URL}lessons/delete_lesson/${itemToDelete}`, {
    //   method: "DELETE",
    // }).then((response) => response.json());

    dispatch({
      type: "DELETE_LESSON",
      lessonToDelete: itemToDelete,
    });
  };

  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <Header txt="Lista fiszek" />
        <WordTable data={state.data} handleConfirm={handleConfirm} />
        <ButtonBottomBar />
      </StyledWrapper>
    </>
  );
};

export default WordList;
