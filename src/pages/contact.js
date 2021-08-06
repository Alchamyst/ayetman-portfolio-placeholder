import * as React from 'react';
import Contact from '../components/contact';
import Layout from '../components/layout';

const metaKeywords = [
    "contact ashley yetman", 
    "get in touch with ashley yetman", 
    "email with ashley yetman", 
    "message ashley yetman", 
    "contact alchamyst",
    "get in touch with alchamyst", 
    "email alchamyst", 
    "message alchamyst"
];

const IndexPage = () => {
  return (
    <Layout pageTitle="Contact Ashley" metaKeywords={metaKeywords}>
      <p>Contact Form Coming Soon!</p>
      <Contact></Contact>
    </Layout>
  )
};

export default IndexPage;