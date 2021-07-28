import * as React from 'react';
import { Link } from 'gatsby';
import * as style from './navbar.module.css';
import headerImg from '../images/logo.svg';

const Navbar = () => {
  return (
    <div class={style.headerContainer}>    
        <div class={style.headerLeft}> 
          <Link to="/"><img src={headerImg} alt="Home" height="50em" width="50em" /></Link>
        </div>
        <div class={style.headerRight}>
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