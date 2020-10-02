import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Atoms/Button";
import ProcentField from "../Atoms/ProcentField";

const StyledBox = styled.div`
  display: flex;
  height: 6vh;
  border-top: 0.1vh solid black;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  width: 50%;
  background-color: #3098d9;
`;

const StyledWordListBox = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
  background-color: #3098d9;
`;

const StyledPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  background-color: #3098d9;
`;

function ButtonBottomBar(props) {
  return (
    <StyledBox>
      {props.main ? (
        <>
          <StyledPanel>
            {props.words.length > 0 ? (
              <ProcentField
                txt={`Lekcja: ${props.lesson} została opanowana w ${props.procentValue}%`}
              />
            ) : null}
          </StyledPanel>
          <StyledWrapper>
            <Link to="/WordList">
              <Button secondary warning renderAs="button" txt="word list" />
            </Link>
            <Button
              secondary
              warning
              function={props.handleIsFormPanelVisibleClick}
              txt={props.visible ? "Ukryj panel" : "Pokaz panel"}
            />
          </StyledWrapper>
        </>
      ) : (
        <StyledWordListBox>
          <Link to="/">
            <Button secondary renderAs="button" txt="Main Board" />
          </Link>
        </StyledWordListBox>
      )}
    </StyledBox>
  );
}

export default ButtonBottomBar;
