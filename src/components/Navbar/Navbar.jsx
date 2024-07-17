import React from "react";
import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return<nav className={classes.nav}>
    <div className={classes.item}>
      <NavLink to="/profile">Profile</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
    </div>
    <div className='item'>
      <a>News</a>
    </div>
    <div className='item'>
      <a>Music</a>
    </div>
    <div className='item'>
      <a>Settings</a>
    </div>
  </nav>
}

export default Navbar;