import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const links = [
      {
        id: 1,
        path: '/React-Todo-App/',
        text: 'Home',
      },
      {
        id: 2,
        path: '/React-Todo-App/about',
        text: 'About',
      },
    ];

    const activeClassName = 'active-link';
    return (
      <nav className="navBar">
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                exact
                to={link.path}
                className={({ isActive }) => (isActive ? activeClassName : undefined)}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;