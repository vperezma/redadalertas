import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './site-logo.svg';

class Header extends Component {
  render()  {
    return (
      <nav>
        <Link to={'/'} >
          <img src={logo} alt="RedadAlertas" />
        </Link>
      </nav>
    )
  }
};

export default Header;
