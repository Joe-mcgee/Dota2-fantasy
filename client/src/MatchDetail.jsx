import React, {Component} from 'react';
import Timer from './timer.jsx';
import web3 from './web3.js';
import betting from './betting';



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
textAlign:'center',
margin: 'auto'
}
const styleG = {
  float: 'right'
}
const styleH = {
  float: 'left'
}


class MatchDetail extends Component {

  state = {
    manager: '',
    betters: [],
    totalBets: '',
    inputValue: [],
    message: 'BID 0.02 ETH'
  }

    async componentDidMount() {
        const manager = await betting.methods.manager().call();
        const betters = "Taylor"
        //await betting.methods.betters().call();
        const balance = await web3.eth.getBalance(betting.options.address)
        this.setState({ manager, betters, balance })
        console.log(betters);
    }

    onSubmit = async (event) => {



      event.preventDefault();

      const teamNumber = this.refs['team'].value

      const accounts = await web3.eth.getAccounts();

      this.setState({ message: 'waiting on transaction success...'})

      await betting.methods.enter().send(teamNumber, {
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')
      });

      this.setState({message: 'You have been entered!'});

    }

    onClick = async () => {

      const accounts = await web3.eth.getAccounts();
      this.setState({ message: 'Waiting on transaction Successs'})
      await betting.methods.pickWinner().send({
        from: accounts[0],

      });

      this.setState({message: 'A winner has been picked!'});
    }


  updateMatchInfo(){
    fetch('http://localhost:5000/updateScore').then();
  }

render() {
    return (

<div className="card-body">
            <h4 className="text-center card-title" style={styleA}><Timer {...this.props}/></h4>
            <div style={styleF}><button className="btn btn-warning"onClick={this.updateMatchInfo}>upgrade</button></div>
            <div className="row">
                <div className="col">
                    <div className="card" style={styleB}>
                        <h4 className="text-center">{this.props.teamOneName}</h4>
                        <div className="card-body">
                            <div className="container">
                                <div className="row">
                                <div className="col"><img style={styleH} src={this.props.teamOneLogo} /></div>
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
                                </div>
                            </div>
                        </div>
                        <div className="card-footer" style={styleC}>
                            <h4 className="text-center" style={styleD}><strong>{this.state.message}</strong></h4>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={styleE}>
                        <h4 className="text-center">{this.props.teamTwoName}</h4>
                        <div className="card-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col"><img style={styleH}src={this.props.teamTwoLogo}/></div>
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
                        <form onClick={this.onSubmit}>
                          <input ref='team' type='hidden' value='1'/>
                          <div className="card-footer" data-bs-hover-animate="flash" style={styleC}>
                            <h4 className="text-center" style={styleD}><strong>{this.state.message}</strong></h4>
                          </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
   }
}

export default MatchDetail;
