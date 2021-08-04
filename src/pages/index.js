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
const titleStyle = {
  'color':"#404040",
  'font-size': "2em",
}

const proPicStyle = {
  'border-radius': "50%",
  'margin-bottom': "1em",
  'min-width': "100px"
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
      <Layout pageTitle="Ashley Yetman's Portfolio" metaKeywords={metaKeywords} bNavbar={false}>
        <h1 style={titleStyle}>Ashley Yetman</h1>
        <br />
        <img src={profileImg} height="15%" width="15%" alt="Ashley Yetman" style={proPicStyle}/>
        <p style={pStyles}>
          Hey there, my name is Ashley. 
          <br /> 
          I'm an IT Manager with a passion for coding and UX design.
          <br /><br />
          I am currently looking for new opportunties to branch out into a more technical role with coding.
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