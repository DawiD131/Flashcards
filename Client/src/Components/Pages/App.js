import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainTemplate from "../Templates/MainTemplate";
import WordList from "../Templates/WordList";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <MainTemplate />
        </Route>
        <Route path="/WordList">
          <WordList />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
