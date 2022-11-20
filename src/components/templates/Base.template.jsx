import React from 'react';
import Header from '../main/Header';
import Footer from '../main/Footer';

function BaseTemplate({ children }) {
  return (
    <div className="Wrapper">
      <Header />
      <section className="Content">{children}</section>
      <Footer />
    </div>
  );
}

export default BaseTemplate;
