import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import MatchList from './MatchList.jsx';
import Footer from './Footer.jsx';
import Picture from './Picture.jsx';
import betting from './betting';

class App extends Component {
  constructor() {
    super();
    this.state = {
      games: null,
    }
  }

  componentDidMount(done) {
    this.callTodaysMatches();
  }

  callTodaysMatches() {
    fetch('/api/getMatchesFromDb')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({games: json})
    })
  }

  render() {
    if (this.state.games && this.state) {

    return (
      <div>
        <NavBar />

        <MatchList todaysMatches={this.state.games} />
        <Picture/>
        <Footer />
      </div>
    );

    }

  return (<div>Loading...</div>)
  }
}

// api https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id=3719509349&key=FF967EC4968D206F9FA1485AC5F6E162
// then find account id then    STEAMID32 + 76561197960265728 = STEAMID64  http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=XXXXXXXXXXXXXXXXXXXXXXX&steamids=STEAMID64
export default App;