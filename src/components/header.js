import * as React from 'react';
import { Helmet } from 'react-helmet';
import faviconImg from "../images/icon.png"

const Header = (metaKeywords) => {
  return (
    <div>
        <Helmet>
            <meta name="keywords" content={metaKeywords} />
            <link rel="shortcut icon" type="image/jpg" href={faviconImg}/>
        </Helmet>
    </div>
  );
};

export default Header;