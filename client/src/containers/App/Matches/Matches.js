import React, { Component } from 'react';
import { MenuItem } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import styles from './Matches.scss';

class Matches extends React.Component {
  handleSelect(eventKey) {
    alert(`selected ${eventKey}`);
  }

  render() {
    return (
      <div className={styles.fit}>
        <Nav bsStyle="tabs" activeKey="1" onSelect={k => this.handleSelect(k)}>
          <NavItem eventKey="1" href="/home">
            NavItem 1 content
          </NavItem>
          <NavItem eventKey="2" title="Item">
            NavItem 2 content
          </NavItem>
          <NavItem eventKey="3" disabled>
            NavItem 3 content
          </NavItem>
          <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
            <MenuItem eventKey="4.1">Action</MenuItem>
            <MenuItem eventKey="4.2">Another action</MenuItem>
            <MenuItem eventKey="4.3">Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4.4">Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Panel className={styles.p_height}>
          <Panel.Body></Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default Matches;