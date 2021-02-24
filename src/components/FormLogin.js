import React from 'react';
import { Redirect } from 'react-router-dom';

class FormLogin extends React.Component{
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      loggedIn: false,
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({target}){
    const { name, value } = target;
    this.setState({
      [name]: value
    })
  }

  handleLogin(e){
    e.preventDefault();
    const { email, password } = this.state;
    if(email === 'admin@betrybe.com' && password === '123'){
      this.setState({
        loggedIn: true,
      });
    } else{
      alert('email ou senha incorretos');
    }
  }

  render(){
    const { email, password, loggedIn } = this.state;
    return(
      <form>
        {loggedIn && <Redirect to="/clientes" />}
        <label>Email: 
          <input type='email' name='email' value={ email } onChange={ this.handleChange } />
        </label>
        <label>Senha: 
          <input type='password' name='password' value={ password} onChange={ this.handleChange } />
        </label>
        <button type='submit' onClick={this.handleLogin}>Log in</button>
      </form>
    );
  }
}

export default FormLogin;
