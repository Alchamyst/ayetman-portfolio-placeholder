import * as React from 'react';
import * as style from './footer.module.css';
import gitHubImg from '../images/github-24px.png';
import linkedInImg from '../images/linkedin-24.png';

const Footer = () => {
  return (
    <div className={style.footer}>
          <div className={style.footerSocial}>
            <a href="https://github.com/Alchamyst"><img src={gitHubImg} alt="Alchamyst GitHub Page" /></a>
            <a href="https://www.linkedin.com/in/ashley-yetman/"><img src={linkedInImg} alt="Ashley Yetman LinkedIn Page" /></a>
          </div>
          <br />
          <div>
            &copy; 2021 Ashley Yetman. All Rights Reserved.
        </div>
    </div>
  );
};

export default Footer;