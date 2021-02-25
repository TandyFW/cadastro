import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

class Clientes extends React.Component{
  render(){
    const { loggedIn, clientes } = this.props;
    console.log(clientes[0]);
    return(
      <div>
        { !loggedIn && (alert('Login não efetuado') || <Redirect to='/login' />) }
        { clientes.length === 0 ? <h2>Nenhum cliente cadastrado</h2> : clientes.map((cliente) => 
          <div key={cliente.email}>
            <p>{cliente.name}</p>
            <p>{cliente.age}</p>
            <p>{cliente.email}</p>
          </div>
        )}
        <Link to='/cadastro'>Cadastro</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.loginReducer.loggedIn,
  clientes: state.cadastroReducer.clientes,
});

export default connect(mapStateToProps)(Clientes);
