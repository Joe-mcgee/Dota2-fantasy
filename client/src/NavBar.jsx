import React, {Component} from 'react';
import Authenticator from './Authenticator.jsx';

/*
* Child Component
*/

class NavBar extends Component {
  render() {

    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Future Name</a>
        <Authenticator />

      </nav>
      );
  }
}

export default NavBar;
