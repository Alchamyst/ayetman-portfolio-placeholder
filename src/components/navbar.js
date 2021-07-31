import * as React from 'react';
import { Link } from 'gatsby';
import * as style from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={style.headerContainer}>    
        <div className={style.headerItem}>
         <nav className={style.navbar}>
              <ul className={style.navbar_items}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/about">About</Link></li>
              </ul>
          </nav>
        </div>
    </div>
  );
};

export default Navbar;