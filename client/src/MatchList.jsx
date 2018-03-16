import React, {Component} from 'react';
import MatchDetail from './MatchDetail.jsx';

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

class MatchList extends Component {

  constructor(props) {
    super()
    this.state = {games: []}
    this.getMatchList = this.getMatchList.bind(this);
  }

  componentWillMount(done) {
    this.callTodaysMatches()
    .then(res => {
      console.log(res)
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
    const response = await fetch('http://localhost:5000/getMatchesFromDb')
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
              <li className="nav-item"><a className="nav-link active" href={url}><strong>{
game.teamOneName} vs. {game.teamTwoName}</strong></a></li>
                : null


                  // for(let i = 0; i < MAX_TABS; i++){
                  // }


                  // for(let i = 0; i < MAX_LINES_IN_COLUMNS; i++){

                  // }


/*      <MatchDetail key={game.id} time={game.scheduled}
      teamOneName={game.teamOneName}
      teamTwoName={game.teamTwoName}
      teamOneLogo={game.teamOneLogo}
      teamTwoLogo={game.teamTwoLogo}
      teamOneScore={game.teamOneScore}
      teamTwoScore={game.teamTwoScore}/>*/

       );

    });
    console.log('getmatchlist', matchList)
    return matchList
  }

  render() {
console.log('render');
console.log(this.state.games)
    return (
    <div className="card">
        <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
                {this.getMatchList()}
            </ul>
        </div>

        </div>


    );
   }
}

export default MatchList;
