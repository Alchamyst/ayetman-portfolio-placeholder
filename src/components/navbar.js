import * as React from 'react';
import { Link } from 'gatsby';
import * as style from './navbar.module.css';

const Navbar = () => {
  return (
    <div class={style.headerContainer}>    
        <div class={style.headerItem}>
         <nav class={style.navbar}>
              <ul class={style.navbar_items}>
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