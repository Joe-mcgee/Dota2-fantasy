import React, {Component} from 'react';
import Timer from './timer.jsx';


const styleA = {
  bontSize:'86px',
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

const styleF = {
textAlign:'center'
}


class MatchDetail extends Component {
  constructor() {
    super()
  }

  updateMatchInfo(){
    fetch('http://localhost:5000/updateScore').then();
  }

render() {
    return (

<div className="card-body">
            <h4 className="text-center card-title" style={styleA}><Timer {...this.props}/></h4>
            <button onClick={this.updateMatchInfo}  style={styleF}>upgrade</button>
            <div className="row">
                <div className="col">
                    <div className="card" style={styleB}>
                        <h4 className="text-center">{this.props.teamOneName}</h4>
                        <div className="card-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 offset-lg-0">
                                        <div className="row"></div>
                                        <div className="row">
                                            <div className="col">
                                                <h4 className="text-center">{this.props.teamOneScore}</h4>
                                                <h4 className="text-center">show number of people </h4>
                                            </div>
                                        </div>
                                        <div className="row"></div>
                                    </div>
                                    <div className="col"><img src={this.props.teamOneLogo} /></div>
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
                        <h4 className="text-center">{this.props.teamTwoName}</h4>
                        <div className="card-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col"><img src={this.props.teamTwoLogo}/></div>
                                    <div className="col-lg-4">
                                        <div className="row"></div>
                                        <div className="row">
                                            <div className="col">
                                                <h4 className="text-center">{this.props.teamTwoScore}</h4>
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
