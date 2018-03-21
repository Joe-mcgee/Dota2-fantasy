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
  height:'30px',
  position: 'absolute',
  right: '10px',
  top: '20px',
  textAlign:'center',
  margin: 'auto'
}


class NavBar extends Component {
  render() {

    return (
      <div>
        <nav className="navbar navbar-light navbar-expand-md navigation-clean-button" style={styleA}>
            <div className="container"><img src="/fantasydota-02_1024.png" style={styleB} />

                    <ul className="nav navbar-nav mr-auto"></ul>
                      <span className="navbar-text actions">

                      </span>
                </div>
        </nav>
      </div>
      );
  }
}

export default NavBar;
