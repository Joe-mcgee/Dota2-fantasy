import React, {Component} from 'react';

const styleA = {
  bontSize:'86px'
}

const styleB = {
backgroundColor: 'rgb(245,245,245)'
}

const styleC = {
height:'60px',
backgroundColor:'#fca311'
}
const styleD = {
  color:'rgb(255,255,255)'
}

const styleE = {
backgroundColor:'rgb(245,245,245)'
}


class MatchDetail extends Component {
  constructor() {
    super()
  }

render() {
    return (

<div className="card-body">
            <h4 className="text-center card-title" style={styleA}>we should set up a timer here</h4>
            <div className="row">
                <div className="col">
                    <div className="card" style={styleB}>
                        <h4 className="text-center">we should load team name here</h4>
                        <div className="card-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 offset-lg-0">
                                        <div className="row"></div>
                                        <div className="row">
                                            <div className="col">
                                                <h4 className="text-center">Investors</h4>
                                                <h4 className="text-center">show number of people </h4>
                                            </div>
                                        </div>
                                        <div className="row"></div>
                                    </div>
                                    <div className="col"><img/></div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer" style={styleC}>
                            <h4 className="text-center" style={styleD}><strong>BID</strong></h4>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={styleE}>
                        <h4 className="text-center">we should load team name here</h4>
                        <div className="card-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col"><img/></div>
                                    <div className="col-lg-4">
                                        <div className="row"></div>
                                        <div className="row">
                                            <div className="col">
                                                <h4 className="text-center">Investors</h4>
                                                <h4 className="text-center">show number of people </h4>
                                            </div>
                                        </div>
                                        <div className="row"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer" data-bs-hover-animate="flash" style={styleC}>
                            <h4 className="text-center" style={styleD}><strong>BID</strong></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
   }
}

export default MatchDetail;
