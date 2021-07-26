import * as React from 'react';
import Layout from '../components/layout';

const metaKWs = [
  "ashley yetman", 
  "alchamyst"
];

const IndexPage = () => {
  return (
    <div>
      <Layout pageTitle="Home Page" metaKWs={metaKWs}>
        <p>Welcome to my Gatsby site!</p>
      </Layout>
    </div>
  )
};

export default IndexPage;