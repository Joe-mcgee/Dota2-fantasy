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
      <li>
      <form action="http://localhost:5000/register" method="POST" id='register'>
        <label htmlFor='username'>Name: </label>
        <input type='text' name='username' />
        <label htmlFor='email'>Email: </label>
        <input type='email' name='email'/>
        <label htmlFor='password'>password: </label>
        <input type='password' name='password' />
      </form>
      <button type='submit' form='register' value='Submit'>Submit</button>
      </li>
      <li>
        <form action="http://localhost:5000/login" method="POST" id='login'>
          <label htmlFor='email'>Email: </label>
          <input type='email' name='email' autoComplete='email' />
          <label htmlFor='password'>Password: </label>
          <input type='password' name='password' autoComplete='password' />
        </form>
        <button type='submit' form='login' value='Submit'>Submit</button>
      </li>
      <li>
        <form action='http://localhost:5000/logout' method='POST' id='logoutForm'>
        </form>
        <button type='submit' form='logoutForm'>Logout</button>
      </li>
      </ul>
      );
  }
}

export default Authenticator;
