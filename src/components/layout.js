import * as React from 'react';
import Footer from './footer';
import Header from './header';
import Main from './main';
import Navbar from './navbar';

const Layout = ({ pageTitle, metaKWs: metaKeywords = ["ashley yetman"], children }) => {
  return (
    <div>
      <Header metaKeywords={metaKeywords.join(', ')}></Header>
      <Navbar></Navbar>
      <Main pageTitle={pageTitle}></Main>
      {children}
      <Footer></Footer>  
    </div>
  );
};

export default Layout;