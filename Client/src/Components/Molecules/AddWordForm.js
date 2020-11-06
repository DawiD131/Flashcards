import React, { useEffect, useState } from "react";
import Button from "../Atoms/Button";
import StyledInput from "../Shared/StyledInput";
import StyledForm from "../Shared/StyledForm";
import styled from "styled-components";
import API_URL from "../../api";

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

const AddWordForm = ({
  lessonsSubjects,
  handleAddWordSubmit,
  wordValue,
  translationValue,
  handleWordInput,
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

export default AddWordForm;
