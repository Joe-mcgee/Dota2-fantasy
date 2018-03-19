import React, {Component} from 'react';

const styleA = {
  backgroundColor: 'rgb(14,14,14)',
  position:'fixed',
  bottom: '0px',
  width: '100%'

}



class Footer extends Component {
  render() {

    return (


    <div className="footer-dark" style={styleA}>
        <footer>
            <div className="container">
              <p className="copyright">FantasyDOTA2 © 2017</p>
            </div>
        </footer>
    </div>

      );
  }
}

export default Footer;
