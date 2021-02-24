import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Clientes from './pages/Clientes';
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={ Login }></Route>
        <Route path='/clientes' component={ Clientes }></Route>
        <Route path='/cadastro' component={ Cadastro }></Route>
        <Route exact path='/' component={ Home }></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
