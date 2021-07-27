import * as React from 'react';
import Footer from './footer';
import Header from './header';
import Main from './main';
import Navbar from './navbar';
import * as style from './layout.module.css';

const Layout = ({ pageTitle, metaKWs: metaKeywords = ["ashley yetman"], children }) => {
  return (
    <div className={style.container}>
      <Header metaKeywords={metaKeywords.join(', ')}></Header>
      <Navbar></Navbar>
      <Main pageTitle={pageTitle} children={children}></Main>
      <Footer></Footer>  
    </div>
  );
};

export default Layout;