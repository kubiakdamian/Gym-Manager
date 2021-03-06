import React, { Component } from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import LandingPage from "./LandingPage";
import HomePage from "./homePage/homePage"
import Training from "./Training/Training"
import Diet from "./Diet/Diet"
import Sizes from "./Sizes/Sizes"

class App extends Component {
  render() {
    return (
      <div className="conteiner">
        <Router history={hashHistory}>
          <Route path="/">
            <IndexRoute component={LandingPage} />
              <Route path="home_page" component={HomePage} />
              <Route path="training" component={Training} />
              <Route path="diet" component={Diet} />
              <Route path="sizes" component={Sizes} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
