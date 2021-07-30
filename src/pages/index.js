import * as React from 'react';
import Layout from '../components/layout';
import profileImg from '../images/profile.gif';
import gitHubImg from '../images/github-64px.png';

const metaKeywords = [
  "ashley yetman", 
  "alchamyst"
];

const IndexPage = () => {
  return (
    <div>
      <Layout pageTitle="Home Page" metaKWs={metaKeywords}>
        <img src={profileImg} height="15%" width="15%"alt="Ashley Yetman"/>
        <p>Hey, I'm Ashley yetman.</p>
        <br />
        <p><a href="https://github.com/Alchamyst"><img src={gitHubImg} height="7.5%" width="7.5%" alt="Alchamyst GitHub"/></a></p>
      </Layout>
    </div>
  )
};

export default IndexPage;