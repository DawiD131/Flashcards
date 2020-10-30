import React, { useReducer, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainTemplate from "../Templates/MainTemplate/MainTemplate";
import WordList from "../Templates/WordList";
import appReducer from "../../reducers/appReducer";

const App = () => {
  const [state, dispatch] = useReducer(appReducer, []);

  useEffect(() => {
    fetch(`http://localhost:9000/lessons/get_lessons_with_words`)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "FETCH", data });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <MainTemplate data={state} handleAction={dispatch} />
        </Route>
        <Route path="/WordList">
          <WordList words={state} handleAction={dispatch} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
