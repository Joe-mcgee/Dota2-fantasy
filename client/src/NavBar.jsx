import React, {Component} from 'react';
import Authenticator from './Authenticator.jsx';
import Timer from './timer.jsx';

const styleA = {
  backgroundColor: 'rgb(14,14,14)'
}

const styleB = {
  width: '203px',
  margin: '-50px -50px -50px -30px'
}

const styleC = {
  backgroundColor: '#fca311',
  borderColor:'#ffba53',
  height:'46px',
  position: 'absolute',
  right: '10px',
  top: '5px'
}


class NavBar extends Component {
  render() {

    return (
      <div>
        <nav className="navbar navbar-light navbar-expand-md navigation-clean-button" style={styleA}>
            <div className="container"><img src="/fantasydota-02_1024.png" style={styleB} />
                <Authenticator />
                    <ul className="nav navbar-nav mr-auto"></ul>
                      <span className="navbar-text actions">
                        <button className="btn btn-primary" type="button" style={styleC}>Log Out</button>
                      </span>
                </div>
        </nav>
      </div>
      );
  }
}

export default NavBar;
