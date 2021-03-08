import React from "react";
import Button from "../Atoms/Button";
import styled from "styled-components";

const StyledText = styled.h1`
  margin-top: 20px;
  font-size: 30px;
  font-weight: 300;
  letter-spacing: 3px;
  color: black;
`;

const HeaderBox = styled.div`
  align-items: center;
  grid-row: 1/2;
  background-color: #3e5c76;
  display: flex;
  height: 55px;
  width: 100%;
  justify-content: center;
  box-shadow: 0 4px 2px -2px black;
`;

const LoginHeaderBox = styled.div`
  position: relative;
  align-items: center;
  grid-row: 1/2;
  background-color: #3e5c76;
  display: flex;
  justify-content: center;
  height: 55px;
  width: 100%;
  box-shadow: 0 4px 2px -2px black;
`;

const LoginPageTextWrapper = styled.div`
  /* flex-basis: 50%; */
`;

const LoginPageButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
`;

const Header = ({ txt, type, handleToggleLoginOrRegister }) => {
  return (
    <>
      {type === "loginPage" ? (
        <LoginHeaderBox>
          <LoginPageTextWrapper>
            <StyledText>{txt}</StyledText>
          </LoginPageTextWrapper>

          <LoginPageButtonWrapper>
            <Button txt="Register" function={handleToggleLoginOrRegister} />
          </LoginPageButtonWrapper>
        </LoginHeaderBox>
      ) : (
        <HeaderBox>
          <StyledText>{txt}</StyledText>
        </HeaderBox>
      )}
    </>
  );
};

export default Header;
