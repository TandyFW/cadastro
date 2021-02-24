import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Clientes extends React.Component{
  render(){
    const { loggedIn } = this.props;
    return(
      <div>
        { !loggedIn && <Redirect to='/login' /> }
        <h1>Clientes</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.loginReducer.loggedIn,
});

export default connect(mapStateToProps)(Clientes);
