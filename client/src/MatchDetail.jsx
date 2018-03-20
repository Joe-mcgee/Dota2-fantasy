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
    message: 'BID 0.02 ETH',
  }

    async componentDidMount() {
        const manager = await betting.methods.manager().call();
        const betters = await betting.methods.getBetters().call();
        const balance = await web3.eth.getBalance(betting.options.address)
        this.setState({ manager, betters, balance })
        console.log(betters);
    }

    // for betting
    onSubmit = async (event) => {
      event.preventDefault();
      const teamNumber = event.target.elements[0].value
      const accounts = await web3.eth.getAccounts();
      this.setState({ message: 'waiting on transaction success...'})
      await betting.methods.enter(teamNumber).send({
        from: accounts[0],
        value: web3.utils.toWei('0.02', 'ether')
      });

      this.setState({message: 'You have been entered!'});

    }

    //for determining winner
    onClick = async () => {
      const winner = 0
      const accounts = await web3.eth.getAccounts();

      this.setState({ message: 'Waiting on transaction Successs'})
      await betting.methods.pickWinner(winner).send({
        from: accounts[0],

      });

      this.setState({message: 'A winner has been picked!'});
    }


  updateMatchInfo = async () => {
    let winner = null;
    const response = await fetch('api/updateScore')
    console.log(this.props.teamOneScore, this.props.teamTwoScore)
    if (this.props.teamOneScore > this.props.teamTwoScore) {
      winner = '0'
    }
    if (this.props.teamOneScore < this.props.teamTwoScore) {
      winner = '1'
    }
    if (this.props.teamOneScore == this.props.teamTwoScore) {
      winner = '2'
    }
    console.log(winner)
    const accounts = await web3.eth.getAccounts()
    //update message needed
    await betting.methods.pickWinner(winner).send({
      from: accounts[0]
    });
    //new message update
  }

render() {
    return (

<div className="card-body">
  <p>{this.state.betters}</p>
  <p>{this.state.balance}</p>
            <h4 className="text-center card-title" style={styleA}><Timer {...this.props}/></h4>
            <div style={styleF}><button className="btn btn-warning"onClick={this.updateMatchInfo}>update</button></div>
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
                        <form onSubmit={this.onSubmit}>
                          <input className='Choice' name='choice2' type='hidden' defaultValue='0'/>
                            <button type='submit'>
                          <div className="card-footer" data-bs-hover-animate="flash" style={styleC}>
                            <h4 className="text-center" style={styleD}><strong>{this.state.message}</strong></h4>
                          </div>
                           </button>
                        </form>
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
                        <form onSubmit={this.onSubmit}>
                          <input className='Choice' name='choice2' type='hidden' defaultValue='1'/>
                          <button type='submit'>
                          <div className="card-footer" data-bs-hover-animate="flash" style={styleC}>
                            <h4 className="text-center" style={styleD}><strong>{this.state.message}</strong></h4>
                          </div>
                           </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
   }
}

export default MatchDetail;
