import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Login } from "./Login";
import { SampleList } from "./component/sample";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/list" component={SampleList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export { App };
