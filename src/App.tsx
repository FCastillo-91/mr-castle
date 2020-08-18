import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Gallery } from "./components/Gallery/Gallery";
import { Contact } from "./components/Contact/Contact";
import { Products } from "./Products/Products";
import { NavBar } from "./components/NavBar/NavBar";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/products" component={Products} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}
