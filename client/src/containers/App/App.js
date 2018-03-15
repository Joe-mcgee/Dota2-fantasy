import React, { Component } from 'react';
import styles from './App.scss';
import NavBar from './NavBar/NavBar.js'
import Matches from './Matches/Matches.js'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Matches />
      </div>
    );
  }
}

export default App;
