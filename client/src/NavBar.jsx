import React, {Component} from 'react';
import Authenticator from './Authenticator.jsx';

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
  height:'46px'
}

/*
* Child Component
*/

class NavBar extends Component {
  render() {

    return (
      <div>
        <nav className="navbar navbar-light navbar-expand-md navigation-clean-button" style={styleA}>
            <div className="container"><a href="#" className="navbar-brand"><img src="/fantasydota-02_1024.png" style={styleB} /></a><button data-toggle="collapse" data-target="#navcol-1" className="navbar-toggler"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div
                    className="collapse navbar-collapse" id="navcol-1">
                    <ul className="nav navbar-nav mr-auto"></ul><span className="navbar-text actions"><button className="btn btn-primary" type="button" style={styleC}>Log Out</button></span></div>
            </div>
        </nav>
      </div>
      );
  }
}

export default NavBar;
