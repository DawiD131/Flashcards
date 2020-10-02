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

function ChooseLessonForm(props) {
  return (
    <>
      <StyledForm onSubmit={props.handleSubmit}>
        <h2>Lekcja:</h2>

        <Select
          name="lessonSelectValue"
          value={props.value}
          onChange={props.handleChange}
        >
          {props.lessons.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </Select>

        <Button submit type="submit" txt="Wybierz" />
      </StyledForm>
    </>
  );
}

export default ChooseLessonForm;
