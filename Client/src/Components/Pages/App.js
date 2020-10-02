import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainBoard from "../Templates/MainBoard";
import WordList from "../Templates/WordList";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <MainBoard />
        </Route>
        <Route path="/WordList">
          <WordList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
