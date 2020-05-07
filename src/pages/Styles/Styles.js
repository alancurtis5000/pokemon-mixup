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
    </div>
  );
};
export default Styles;
