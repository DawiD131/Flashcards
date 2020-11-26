import React from "react";
import styled from "styled-components";
import GlobalStyle from "../Shared/GlobalTheme";

const LoadingPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Loader = styled.div`
  border: 10px solid #8096b3;
  border-radius: 50%;
  border-top: 10px solid #00bbff;
  border-bottom: 10px solid #00bbff;
  width: 90px;
  height: 90px;
  -webkit-animation: spin 1s ease infinite;
  animation: spin 1s ease infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingPage = () => {
  return (
    <>
      <GlobalStyle />
      <LoadingPageWrapper>
        <div>
          <Loader />
          <h2>Loading...</h2>
        </div>
      </LoadingPageWrapper>
    </>
  );
};

export default LoadingPage;
