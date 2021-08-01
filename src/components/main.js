import * as React from 'react';
import * as style from './main.module.css';

const Main = ({ children }) => {
  return (
    <main className={style.main}>
        {children}
    </main>
  );
};

export default Main;