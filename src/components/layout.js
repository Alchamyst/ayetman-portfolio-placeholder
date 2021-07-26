import * as React from 'react';
import Footer from './footer';
import Header from './header';
import Main from './main';
import Navbar from './navbar';

const Layout = ({ pageTitle, metaKWs = ["ashley yetman"], children }) => {
  return (
    <div>
      <Header metaKWs={metaKWs.join(', ')}></Header>
      <Navbar></Navbar>
      <Main pageTitle={pageTitle}></Main>
      <Footer></Footer>  
      {children}
    </div>
  );
};

export default Layout;