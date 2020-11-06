import React, { useState, useEffect } from "react";
import "../../style.css";
import styled from "styled-components";
import GlobalStyle from "../Shared/GlobalTheme";
import Header from "../Atoms/Header";
import ButtonBottomBar from "../Molecules/ButtonBottomBar";
import WordTable from "../Molecules/WordTable";
import API_URL from "../../api";

const StyledWrapper = styled.div`
  display: flex;
  overflow: scroll;
  flex-direction: column;
  align-items: center;
  height: 85vh;
  width: 100%;
`;

const WordList = ({ words, handleAction }) => {
  const [data, setData] = useState(words);

  useEffect(() => {
    setData(words);
  }, [words]);

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
          handleDeleteClick(lesson, itemToDelete);
        }
        break;
      default:
        return null;
    }
  };

  const handleDeleteClick = (lesson, element) => {
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

    data.map((item, index) => {
      if (lesson === item.lesson) {
        data[index].words.map((el, id) => {
          if (element === el.word) {
            data[index].words.splice(id, 1);
          }
        });
      }
      setData([...data]);
    });
  };

  const handleDeleteLessonClick = (itemToDelete) => {
    fetch(`${API_URL}lessons/delete_lesson/${itemToDelete}`, {
      method: "DELETE",
    }).then((response) => response.json());

    handleAction({
      type: "REMOVE",
      itemToDelete,
    });
  };

  return (
    <>
      <GlobalStyle />
      <Header txt="Lista fiszek" />
      <StyledWrapper>
        <WordTable data={data} handleConfirm={handleConfirm} />
      </StyledWrapper>
      <ButtonBottomBar />
    </>
  );
};

export default WordList;
