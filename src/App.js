import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./Router/Home";
import About from "./Router/About";
import Detail from "./Router/Detail";
import Navigation from "./Router/Navigation";

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail:id" component={Detail} />
    </HashRouter>
  );
};

export default App;
