import * as React from 'react';
import Footer from './footer';
import Header from './header';
import Main from './main';
import Navbar from './navbar';
import * as style from './layout.module.css';

const Layout = ({ pageTitle, metaKeywords = ["ashley yetman"], bNavbar = true, bNoIndex = false, children }) => {
  return (
    <div className={style.container}>
      <Header metaKeywords={metaKeywords.join(', ')} bNoIndex={bNoIndex}></Header>
      {bNavbar && <Navbar></Navbar>}
      <Main pageTitle={pageTitle} children={children}></Main>
      <Footer></Footer>  
    </div>
  );
};

export default Layout;