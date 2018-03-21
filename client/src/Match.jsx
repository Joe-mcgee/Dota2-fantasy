import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

class Match extends Component {
  constructor(props) {
    super(props)
    this.state = {
      game: this.props.id
    }
  }

  render() {
    return(
      <div></div>
    )
  }
}

export default Match
