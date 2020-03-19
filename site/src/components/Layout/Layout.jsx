import React from 'react';
import Header from '../Header';

const Layout = ({ styles, children }) => (
  <div className={styles.container}>
    <Header />
    {children}
  </div>
);

Layout.propTypes = {};

export default Layout;
