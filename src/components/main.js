import * as React from 'react';
import * as style from './main.module.css';

const Main = ({ pageTitle, children }) => {
  return (
    <main className={style.main}>
        <title>{pageTitle}</title>
        {children}
    </main>
  );
};

export default Main;