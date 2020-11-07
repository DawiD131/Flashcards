import React, { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainTemplate from "../Templates/MainTemplate/MainTemplate";
import WordList from "../Templates/WordList";
import appReducer from "../../Reducers/appReducer";
import API_URL from "../../api";

const App = () => {
  const initialState = {
    data: [],
    words: [],
    lessonSubjects: [],
    currentLesson: "",
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    fetch(`${API_URL}lessons/get_lessons_with_words`)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: "FETCH",
          data,
        });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
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
