import React, { Component } from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar/Navbar.js';
import Header from './components/Header/Header.js';
// import Search from './pages/Search';
import Saved from './pages/Saved';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Switch>
        <Route exact path='/saved' component={Saved} />
      </Switch>

    </div>
  );
}


export default App;
