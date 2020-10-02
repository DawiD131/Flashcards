import React from "react";
import Button from "../Atoms/Button";
import StyledInput from "../Shared/StyledInput";
import StyledForm from "../Shared/StyledForm";

function ChooseLessonForm(props) {
  return (
    <StyledForm onSubmit={props.handleAddWordSubmit}>
      <h2>Dodaj fiszkę</h2>
      <label htmlFor="wordValue">
        Słówko:
        <StyledInput
          autoComplete="off"
          type="text"
          name="wordValue"
          placeholder="Wpisz słówko"
          value={props.WordValue}
          onChange={props.handleChange}
        />
      </label>
      <label htmlFor="translationValue">
        Tłumaczenie:
        <StyledInput
          autoComplete="off"
          type="text"
          name="translationValue"
          placeholder="Wpisz tłumaczenie"
          value={props.TranslationValue}
          onChange={props.handleChange}
        />
      </label>
      <Button submit type="submit" txt="Dodaj" />
    </StyledForm>
  );
}

export default ChooseLessonForm;
