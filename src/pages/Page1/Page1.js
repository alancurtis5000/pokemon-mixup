import React from 'react';
import Header from '../../components/Header/Header';

const Page1 = () => {
  const pageTitle = 'Page 1';
  return (
    <div className="Page1">
      Page1
      <Header pageTitle={pageTitle} />
    </div>
  );
};
export default Page1;
