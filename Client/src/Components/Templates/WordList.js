import React, { useState, useEffect, useContext } from "react";
import "../../style.css";
import styled from "styled-components";
import GlobalStyle from "../Shared/GlobalTheme";
import Header from "../Atoms/Header";
import ButtonBottomBar from "../Molecules/ButtonBottomBar";
import WordTable from "../Molecules/WordTable";

const StyledWrapper = styled.div`
  display: flex;
  overflow: scroll;
  flex-direction: column;
  align-items: center;
  height: 85vh;
  width: 100%;
`;

const WordList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/lessons/get_lessons_with_words")
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

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
    }
  };

  const handleDeleteClick = (lesson, element) => {
    fetch("http://localhost:9000/words/delete_word", {
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
    fetch(`http://localhost:9000/lessons/delete_lesson/${itemToDelete}`, {
      method: "DELETE",
    }).then((response) => response.json());

    data.map((item, id) => {
      if (item.lesson === itemToDelete) {
        data.splice(id, 1);
      }
      setData([...data]);
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
