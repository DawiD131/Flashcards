import React from "react";
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

const Header = (props) => {
  return (
    <HeaderBox>
      <StyledText>{props.txt}</StyledText>
    </HeaderBox>
  );
};

export default Header;
