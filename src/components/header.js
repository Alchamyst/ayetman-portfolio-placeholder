import * as React from 'react';
import { Helmet } from 'react-helmet';
import favicon from "../images/favicon.ico"
import faviSvg from "../images/logo.svg"

const Header = (metaKeywords) => {
  return (
    <div>
        <Helmet>
            <meta name="keywords" content={metaKeywords} />
            <link rel="icon" type="image/svg+xml" href={faviSvg} />
            <link rel="alternate icon" href={favicon} />
            <link rel="shortcut icon" type="image/jpg" href={favicon}/>
            <link rel="mask-icon" href={faviSvg} color="#ff8a01" />
        </Helmet>
    </div>
  );
};

export default Header;