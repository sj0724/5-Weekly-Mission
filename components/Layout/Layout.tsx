import React, { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
