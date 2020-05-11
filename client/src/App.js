import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchComponent from "./components/search.component.js";
import SavedComponent from "./components/saved.component.js";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  state = {

  }

  render() {
    return (
      <Router>
        <div className="container-fluid" style={{ padding: 0 }}>
          <nav className="navbar navbar-dark bg-primary" style={{ color: 'black' }}>
            {/* <a class="navbar-brand" href="bookpic here" target="_blank">
              <img src={logo} width="30" height="30" alt="Booksbooksbooksbooks" />
            </a> */}
            <Link to="/" className="navbar-brand" >MERN-Stack Book Search and Save App</Link>

            <ul className="nav">
              <li className="nav-item">
                <Link to="/" className="nav-link text-dark">Search</Link>
              </li>
              <li className="nav-item">
                <Link to="/saved" className="nav-link text-dark">Saved</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="container" style={{paddingTop: '1em'}}>
          <div className="App-header">
            <h2>Google Book Search and Save</h2>
          </div>
        </div>
        <Route exact path="/" component={SearchComponent} />
        <Route exact path="/saved" component={SavedComponent} />
        
      </Router>
    );
  }
}

export default App;
