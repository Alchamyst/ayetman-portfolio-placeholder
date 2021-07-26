import * as React from 'react';
import { Link } from 'gatsby';

const Footer = ({ children }) => {
  return (
    <div>
        <div>
            <Link to="https://www.linkedin.com/in/ashley-yetman/">LinkedIn</Link>
        </div>
        <div>
            &copy; 2021 Ashley Yetman. All Rights Reserved.
        </div>
      {children}
    </div>
  );
};

export default Footer;