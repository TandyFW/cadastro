import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Cadastro extends React.Component{
  render(){
    const { loggedIn } = this.props;
    return(
      <div>
        { !loggedIn && (alert('Login não efetuado') || <Redirect to='/login' />) }
        <h1>Cadastro</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.loginReducer.loggedIn,
});

export default connect(mapStateToProps)(Cadastro);
