import React from "react";
import "../../style.css";
import styled from "styled-components";
import GlobalStyle from "../Shared/GlobalTheme";
import Button from "../Atoms/Button";
import Header from "../Atoms/Header";
import ButtonBottomBar from "../Molecules/ButtonBottomBar";

const StyledWrapper = styled.div`
  display: flex;
  overflow: scroll;
  flex-direction: column;
  align-items: center;
  height: 85vh;
  width: 100%;
`;

const Table = styled.table`
  font-family: arial, sans-serif;
  text-align: center;
  border-collapse: collapse;
  width: 35%;
`;
const Td = styled.td`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 4px;
`;
const Th = styled.th`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid black;
  padding: 3px;
`;

class WordList extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch("https://flashcards--api.herokuapp.com/get_lessons_with_words")
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data,
        });
      })
      .catch((error) => console.log(error));
  }

  handleConfirm = (lessonOrWord, itemToDelete, lesson) => {
    switch (lessonOrWord) {
      case "lesson":
        if (
          window.confirm(`Czy na pewno chcesz usunąć lekcję ${itemToDelete}?`)
        ) {
          this.handleDeleteLessonClick(itemToDelete);
        }
        break;
      case "word":
        if (
          window.confirm(`Czy na pewno chcesz usunąć słówko ${itemToDelete}?`)
        ) {
          this.handleDeleteClick(lesson, itemToDelete);
        }
        break;
    }
  };

  handleDeleteClick = (lesson, element) => {
    const { data } = this.state;

    fetch("https://flashcards--api.herokuapp.com/delete_word", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lesson: lesson,
        word: element.word,
        translation: element.translate,
      }),
    });

    this.state.data.map((item, index) => {
      if (lesson === item.lesson) {
        this.state.data[index].words.map((el, id) => {
          if (element === el.word) {
            this.state.data[index].words.splice(id, 1);
          }
        });
      }
      this.setState({
        data,
      });
    });
  };

  handleDeleteLessonClick = (itemToDelete) => {
    fetch(
      `https://flashcards--api.herokuapp.com/delete_lesson/${itemToDelete}`
    ).then((response) => response.json());

    let data = this.state.data;
    data.map((item, id) => {
      if (item.lesson === itemToDelete) {
        data.splice(id, 1);
      }
      this.setState({
        data,
      });
    });
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Header txt="Lista fiszek" />
        <StyledWrapper>
          {this.state.data.length === 0 ? (
            <>
              <h1>Brak lekcji</h1>
              <br />
              <h1>Przejdź do panelu głównego i dodaj lekcję</h1>
            </>
          ) : (
            this.state.data.map((item, index) => {
              return (
                <Table key={index}>
                  <tbody>
                    <tr>
                      <Th>
                        {`Temat: ${item.lesson}`}
                        <Button
                          dangerous
                          txt="Usuń"
                          function={() =>
                            this.handleConfirm("lesson", item.lesson, null)
                          }
                        />
                      </Th>
                    </tr>
                    {item.words.map((element, index) => {
                      return (
                        <tr key={index}>
                          <Td key={element.word}>
                            {`${element.word} - ${element.translate}`}{" "}
                            <Button
                              key={element.translate}
                              warning
                              txt="Usuń"
                              function={() =>
                                this.handleConfirm(
                                  "word",
                                  element.word,
                                  item.lesson
                                )
                              }
                            />
                          </Td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              );
            })
          )}
        </StyledWrapper>
        <ButtonBottomBar />
      </>
    );
  }
}

export default WordList;
