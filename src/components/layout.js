import * as React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Footer from './footer';

const Layout = ({ pageTitle, metaKWs = "ashley yetman", children }) => {
  return (
    <main>
      <Helmet>
        <meta name="keywords" content={metaKWs.join(', ')} />
      </Helmet>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <h1>{pageTitle}</h1>
      {children}
      <Footer></Footer>
    </main>
  );
};

export default Layout;