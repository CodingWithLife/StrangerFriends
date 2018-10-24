import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component {
    render () {
    return (
      <div>
      <nav className="navbar is-black">
      <div className="container">
      <div className="navbar-brand">
      <Link to="/Login" className="navbar-item">Stranger Friends</Link>
      <span class="navbar-burger burger" data-target="navMenu">
      <span></span>
      <span></span>
      <span></span>
      </span>
      </div>
      <div id="navbar-end" className="navbar-menu">
      <div className="navbar-item">
      <Link to="/" className="navbar-item">Home</Link>
      <Link to="/Chat" className="navbar-item">Chat</Link>
      <Link to="/Survey" className="navbar-item">Survey</Link>
      <Link to="/Profiles" className="navbar-item">Profiles</Link>
      </div>
      </div>
      </div>
      </nav>
      </div>)
  }
}

export default Nav;
