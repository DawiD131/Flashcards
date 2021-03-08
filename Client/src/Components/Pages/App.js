import React, { useState, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoadingPage from "../Templates/LoadingPage";
import MainTemplate from "../Templates/MainTemplate/MainTemplate";
import WordList from "../Templates/WordList";
import appReducer from "../../Reducers/appReducer";
import LoginPage from "../Templates/LoginPage";
import API_URL from "../../api";

const App = () => {
  const initialState = {
    data: [],
    words: [],
    id: 0,
    lessonSubjects: [],
    currentLesson: "",
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  // useEffect(() => {
  //   // async function getData(url) {
  //   //   await fetch(`${API_URL}lessons/get_lessons_with_words`)
  //   //     .then((response) => response.json())
  //   //     .then(function store(data) {
  //   //       localStorage.clear();
  //   //       localStorage.setItem("data", JSON.stringify(data.hits));
  //   //       dispatch({
  //   //         type: "FETCH",
  //   //         data,
  //   //       });
  //   //       setIsLoading(true);
  //   //     })
  //   //     .catch(function (error) {
  //   //       console.log("Request failed", error);
  //   //     });
  //   // }
  //   // getData();
  // }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage state={state} dispatch={dispatch} />
        </Route>
        <Route path="/MainTemplate">
          <MainTemplate state={state} dispatch={dispatch} />
        </Route>
        <Route path="/WordList">
          <WordList state={state} dispatch={dispatch} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
