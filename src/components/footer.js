import * as React from 'react';
import * as style from './footer.module.css';
import linImg from "../images/linkedin-logo.png"

const Footer = () => {
  return (
    <div class={style.footer}>
        <div>
            <a href="https://www.linkedin.com/in/ashley-yetman/"><img src={linImg} alt="LinkedIn" width="50em" height="50em" /></a>
        </div>
        <div>
            &copy; 2021 Ashley Yetman. All Rights Reserved.
        </div>
    </div>
  );
};

export default Footer;