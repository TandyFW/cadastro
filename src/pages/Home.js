import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component{
  render(){
    return(
      <header>
        <h1>Home</h1>
        <nav>
          <Link to='/login'>Log in</Link>
        </nav>
      </header>
    );
  }
}

export default Home;
