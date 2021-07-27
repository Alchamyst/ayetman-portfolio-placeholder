import * as React from 'react';
import { Link } from 'gatsby';
import * as style from './footer.module.css';

const Footer = () => {
  return (
    <div class={style.footer}>
        <div>
            <Link to="https://www.linkedin.com/in/ashley-yetman/">LinkedIn</Link>
        </div>
        <div>
            &copy; 2021 Ashley Yetman. All Rights Reserved.
        </div>
    </div>
  );
};

export default Footer;