import React from "react";
import Button from "../Atoms/Button";
import styled from "styled-components";
import StyledForm from "../Shared/StyledForm";

const Select = styled.select`
  width: 40%;
  height: 17%;
  font-size: 13px;
  margin-bottom: 1%;
  background: #f2e3bc;
  outline: none;
  display: block;
  border: none;
  border-radius: 4px;
`;

const ChooseLessonForm = ({
  lessonsSubjects,
  handleSubmit,
  value,
  handleLessonSelect,
}) => {
  return (
    <>
      {lessonsSubjects.length > 0 ? (
        <StyledForm onSubmit={handleSubmit}>
          <h2>Lekcja:</h2>
          <Select value={value} onChange={handleLessonSelect}>
            {lessonsSubjects.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
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
