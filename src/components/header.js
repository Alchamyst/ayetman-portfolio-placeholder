import * as React from 'react';
import { Helmet } from 'react-helmet';

const Header = (metaKeywords) => {
  return (
    <div>
        <Helmet>
            <meta name="keywords" content={metaKeywords} />
        </Helmet>
    </div>
  );
};

export default Header;