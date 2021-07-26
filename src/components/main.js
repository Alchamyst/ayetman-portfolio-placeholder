import * as React from 'react';

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