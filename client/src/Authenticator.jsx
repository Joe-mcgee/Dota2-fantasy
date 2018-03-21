import React, {Component} from 'react';

class Authenticator extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      <div>
        <li>
          <form action="http://localhost:5000/login" method="POST" id='login'>
          <label htmlFor='email'></label>
          <input type='email' name='email' autoComplete='email' style={style.email} placeholder='email:'/>
          <label htmlFor='password'></label>
          <input type='password' name='password' autoComplete='password' style={style.password} placeholder='password:'/>
        </form>
        <button type='submit' form='login' value='Submit'className ='btn btn-primary'style={style.submitButton}>Submit</button>
      </li>
      </div>
      );
  }
}

const style = {
  password: {
    position: 'absolute',
    right: '180px',
    top: '20px'
  },

  email: {
    position: 'absolute',
    right: '380px',
    top: '20px'
  },

  submitButton: {
    backgroundColor: '#fca311',
    borderColor:'#ffba53',
    height:'30px',
    position: 'absolute',
    right: '100px',
    top: '20px',
  }
}
export default Authenticator;
