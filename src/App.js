import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <div className='container'>
            <Switch></Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}
export default App;
