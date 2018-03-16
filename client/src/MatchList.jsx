import React, {Component} from 'react';
import MatchDetail from './MatchDetail.jsx';


class MatchList extends Component {
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
        <MatchDetail />
        </div>


    );
   }
}

export default MatchList;
