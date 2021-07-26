import * as React from 'react';
import { Helmet } from 'react-helmet';

const Header = (metaKWs, { children }) => {
  return (
    <div>
        <Helmet>
            <meta name="keywords" content={metaKWs} />
        </Helmet>
        {children}
    </div>
  );
};

export default Header;