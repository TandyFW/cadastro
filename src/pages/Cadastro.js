import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import FormRegister from '../components/FormRegister';

class Cadastro extends React.Component{
  render(){
    const { loggedIn } = this.props;
    return(
      <div>
        { !loggedIn && (alert('Login não efetuado') || <Redirect to='/login' />) }
        <FormRegister />
        <button type='button'><Link to='/clientes'>Clientes</Link></button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.loginReducer.loggedIn,
});

export default connect(mapStateToProps)(Cadastro);
