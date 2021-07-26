import * as React from 'react';
import Layout from '../components/layout';

const metaKeywords = [
  "ashley yetman", 
  "alchamyst"
];

const IndexPage = () => {
  return (
    <div>
      <Layout pageTitle="Home Page" metaKWs={metaKeywords}>
        <p>Welcome to my Gatsby site!</p>
      </Layout>
    </div>
  )
};

export default IndexPage;