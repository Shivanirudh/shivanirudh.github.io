import React from 'react';
import Particles from "react-particles-js";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import HomePage from "./components/HomePage";
import Timeline from "./components/Timeline";
import Owner from "./components/Owner";
import Navigation from "./components/Navigation";
function App() {

  const particleParams = {
    fpsLimit: 60,
    particles: {
      color: {
        value: "#6b605a",
      },
      number: {
        density: {
          enable: true,
          value_area: 1000,
        },
        value: 100,
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
        }
      },
      shape: {
        type: "circle",
      },
      size: {
        random: false,
        value: 5,
      },
    },
    retina_detect: true,
  }

  return (
    <div className="App">
      <Particles className="particles" params={particleParams} />
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/about">
            <Owner/>
          </Route>
          <Route exact path="/timeline">
            <Timeline/>
          </Route>
        </Switch>
      </Router>
      <div className="footer">&copy;Copyright 2020</div>
    </div>
  );
}

export default App;
