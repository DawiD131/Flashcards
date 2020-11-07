import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Atoms/Button";

const StyledBox = styled.div`
  min-height: 40px;
  display: flex;
  self-align: flex-end;
  width: 100%;
  border-top: 0.1vh solid black;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-end;
  width: 100%;
  background-color: #3e5c76;
`;

const ButtonBottomBar = ({ main, handleIsFormPanelVisibleClick, visible }) => {
  return (
    <StyledBox>
      {main ? (
        <>
          <StyledWrapper>
            <Link to="/WordList">
              <Button secondary warning renderAs="button" txt="word list" />
            </Link>
            <Button
              secondary
              warning
              function={handleIsFormPanelVisibleClick}
              txt={visible ? "Ukryj panel" : "Pokaz panel"}
            />
          </StyledWrapper>
        </>
      ) : (
        <StyledWrapper>
          <Link to="/">
            <Button warning secondary renderAs="button" txt="Main Board" />
          </Link>
        </StyledWrapper>
      )}
    </StyledBox>
  );
};

export default ButtonBottomBar;
