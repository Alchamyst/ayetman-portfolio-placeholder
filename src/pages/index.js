import * as React from 'react';
import Layout from '../components/layout';
import profileImg from '../images/ashley-150.jpg';
import gitHubImg from '../images/github-64px.png';
import linkedInImg from '../images/linkedin-64.png';

const metaKeywords = [
  "ashley yetman", 
  "alchamyst"
];

// Styles
const proPicStyle = {
  'border-radius': "50%",
  'min-width': "100px"
};

const minorHeaderStyle = {
  'color':"#303030",
  'font-size': "1.5em",
  'font-weight': "bold",
};

const pStyles = {
  'text-align': 'center'
}

const imgButtonStyles = {
  'padding-left': "1em",
  'padding-right': "1em",
  'min-width': "40px"
};

const IndexPage = () => {
  return (
    <div>
<<<<<<< HEAD
      <Layout pageTitle="Ashley Yetman's Portfolio" metaKeywords={metaKeywords} bNavbar={false}>
=======
      <Layout pageTitle="Ashley Yetman's Portfolio" metaKeywords={metaKeywords} bNavbar={true}>
        <h1 style={titleStyle}>Ashley Yetman</h1>
        <br />
>>>>>>> Remove 'about' from navbar and turn on navbar.
        <img src={profileImg} height="15%" width="15%" alt="Ashley Yetman" style={proPicStyle}/>
        <h1 style={minorHeaderStyle}>
          Hey, I'm Ashley. 
        </h1>
        <p style={pStyles}>
          An IT Manager with a passion for programming and UX design.
          <br /><br />
          My technical experience ranges from using <strong>JavaScript</strong> in frontend frameworks, as well as backend <strong>Node</strong> web servers,
          through to maintaining end user hardware and managing <strong>G Suite</strong> for my current employer. 
          <br /><br />
          I am currently looking for new opportunties to branch out into a more technical programming focused role.
        </p>
        <br />
        <p style={{'color': '#505050'}}>My portfolio is currently under development, in the mean time please checkout the links below:</p>
        <p>
          <a href="https://github.com/Alchamyst"><img src={gitHubImg} height="6%" width="6%" alt="Alchamyst GitHub Page" style={imgButtonStyles} /></a>
          <a href="https://www.linkedin.com/in/ashley-yetman/"><img src={linkedInImg} height="6%" width="6%" alt="Ashley Yetman LinkedIn Page" style={imgButtonStyles} /></a>
        </p>
      </Layout>
    </div>
  )
};

export default IndexPage;