import React from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/pUsers', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user){
          <Link to="/"></Link>
        }
      })
  }


  render(){
    return (
            <div >
              <h1 >Sign up</h1>
              <p >
                <Link to="/login">Have an account?</Link>
              </p>


              <form onSubmit={this.onSubmit.bind(this)}>
                <fieldset >
                  <input type="text" placeholder="Email" onChange={this.handleChange.bind(this, 'email')} />
                </fieldset>
                <fieldset >
                  <input  type="password" placeholder="Password" onChange={this.handleChange.bind(this, 'password')} />
                </fieldset>
                <button  type="submit">
                  Sign up
                </button>
              </form>
            </div>
    )
  }
}

export default Register;
