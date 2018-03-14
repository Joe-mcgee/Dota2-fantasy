import React, {Component} from 'react';
import Authenticator from './Authenticator.jsx';

/*
* Child Component
*/

class NavBar extends Component {
  render() {

    return (

      <div className="p-3 mb-2 bg-warning text-dark">
      <nav className="navbar navbar-light bg-light">
      <div className="p-3 mb-2 bg-warning text-dark">
        <a href="/" className="navbar-brand">Future Name</a>
        <Authenticator />
</div>
      </nav>
      </div>
      );
  }
}

export default NavBar;
