import * as React from 'react';
import Layout from '../components/layout';
import profileImg from '../images/profile.jpg';

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
        <p></p>
      </Layout>
    </div>
  )
};

export default IndexPage;