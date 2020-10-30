import React from "react";
import styled from "styled-components";
import WordField from "../Atoms/WordField";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 93%;
  background-color: #41a1dc;
  box-shadow: inset 0 0 5px #000000;
`;

const WordBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 25%;
  border-bottom: 1px solid black;
  margin: 2%;
`;

const Card = ({ word, translation, lessonsSubjects, isTranslationVisible }) => {
  return (
    <>
      <StyledWrapper>
        {word ? (
          <>
            <WordBox>
              <WordField word={word} />
            </WordBox>
            <WordBox>
              {isTranslationVisible ? <WordField word={translation} /> : null}
            </WordBox>
          </>
        ) : lessonsSubjects.length > 0 ? (
          <WordField word="Brak słówek" />
        ) : (
          <WordField word="Najpierw dodaj lekcję" />
        )}
      </StyledWrapper>
    </>
  );
};

export default Card;
