import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchComponent from "./components/search.component.js";
import SavedComponent from "./components/saved.component.js";
import "./App.css";
import texture from "./styling/images/brownLeather.jpg";
import littleShelf from "./styling/images/sideStacks.png";

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
        <div className="container" style={{padding: '1em', backgroundImage: `url(${texture})`, margin: `0 auto`, width: `100vw`}}>
          <div className="App-header" style={{ 
            backgroundImage: `url(${littleShelf})`,
            backgroundSize: `contain`,
            border: `inset 4px darkgrey`,
            borderRadius: `4px`
            }}>
            <h1 style={{ color: `white`, fontOutline: `1px`}}>Google Books Search and Save</h1>
          </div>
        </div>
        <Route exact path="/" component={SearchComponent} />
        <Route exact path="/saved" component={SavedComponent} />
        
      </Router>
    );
  }
}

export default App;
