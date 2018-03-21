import React, {Component} from 'react';
import Authenticator from './Authenticator.jsx';
import Timer from './timer.jsx';

class NavBar extends Component {
  render() {

    return (
      <div>
<<<<<<< HEAD
        <nav className="navbar navbar-light navbar-expand-md navigation-clean-button" style={style.fullNavBar}>
            <div className="container"><img src="/fantasydota-02_1024.png" style={style.logo} />
                <Authenticator />
                    <ul className="nav navbar-nav mr-auto"></ul>
                      <span className="navbar-text actions">
                        <button className="btn btn-primary" type="button" style={style.logout}>Log Out</button>
=======
        <nav className="navbar navbar-light navbar-expand-md navigation-clean-button" style={styleA}>
            <div className="container"><img src="/fantasydota-02_1024.png" style={styleB} />

                    <ul className="nav navbar-nav mr-auto"></ul>
                      <span className="navbar-text actions">

>>>>>>> 7408b0a7c45ecfc07f3e24bfe358beb75fb21c1a
                      </span>
                </div>
        </nav>
      </div>
      );
  }
}

const style = {
  fullNavBar : {
    backgroundColor: 'rgb(14,14,14)'
  },
  logo : {
    width: '203px',
    margin: '-50px -50px -50px -30px'
  },
  logout : {
    backgroundColor: '#fca311',
    borderColor:'#ffba53',
    height:'30px',
    position: 'absolute',
    right: '10px',
    top: '20px',
    textAlign:'center',
    margin: 'auto'
  }
}

export default NavBar;
