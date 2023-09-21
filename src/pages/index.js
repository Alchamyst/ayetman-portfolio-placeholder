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
  'text-align': 'center',
  'font-family': 'Lexend',
}

const imgButtonStyles = {
  'padding-left': "1em",
  'padding-right': "1em",
  'min-width': "40px",
  'min-height': "40px",
  'max-width': "64px",
  'max-height': "64px",
};

const IndexPage = () => {
  return (
    <div>
      <Layout pageTitle="Ashley Yetman's Portfolio" metaKeywords={metaKeywords} bNavbar={false}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet" />

        <img src={profileImg} height="15%" width="15%" alt="Ashley Yetman" style={proPicStyle}/>
        <h1 style={minorHeaderStyle}>
          Hey, I'm Ashley. 
        </h1>
        <p style={pStyles}>
          As a seasoned IT professional with recent expertise in PPC and SEO marketing, I've taken on various responsibilities.
          This includes proficiently managing pay-per-click accounts, providing technical support for Google Workspace users and IT equipment within the organization, 
          and consulting with clients to implement diverse tracking code solutions.
          <br />
          <br />
          My programming skills have been a continuous focus, particularly in JavaScript, while delving into Node.js and React to stay aligned with the latest industry developments. 
          My commitment to professional growth remains strong, with plans to master React with TypeScript on the horizon, further enhancing my skillset.
        </p>
        <br />
        <p style={{'color': '#505050'}}>My portfolio is currently under development, in the mean time please visit the links below:</p>
        <p>
          <a href="https://github.com/Alchamyst"><img src={gitHubImg} height="6%" width="6%" alt="GitHub Logo" style={imgButtonStyles} /></a>
          <a href="https://www.linkedin.com/in/ashley-yetman/"><img src={linkedInImg} height="6%" width="6%" alt="LinkedIn Logo" style={imgButtonStyles} /></a>
        </p>
      </Layout>
    </div>
  )
};

export default IndexPage;