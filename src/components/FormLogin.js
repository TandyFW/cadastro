import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { verifyLogin } from '../actions/verifyLogin';

class FormLogin extends React.Component{
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
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
    const { handleLoginAction } = this.props;
    if(email === 'admin@betrybe.com' && password === '123'){
      handleLoginAction(true);
    } else{
      alert('email ou senha incorretos');
    }
  }

  render(){
    const { email, password } = this.state;
    const { loggedIn } = this.props;
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

const mapStateToProps = (state) => ({
  loggedIn: state.loginReducer.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  handleLoginAction: (payload) => dispatch(verifyLogin(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
