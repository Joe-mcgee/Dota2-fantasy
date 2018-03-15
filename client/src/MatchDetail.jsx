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

const styleF = {
height:'60px',
backgroundColor:'#fca311'
}

class MatchDetail extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.callTodaysMatches()
    .then(res => {
      this.setState({games: res})
    }).catch(err => console.log(err));

  }

  callTodaysMatches = async () => {
    const response = await fetch('http://localhost:5000/getMatchesFromDb')
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
    <div className="card">
        <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">

                <li className="nav-item"><a className="nav-link active" href="#"><strong>Match 1</strong></a></li>
                <li className="nav-item"><a className="nav-link" href="#">Match 2</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Match 3</a></li>
            </ul>
        </div>
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
    </div>
    );
   }
}

export default MatchDetail;
