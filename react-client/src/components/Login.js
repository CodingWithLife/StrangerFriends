import React from 'react';
import "../css/login.css";
class Login extends React.Component {
  render () {
  return (
    <div className="signin">
      <div className='login-page'>
      <div className='form'>
        <form className="register-form">
        <input type="text" placeholder="User Name"/>
        <input type="password" placeholder="Enter your Password"/>
        <button><a href="/">Login</a></button>
        <p className="message"> Not Registered?<a href="#">Register </a> </p>
        </form>


      </div>
    </div>
    </div>
  )
  }
}

export default Login;
