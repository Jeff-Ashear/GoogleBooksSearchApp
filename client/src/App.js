import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchComponent from "./components/search.component.js";
import SavedComponent from "./components/saved.component.js";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-light">
            <a class="navbar-brand" href="bookpic here" target="_blank">
              <img src={logo} width="30" height="30" alt="Booksbooksbooksbooks" />
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Book Search and Save App</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Search</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/saved" className="nav-link">saved</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Route exact path="/" component={SearchComponent} />
        <Route exact path="/saved" component={SavedComponent} />
        <div className="container">
          <div className="App-header">
            <h2>Google Book Search and Save</h2>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
