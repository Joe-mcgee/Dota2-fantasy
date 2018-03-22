import React, {Component} from 'react';
import Timer from './timer.jsx';
import web3 from './web3.js';
import betting from './betting';

class MatchDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
    manager: '',
    betters: [],
    totalBets: '',
    inputValue: [],
    poolArray: [],
    message: 'BID 0.02 ETH',
    time: true,
    teamOneScore: 0,
    teamTwoScore: 0
    }
    var handleTimeExpiry = this.handleTimeExpiry.bind(this);
  }


  handleTimeExpiry() {
    this.setState({time: false})
  }

    async componentDidMount() {
        const manager = await betting.methods.manager().call();
        const betters = await betting.methods.getBetters().call();
        const balance = await web3.eth.getBalance(betting.options.address)
        const poolArray = await betting.methods.getTotalAmountsBet().call()
        this.setState({ manager, betters, balance, poolArray })
        console.log(betters);
    }

    // for betting
    onSubmit = async (event) => {
      event.preventDefault();
      const teamNumber = event.target.elements[0].value
      const accounts = await web3.eth.getAccounts();
      this.setState({ message: 'waiting on transaction success...'})
      const status = await betting.methods.enter(teamNumber).send({
        from: accounts[0],
        value: web3.utils.toWei('0.02', 'ether')
      });

      const poolArray = await betting.methods.getTotalAmountsBet().call()
      if (status.status == '0x1') {
        this.setState({message: 'You have been entered!'});
      } else {
        this.setState({message: 'No betting Twice!'})
      }
      this.setState({poolArray})

    }

    //for determining winner
/*    onClick = async () => {
      const winner = 0
      const accounts = await web3.eth.getAccounts();

      this.setState({ message: 'Waiting on transaction Successs'})
      await betting.methods.pickWinner(winner).send({
        from: accounts[0],

      });

      this.setState({message: 'A winner has been picked!'});
    }*/


  updateMatchInfo = async () => {
    let winner = null;
    const response = await fetch('api/updateScore')
    const updatedMatch = await (await fetch('api/getMatchesFromDb')).json();
    this.setState({teamOneScore: updatedMatch[0].teamOneScore})
    this.setState({teamTwoScore: updatedMatch[0].teamTwoScore})

    if (this.state.teamOneScore > this.state.teamTwoScore) {
      winner = '0'
    }
    if (this.state.teamOneScore < this.state.teamTwoScore) {
      winner = '1'
    }
    if (this.state.teamOneScore == this.state.teamTwoScore) {
      this.setState({message: 'error, no draws allowed'})
      return
    }

    const accounts = await web3.eth.getAccounts()
    //update message needed
    await betting.methods.pickWinner(winner).send({
      from: accounts[0]
    });
    //new message update
  }

render() {
  const isTime = this.state.time;
    return (


      <div className="card-body" style={style.body}>

        {/* Timer element */}
        <h4 className="text-center card-title" style={style.timer}>
          <Timer handleTimeExpiry={this.handleTimeExpiry.bind(this)} {...this.props}/>
        </h4>

        {/* Update button */}
        <div className="row text-center" style={style.updateButton}>
          <button className="btn btn-warning"onClick={this.updateMatchInfo}>update</button>
        </div>

        <div className="row">

          {/* Left Team Card */}
          <div className="col">
            <div className="card" style={style.teamLiquidBackground}>

              {/* Left Team Title */}
              <h4 className="text-center">{this.props.teamOneName}</h4>
              <div className="card-body">
                <div className="container">

                  {/* Left Team Logo */}
                  <div className="row">
                    <div className="col text-center">
                      <img src={this.props.teamOneLogo} />
                    </div>
                  </div>

                  {/* Left Team Sores and Bets */}
                  <div className="row">
                    <div className="col">
                      <h4 className="text-center">Score: {this.state.teamOneScore}</h4>
                      <h4 className="text-center">Bets: {(this.state.poolArray[0] / 1000000000000000000) / 0.02 }</h4>

                    </div>
                  </div>

                </div>

              </div>

              {isTime ? (

              /* Left Team Button When Bids Are Open */
              <form onSubmit={this.onSubmit}>
                <input className='Choice' name='choice2' type='hidden' defaultValue='0'/>
                <button type='submit' style={{width: '100%', padding: '0', border: '0'}}>
                  <div className="card-footer" data-bs-hover-animate="flash" style={style.teamLiquidFooter}>
                  <h4 className="text-center" style={style.footerText}><strong>{this.state.message}</strong></h4>
                  </div>
                </button>
              </form>

              ): (
              /* Left Team Button When Bids Are Closed */
              <div className="card-footer" data-bs-hover-animate="flash" style={style.teamLiquidFooter}>
                <h4 className="text-center" style={style.footerText}><strong>Betting Expired</strong></h4>
              </div>
              )}

            </div>
          </div>


          {/* Right Team Card */}
          <div className="col">
            <div className="card" style={style.otherTeamBackground}>

              {/* Right Team Title */}
              <h4 className="text-center">{this.props.teamTwoName}</h4>
              <div className="card-body">
                <div className="container">

                  {/* Right Team Logo */}
                  <div className="row">
                    <div className="col text-center">
                      <img src={this.props.teamTwoLogo} />
                    </div>
                  </div>

                  {/* Right Team Sores and Bets */}
                  <div className="row">
                    <div className="col">
                      <h4 className="text-center">Score: {this.state.teamTwoScore}</h4>
                      <h4 className="text-center">Bets: {(this.state.poolArray[1] / 1000000000000000000) / 0.02 }</h4>
                    </div>
                  </div>

                </div>
              </div>

              {isTime ? (

              /* Right Team Button When Bids Are Open */
              <form onSubmit={this.onSubmit}>
                <input className='Choice' name='choice2' type='hidden' defaultValue='1'/>
                <button type='submit' style={{width: '100%', padding: '0', border: '0'}}>
                  <div className="card-footer" data-bs-hover-animate="flash" style={style.otherTeamFooter}>
                  <h4 className="text-center" style={style.footerText}><strong>{this.state.message}</strong></h4>
                  </div>
                </button>
              </form>

              ): (
              /* Right Team Button When Bids Are Closed */
              <div className="card-footer" data-bs-hover-animate="flash" style={style.otherTeamFooter}>
                <h4 className="text-center" style={style.footerText}><strong>Betting Expired</strong></h4>
              </div>
              )}

            </div>
          </div>
        </div>
        <div className="card-footer text-center" style={style.body}>

          <div style={style.info}>
            <h6>
              <strong>
                What is this?
              </strong>
            </h6>
            <h6 style={style.description}>
              This is a 100% safe, secure, and trust-less friendly competition.
            </h6>
          </div>

          <div style={style.info}>
            <h6>
              <strong>
              Is it safe? Why should I trust you?
              </strong>
            </h6>
            <h6 style={style.description}>
              Yes, 100%. You dont have to trust us! The smart contract code that processes bets and pays winners is 100% public. Read it yourself. This is the magic of Ethereum.
            </h6>
          </div>

          <div style={style.info}>
            <h6>
              <strong>
              How much ETH can I win?
              </strong>
            </h6>
            <p style={style.description}>
              Winners will get their money back plus a chunk of the losing team's pot (minus our 10% commission) that's proportional to the amount each person contributed. The site will display your expected payout.
            </p>
          </div>

          <div style={style.info}>
            <h6>
              <strong>
              When will winners be paid out?
              </strong>
            </h6>
            <h6 style={style.description}>
              Winners will be paid out as soon as the winner is available on Wolfram Alpha. Likely as soon as the game is over.
            </h6>
          </div>

          <div style={style.info}>
            <h6>
              <strong>
              Can our money get stuck in here?
              </strong>
            </h6>
            <h6 style={style.description}>
              No, if the payouts aren't automatically triggered after a week (i.e. Wolfram Alpha goes offline), the contract will return everyone's bets.
            </h6>
          </div>

          <div style={style.info}>
            <h6>
              <strong>
              How is the game result communicated?
              </strong>
            </h6>
            <h6 style={style.description}>
              We don't decide the winner, Wolfram Alpha does. We are using Oraclize.it to communicate the game results with the smart contract, with a Wolfram Alpha query for "Super Bowl LII Winner". See the smart contract.
            </h6>
          </div>

          <div style={style.info}>
            <h6>
              <strong>
              How are you guys making money?
              </strong>
            </h6>
            <h6 style={style.description}>
              It costs nothing to place a bet. We will be taking a 10% commission from the prize pool.
            </h6>
          </div>

          <div style={style.info}>
            <h6>
              <strong>
              How do I contact you guys?
              </strong>
            </h6>
            <h6 style={style.description}>
              You can message us through this link.
            </h6>
          </div>

        </div>
      </div>
    );
   }
}

const style = {
  info: {
    margin: '4em 0em 4em 0em',
    width: '42em',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  body: {
    margin: '1em 0em 0em 0em',
    justifyContent: 'center'
  },
  timer: {
    fontSize:'2em',
  },

  teamLiquidBackground: {
    padding: '2em 0em 0em 0em',
    float: 'right',
    width: '22em',
    backgroundColor: 'rgb(221, 234, 255)'
  },

  otherTeamBackground: {
    padding: '2em 0em 0em 0em',
    float: 'left',
    width: '22em',
    backgroundColor: 'rgb(255, 234, 234)'
  },

  teamLiquidFooter: {
    height:'75px',
    backgroundColor:'rgb(40, 104, 255)'
  },

  otherTeamFooter: {
    height:'75px',
    backgroundColor:'rgb(255, 40, 40)'
  },

  footerText: {
    color:'rgb(255,255,255)'
  },

  updateButton: {
    textAlign:'center',
    justifyContent: 'center',
    margin: '0em 0em 1em 0em'
  },
};

export default MatchDetail;
