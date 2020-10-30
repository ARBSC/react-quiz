import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component {
  render () {
    const name = 'Antonio';
    return (
      <Fragment>
      <div className="App">
        <Navbar />
        <h1>Hello from React, {name}</h1>
      </div>
      </Fragment>
    );
  }
}

export default App;
