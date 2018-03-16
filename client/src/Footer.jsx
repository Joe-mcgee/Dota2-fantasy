import React, {Component} from 'react';

const styleA = {
  backgroundColor: 'rgb(14,14,14)',
  position:'absolute',
  bottom: '0px',
  width: '100%'

}

const styleB = {
  marginTop:'5px'
}


class Footer extends Component {
  render() {

    return (
      <div>
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="card" style={styleB}></div>
            </div>
        </div>
    </div>
    <div className="footer-dark" style={styleA}>
        <footer>
            <div className="container">
              <p className="copyright">FantasyDOTA2 © 2017</p>
            </div>
        </footer>
    </div>
    </div>
      );
  }
}

export default Footer;
