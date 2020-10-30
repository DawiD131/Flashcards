import React, { useState } from "react";
import Button from "../Atoms/Button";
import StyledInput from "../Shared/StyledInput";
import StyledForm from "../Shared/StyledForm";

const ChooseLessonForm = ({
  lessonsSubjects,
  currentLessonValue,
  handleAction,
}) => {
  const [wordValue, setWordValue] = useState("");
  const [translationValue, setTranslationValue] = useState("");

  const handleWordInput = (e) => setWordValue(e.target.value);
  const handleTranslationInput = (e) => setTranslationValue(e.target.value);

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

    handleAction({
      type: "ADD_WORD",
      lesson: currentLessonValue,
      wordToAdd: {
        word: wordValue,
        translation: translationValue,
        isLearned: false,
      },
    });

    setTranslationValue("");
    setWordValue("");
  };
  return (
    <>
      {lessonsSubjects.length > 0 ? (
        <StyledForm onSubmit={handleAddWordSubmit}>
          <h2>Dodaj fiszkę</h2>
          <label htmlFor="wordValue">
            Słówko:
            <StyledInput
              autoComplete="off"
              type="text"
              name="wordValue"
              placeholder="Wpisz słówko"
              value={wordValue}
              onChange={handleWordInput}
            />
          </label>
          <label htmlFor="translationValue">
            Tłumaczenie:
            <StyledInput
              autoComplete="off"
              type="text"
              name="translationValue"
              placeholder="Wpisz tłumaczenie"
              value={translationValue}
              onChange={handleTranslationInput}
            />
          </label>
          <Button submit type="submit" txt="Dodaj" />
        </StyledForm>
      ) : null}
    </>
  );
};

export default ChooseLessonForm;
