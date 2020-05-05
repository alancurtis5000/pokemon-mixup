import React from 'react';
import Header from '../../components/Header/Header';

const Landing = () => {
  const pageTitle = 'Welcome';
  return (
    <div className="Landing">
      <Header pageTitle={pageTitle} />
    </div>
  );
};
export default Landing;
