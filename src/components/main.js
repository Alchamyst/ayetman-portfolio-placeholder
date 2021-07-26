import * as React from 'react';
import { Link } from 'gatsby';

const Main = ({ pageTitle, children }) => {
  return (
    <main>
        <title>{pageTitle}</title>
        <h1>{pageTitle}</h1>
        {children}
    </main>
  );
};

export default Main;