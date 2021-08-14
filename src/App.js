import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import CountryInfo from "./Pages/CountryInfo/CountryInfo";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:id" exact>
          <CountryInfo />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
