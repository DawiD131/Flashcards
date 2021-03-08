import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Atoms/Button";
import axios from "axios";

const StyledBox = styled.div`
  min-height: 40px;
  display: flex;
  girid-row: 4/5;
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
  const Logout = () => {
    // console.log("asdas");
    // fetch("http://localhost:9000/logout").then((res) => {
    //   console.log(res);
    // });
    console.log("dsa");
    axios
      .get("http://localhost:9000/logout", { withCredentials: true })
      .then(function (response) {
        console.log("wylogowano");
      })
      .catch(function (error) {
        console.log("błąd");
      });
  };

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
            <Link to="/">
              <button
                onClick={Logout}
                // warning
                // secondary
                // renderAs="button"
                // txt="Log Out"
              >
                logout
              </button>
            </Link>
          </StyledWrapper>
        </>
      ) : (
        <StyledWrapper>
          <Link to="/MainTemplate">
            <Button warning secondary renderAs="button" txt="Main Board" />
          </Link>
        </StyledWrapper>
      )}
    </StyledBox>
  );
};

export default ButtonBottomBar;
