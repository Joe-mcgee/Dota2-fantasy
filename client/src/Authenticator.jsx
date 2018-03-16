import React, {Component} from 'react';

const styleA = {

}
const styleB = {

}
const styleC = {
  backgroundColor: '#fca311',
  borderColor:'#ffba53',
  height:'46px',
  position: 'absolute',
  right: '100px',
  top: '5px'
}

class Authenticator extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      <div>
        <li>
          <form action="http://localhost:5000/login" method="POST" id='login'>
          <label htmlFor='email'style={styleA}>Email: </label>
          <input type='email' name='email' autoComplete='email' />
          <label htmlFor='password'style={styleB}>Password: </label>
          <input type='password' name='password' autoComplete='password' />
        </form>
        <button type='submit' form='login' value='Submit'className ='btn btn-primary'style={styleC}>Submit</button>
      </li>
      </div>
      );
  }
}

export default Authenticator;
