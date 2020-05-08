import React from 'react';
import Header from '../../components/Header/Header';

const Landing = () => {
  const pageTitle = 'Welcome';
  return (
    <div className="Landing">
      <Header pageTitle={pageTitle} />
      <div className="container">
        <img className="image" src="./images/banner.png" alt="banner" />
      </div>
    </div>
  );
};
export default Landing;
