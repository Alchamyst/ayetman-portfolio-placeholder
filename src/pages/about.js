import * as React from 'react';
import Layout from '../components/layout';

const metaKeywords = [
  "about ashley yetman", 
  "about alchamyst"
];

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me" metaKeywords={metaKeywords}>
      <p>Hi there!</p>
    </Layout>
  )
};

export default AboutPage;