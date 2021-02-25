import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { registerClients } from '../actions/registerClients';

class FormRegister extends React.Component{
  constructor(){
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
    }
    this.handleRegister = this.handleRegister.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({target}){
    const { name, value } = target;
    this.setState({
      [name]: value
    })
  }

  handleRegister(e){
    e.preventDefault();
    const { name, age, email } = this.state;
    const { handleRegisterAction } = this.props;
    handleRegisterAction(name, age, email);
  }

  render(){
    const { name, age, email } = this.state;
    const { loggedIn } = this.props;
    return(
      <form>
        {!loggedIn && <Redirect to="/login" />}
        <label>Nome: 
          <input type='text' name='name' value={ name } onChange={ this.handleChange } />
        </label>
        <label>Idade: 
          <input type='text' name='age' value={ age } onChange={ this.handleChange } />
        </label>
        <label>Email: 
          <input type='email' name='email' value={ email } onChange={ this.handleChange } />
        </label>
        <button type='submit' onClick={this.handleRegister}>Cadastrar</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.loginReducer.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  handleRegisterAction: (name, age, email) => dispatch(registerClients(name, age, email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRegister);
