import * as React from 'react';
import { Helmet } from 'react-helmet';

const Header = (metaKeywords, { children }) => {
  return (
    <div>
        <Helmet>
            <meta name="keywords" content={metaKeywords} />
        </Helmet>
        {children}
    </div>
  );
};

export default Header;