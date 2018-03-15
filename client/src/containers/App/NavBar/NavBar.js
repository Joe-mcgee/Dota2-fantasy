import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import logo from './logo.png';
import styles from './NavBar.scss';

class NavBar extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.header}>

          <a href="/">
            <img src={logo} className={styles.logo} alt="logo" />
          </a>

          <a href="/" className={styles.navigation}>
            <Button className={styles.logoutButton} bsStyle="warning" bsSize="large">Log Out</Button>
          </a>

        </div>

      </div>
    );
  }
}

export default NavBar;