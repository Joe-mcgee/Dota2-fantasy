import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import MatchDetail from './MatchDetail.jsx';

/*const Route = require('react-router-dom').Route;
const Link = require('react-router-dom')*/

class MatchList extends Component {

  constructor(props) {
    super()
    this.state = {games: []}
    this.getMatchList = this.getMatchList.bind(this);
    this.getMatchDetails = this.getMatchDetails.bind(this);
  }

  componentWillMount(done) {
    this.callTodaysMatches()
    .then(res => {
      this.setState({games: res}, done)
    }).catch(err => console.log(err));

  }

/*    componentDidMount() {
    this.callTodaysMatches()
    .then(res => {
      console.log(res)
      this.setState({games: res})
    }).catch(err => console.log(err));

  }
*/


  callTodaysMatches = async () => {
    const response = await fetch('/api/getMatchesFromDb')
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  getMatchList() {
  let MAX_TABS = 2;
  let MAX_LINES_IN_COLUMNS = 18;
    const matchList = this.state.games.map((game) => {
      let url = "/matches/" + game.apiMatchId
      return (
              (game.id < 4) ?
              <li key={game.id} className="nav-item"><a className="nav-link active" href={url}><strong>{
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

    const matchDetailRoutes = this.state.games.map((game) => {
      let url = "/matches/" + game.apiMatchId
      const props = {
        teamOneName: game.teamOneName,
          teamTwoName: game.teamTwoName,
          teamOneLogo: game.teamOneLogo,
          teamTwoLogo: game.teamTwoLogo,
          teamOneScore: game.teamOneScore,
          teamTwoScore: game.teamTwoScore
      }
      const matchDetailPage = () => {
        return (
          <MatchDetail {...props} />
          )
      }

      return ( <Route exact path={url} component={matchDetailPage} />
      )
    })
    return matchDetailRoutes;
  }

  render() {
    return (
    <div className="card">
        <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
                {this.getMatchList()}
            </ul>
        </div>
        {this.getMatchDetails}

        </div>


    );
   }
}

export default MatchList;
