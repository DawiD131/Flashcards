import React from "react";
import Button from "../Atoms/Button";
import styled from "styled-components";
import StyledForm from "../Shared/StyledForm";

const Select = styled.select`
  width: 40%;
  height: 17%;
  font-size: 13px;
  margin-bottom: 1%;
  background: #f0ebd8;
  outline: none;
  display: block;
  border: none;
`;

const ChooseLessonForm = ({
  lessonsSubjects,
  handleSubmit,
  handleLessonSelect,
}) => {
  return (
    <>
      {lessonsSubjects.length > 0 ? (
        <StyledForm onSubmit={handleSubmit}>
          <h2>Lekcja:</h2>
          <Select onChange={handleLessonSelect}>
            {lessonsSubjects.map((lesson, index) => {
              return (
                <option key={index} value={lesson}>
                  {lesson}
                </option>
              );
            })}
          </Select>
          <Button submit type="submit" txt="Wybierz" />
        </StyledForm>
      ) : null}
    </>
  );
};

export default ChooseLessonForm;
