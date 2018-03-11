
import React, {Component} from 'react';

/*
* Child Component
*/

class Authenticator extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      <ul>
      <form action="/register" method="POST" id='register'>
        <label htmlFor='username'>Name: </label>
        <input type='text' id='username' name='username' />
        <label htmlFor='email'>Email: </label>
        <input type='email' id='email' name='email'/>
        <label htmlFor='password'>password: </label>
        <input type='password' id='password' name='password' />
      </form>
      <button type='submit' form='register' value='Submit'>Submit</button>
      </ul>
      );
  }
}

export default Authenticator;
