import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="menu">
      <NavLink className="menu__link" exact to="/" activeClassName="menu__link_active">
        Home
      </NavLink>
      <NavLink className="menu__link" exact to="/about" activeClassName="menu__link_active">
        About
      </NavLink>
      <NavLink className="menu__link" exact to="/blog" activeClassName="menu__link_active">
        Blog
      </NavLink>
      <NavLink className="menu__link" exact to="/contact" activeClassName="menu__link_active">
        Contact
      </NavLink>
    </nav>
  );
}

export default NavBar;
