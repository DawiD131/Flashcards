import React from "react";
import styled from "styled-components";

const StyledText = styled.h1`
  margin-top: 1%;
  font-size: 50px;
  font-weight: 200;
  color: black;
`;

const HeaderBox = styled.div`
  background-color: #3098d9;
  display: flex;
  height: 9vh;
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
