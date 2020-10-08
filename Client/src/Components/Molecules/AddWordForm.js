import React from "react";
import Button from "../Atoms/Button";
import StyledInput from "../Shared/StyledInput";
import StyledForm from "../Shared/StyledForm";

const ChooseLessonForm = ({
  lessonsSubjects,
  handleAddWordSubmit,
  wordValue,
  handleWordInput,
  translationValue,
  handleTranslationInput,
}) => {
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
