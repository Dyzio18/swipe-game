import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Home from './views/home/Home'
import Campaign from './views/campaign/Campaign'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="title">Valhalla</h1>
        <div className="card">
          <header>
            <div>
              <Link className="nav__link" to="/">Home</Link>
              <Link className="nav__link" to="/campaign">Kampanie</Link>
            </div>
          </header>
          <main>     
            <Route exact path="/" component={Home} />
            <Route exact path="/campaign" component={Campaign} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
