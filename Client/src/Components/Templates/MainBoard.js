import React from "react";
import "../../style.css";
import styled from "styled-components";
import KeyboardEventHandler from "react-keyboard-event-handler";
import Header from "../Atoms/Header";
import Card from "../Molecules/Card";
import ButtonBar from "../Molecules/ButtonBar";
import PanelForm from "../Organisms/PanelForm";
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

const StyledCardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 35%;
`;

class App extends React.Component {
  state = {
    words: [],
    currentLessonValue: "",
    lessonsSubjects: [],
    number: 0,
    lessonSelectValue: "",
    wordValue: "",
    translationValue: "",
    lessonValue: "",
    isWordVisible: false,
    isFormPanelVisible: true,
    procentValue: 0,
  };

  messages = {
    text_incorrect:
      "Pole nie moze być puste i lekcja/słówko nie moze się powtarzac",
  };

  componentDidMount() {
    fetch(`http://localhost:9000/lessons/get_lessons_with_words`)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        var words = [];
        const lessons = data.map((item) => item.lesson);
        console.log(lessons.length);
        if (lessons.length > 0) {
          words = data[0].words;
          this.setState({
            words,
            currentLessonValue: lessons[0],
            lessonSelectValue: lessons[0],
          });
        } else {
          words = [];
        }
        this.setState({
          lessonsSubjects: lessons,
        });
      })
      .catch((error) => console.log(error));
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (event) => {
    const { lessonSelectValue } = this.state;
    let counter = 0;
    fetch(`http://localhost:9000/words/get_words/${lessonSelectValue}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          words: data.words,
        });

        data.words.map((item) => {
          if (item.isLearned === true) {
            counter++;
          }
        });
        this.setState({
          procentValue: Math.round((counter / data.words.length) * 100),
        });
      });
    this.setState({
      number: 0,
      currentLessonValue: lessonSelectValue,
    });
    event.preventDefault();
  };

  handleAddWordSubmit = (event) => {
    event.preventDefault();
    const validation = this.formValidation(this.state.words, "words");
    if (validation.wordValue === true || validation.translationValue === true) {
      window.alert(
        "Żadne pole nie moze byc puste i słówko nie moze zaczynać się od spacji"
      );
    } else if (validation.isRepeat) {
      window.alert("Słówko nie moze się powtarzać");
    } else {
      let counter = 0;
      const {
        currentLessonValue,
        wordValue,
        translationValue,
        words,
      } = this.state;
      const OldWords = words;

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

      const newWord = {
        word: wordValue,
        translate: translationValue,
        isLearned: false,
      };

      words.push(newWord);

      words.map((item) => {
        if (item.isLearned === true) {
          counter++;
          return item;
        } else return item;
      });

      if (counter === 0) {
        this.setState({
          procentValue: 0,
        });
      } else {
        this.setState({
          procentValue: Math.round((counter / words.length) * 100),
        });
      }
      this.setState({
        words: OldWords,
        translationValue: "",
        wordValue: "",
      });
    }
  };

  handleLessonSubmit = (event) => {
    event.preventDefault();
    const validation = this.formValidation(
      this.state.lessonsSubjects,
      "lessons"
    );

    if (validation.lessonValue === true) {
      window.alert("Pole lekcji nie moze być puste i zaczynać się od spacji!");
    } else if (validation.isRepeat === true) {
      window.alert("Lekcja nie moze się powtarzać!");
    } else {
      const data = {
        lesson: this.state.lessonValue,
      };

      fetch("http://localhost:9000/lessons/create_new_lesson", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      this.state.lessonsSubjects.push(this.state.lessonValue);

      if (this.state.lessonsSubjects.length === 1) {
        this.setState({
          lessonSelectValue: this.state.lessonValue,
        });
      }
      this.setState({
        lessonsSubjects: this.state.lessonsSubjects,
        lessonValue: "",
        currentLessonValue:
          this.state.lessonsSubjects.length === 1
            ? this.state.lessonValue
            : this.state.lessonsSubjects[0],
      });
    }
  };

  handleClick = (NextOrPrev) => {
    const { number, words } = this.state;
    this.setState({
      isWordVisible: false,
    });

    switch (NextOrPrev) {
      case "Next":
        if (number + 1 === words.length) {
          this.setState({
            number: 0,
          });
        } else {
          this.setState({
            number: number + 1,
          });
        }
        break;
      case "Prev":
        if (number < 1) {
          this.setState({
            number: words.length - 1,
          });
        } else {
          this.setState({
            number: number - 1,
          });
        }
    }
  };

  handleIsFormPanelVisibleClick = () => {
    this.setState({
      isFormPanelVisible: !this.state.isFormPanelVisible,
    });
  };

  handleShowWordClick = () => {
    this.setState({
      isWordVisible: !this.state.isWordVisible,
    });
  };

  handleIsLearnedClick = (status) => {
    const { words, number, currentLessonValue } = this.state;
    let counter = 0;
    const data = {
      lesson: currentLessonValue,
      word: words[number].word,
      translate: words[number].translate,
      isLearned: status,
    };

    fetch("http://localhost:9000/words/update_word_status", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    this.setState({
      words: words.map((item) => {
        if (words[number].word === item.word) {
          item.isLearned = status;
          return item;
        } else return item;
      }),
    });

    words.map((item) => {
      if (item.isLearned === true) {
        counter++;
      }
    });
    this.setState({
      procentValue: Math.round((counter / words.length) * 100),
    });
  };

  handleKeyEvent = (key) => {
    if (key === "left") {
      this.handleClick("Prev");
    } else if (key === "right") {
      this.handleClick("Next");
    } else if (key === "down") {
      this.setState({
        isWordVisible: !this.state.isWordVisible,
      });
    }
  };

  formValidation = (items, typeOfItems) => {
    let lessonValue = false;
    let wordValue = false;
    let translationValue = false;
    let isRepeat = false;

    switch (typeOfItems) {
      case "words":
        items.map((item) => {
          if (
            item.word.toUpperCase() === this.state.wordValue.toUpperCase() ||
            item.translate.toUpperCase() ===
              this.state.lessonValue.toUpperCase()
          ) {
            isRepeat = true;
            console.log("powtarza się");
          }
        });
        break;
      case "lessons":
        items.map((item) => {
          if (item.toUpperCase() === this.state.lessonValue.toUpperCase()) {
            isRepeat = true;
          }
        });
        break;
    }

    if (
      this.state.lessonValue.length === 0 ||
      this.state.lessonValue[0] === " "
    ) {
      lessonValue = true;
    }

    if (this.state.wordValue.length === 0 || this.state.wordValue[0] === " ") {
      wordValue = true;
    }

    if (
      this.state.translationValue.length === 0 ||
      this.state.translationValue[0] === " "
    ) {
      translationValue = true;
    }

    return {
      lessonValue,
      wordValue,
      translationValue,
      isRepeat,
    };
  };

  render() {
    const {
      currentLessonValue,
      isWordVisible,
      words,
      number,
      lessonsSubjects,
      lessonSelectValue,
      lessonValue,
      wordValue,
      translationValue,
      isFormPanelVisible,
    } = this.state;
    return (
      <>
        <KeyboardEventHandler
          handleKeys={["left", "right", "down"]}
          onKeyEvent={(key) => this.handleKeyEvent(key)}
        />
        <GlobalStyle />
        <Header txt="FLASHCARDS" />
        <StyledWrapper>
          <StyledCardBox>
            {words.length > 0 ? (
              <Card
                isWordVisible={isWordVisible}
                show={true}
                word={words[number].word}
                translation={words[number].translate}
              />
            ) : (
              <Card show={false} lessonsSubjects={lessonsSubjects} />
            )}
            {words.length > 0 ? (
              <ButtonBar
                isWordVisible={isWordVisible}
                handleIsLearnedClick={this.handleIsLearnedClick}
                Prevfunc={() => this.handleClick("Prev")}
                Showfunc={this.handleShowWordClick}
                Nextfunc={() => this.handleClick("Next")}
              />
            ) : null}
          </StyledCardBox>
          {isFormPanelVisible ? (
            <PanelForm
              lessonsSubjects={lessonsSubjects}
              value={lessonSelectValue}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              WordValue={wordValue}
              TranslationValue={translationValue}
              handleAddWordSubmit={this.handleAddWordSubmit}
              LessonValue={lessonValue}
              handleLessonSubmit={this.handleLessonSubmit}
            />
          ) : null}
        </StyledWrapper>
        <ButtonBottomBar
          main
          lesson={currentLessonValue}
          procentValue={this.state.procentValue}
          words={words}
          lessonsSubjects={lessonsSubjects}
          handleIsFormPanelVisibleClick={this.handleIsFormPanelVisibleClick}
          visible={isFormPanelVisible}
        />
      </>
    );
  }
}

export default App;
