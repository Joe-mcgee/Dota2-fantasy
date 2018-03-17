import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import MatchDetail from './MatchDetail.jsx';
import App from './App.jsx';
import ToggleDisplay from 'react-toggle-display';

/*const Route = require('react-router-dom').Route;
const Link = require('react-router-dom')*/

class MatchList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: null
    }
    this.getMatchList = this.getMatchList.bind(this);
    this.getMatchDetails = this.getMatchDetails.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(evt, id) {
    evt.preventDefault()
    this.setState({
      show: id
    })
  }


  getMatchList() {
  let MAX_TABS = 2;
  let MAX_LINES_IN_COLUMNS = 18;
    const matchList = this.props.todaysMatches.map((game) => {
      let url = "/matches/" + game.apiMatchId
      return (
              (game.id < 4) ?
              <li key={game.id} className="nav-item"><a onClick={(evt) => this.handleClick(evt, game.apiMatchId)}className='nav-link active' href={url}><strong>{
game.teamOneName} vs. {game.teamTwoName}</strong></a></li>
                : null


                  // for(let i = 0; i < MAX_TABS; i++){
                  // }


                  // for(let i = 0; i < MAX_LINES_IN_COLUMNS; i++){

                  // }

       );

    });
    return matchList
  }


  getMatchDetails() {
    console.log(this.props)
    console.log(this.state)
    const matchDetails = this.props.todaysMatches.map((game) => {
      const props = {
        apiMatchId: game.apiMatchId,
        teamOneName: game.teamOneName,
          teamTwoName: game.teamTwoName,
          teamOneLogo: game.teamOneLogo,
          teamTwoLogo: game.teamTwoLogo,
          teamOneScore: game.teamOneScore,
          teamTwoScore: game.teamTwoScore,
   }
      if (this.state.show === game.apiMatchId) {
      return (
              <MatchDetail {...props} />
      )
    }
    })
    console.log(matchDetails)
    return matchDetails;
  }

  addSwitch = () => {
    return ( <Switch>
            <Route exact path='/matches' component={App} />
            {this.getMatchDetails()}
            </Switch>
      )
  }

  render() {
    return (
    <div className="card">
        <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
                {this.getMatchList()}
            </ul>
        </div>

        {this.getMatchDetails()}

        </div>



    );
   }
}

export default MatchList;


/*    componentDidMount() {
    this.callTodaysMatches()
    .then(res => {
      console.log(res)
      this.setState({games: res})
    }).catch(err => console.log(err));

  }
*/
