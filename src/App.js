import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Main from "./layouts/Main";
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";
import Product from "./pages/Product";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/product/:id">
          <Product />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/search">
          <Search />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
