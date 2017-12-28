import React, { Component } from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import LandingPage from "./LandingPage";
import HomePage from "./homePage/homePage"

class App extends Component {
  render() {
    return (
      <div className="conteiner">
        <Router history={hashHistory}>
          <Route path="/">
            <IndexRoute component={LandingPage} />
              <Route path="home_page" component={HomePage} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
