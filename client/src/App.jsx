import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar.jsx'

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }


  componentDidMount() {
    this.callApi()
      .then(res => {
        console.log(res.response.players)
        this.setState({ response: res.response.players[0].personaname })})
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div>
      <NavBar />
      <h1>Hello React :)</h1>
      <p>{this.state.response}</p>
      </div>
    );
  }
}


// api https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?match_id=3719509349&key=FF967EC4968D206F9FA1485AC5F6E162
// then find account id then    STEAMID32 + 76561197960265728 = STEAMID64  http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=XXXXXXXXXXXXXXXXXXXXXXX&steamids=STEAMID64
export default App;
