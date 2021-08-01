import * as React from 'react';
import Footer from './footer';
import Header from './header';
import Main from './main';
import Navbar from './navbar';
import * as style from './layout.module.css';

const Layout = ({ pageTitle, metaDescription, metaKeywords, bNavbar = true, bNoIndex, children }) => {
  return (
    <div className={style.container}>
      <Header pageTitle={pageTitle} metaKeywords={metaKeywords} metaDescription={metaDescription} bNoIndex={bNoIndex}></Header>
      {bNavbar && <Navbar></Navbar>}
      <Main pageTitle={pageTitle} children={children}></Main>
      <Footer></Footer>  
    </div>
  );
};

export default Layout;