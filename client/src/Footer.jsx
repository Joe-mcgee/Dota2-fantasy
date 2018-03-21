import React, {Component} from 'react';

class Footer extends Component {
  render() {

    return (

    <div className="footer-dark" style={style.fullFooter}>
      <footer>
        <div className="container">
          <p className="copyright">FantasyDOTA2 © 2017</p>
        </div>
      </footer>
    </div>
    );
  }
}

const style = {
  fullFooter: {
    backgroundColor: 'rgb(14,14,14)',
    position:'fixed',
    bottom: '0px',
    width: '100%' 
  }
}

export default Footer;
