import React from 'react';
import Header from '../../components/Header/Header';

const Styles = () => {
  const pageTitle = 'Styles';
  return (
    <div className="Styles">
      <Header pageTitle={pageTitle} />
      <div className="buttons">
        <button type="button" className="btn-action">
          Action
        </button>
        <button type="button" className="btn-primary">
          Primary
        </button>
        <button type="button" className="btn-secondary">
          Secondary
        </button>
      </div>
      <div className="fonts">
        <h1>hello Alexander</h1>
        <h2>hello Alexander</h2>
        <h3>hello Alexander</h3>
        <h4>hello Alexander</h4>
      </div>
    </div>
  );
};
export default Styles;
