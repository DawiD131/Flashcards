import React from "react";
import Button from "../Atoms/Button";
import StyledInput from "../Shared/StyledInput";
import StyledForm from "../Shared/StyledForm";

const AddLessonForm = ({
  handleAddLessonSubmit,
  lessonInputValue,
  handleLessonInput,
}) => {
  return (
    <StyledForm onSubmit={handleAddLessonSubmit}>
      <h2>Dodaj lekcję</h2>
      <label htmlFor="lessonValue">
        Temat:
        <StyledInput
          autoComplete="off"
          type="text"
          name="lessonValue"
          placeholder="Wpisz temat lekcji"
          value={lessonInputValue}
          onChange={handleLessonInput}
        />
      </label>
      <Button submit type="submit" txt="Dodaj!" />
    </StyledForm>
  );
};

export default AddLessonForm;
