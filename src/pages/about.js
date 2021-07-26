import * as React from 'react';
import Layout from '../components/layout';

const metaKWs = [
  "about ashley yetman", 
  "about alchamyst"
];

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me" metaKWs={metaKWs}>
      <p>Hi there!</p>
    </Layout>
  )
};

export default AboutPage;