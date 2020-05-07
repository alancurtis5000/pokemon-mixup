import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';
import LogoPokemonMixupRow from '../../icons/LogoPokemonMixupRow';
import LogoPokemonMixupInitials from '../../icons/LogoPokemonMixupInitials';

const Header = (props) => {
  const { pageTitle, screenSize, history } = props;
  const goHome = () => {
    console.log('clicked');
    history.push('/');
  };

  return (
    <div className="Header">
      <div className="grid">
        <button type="button" className="btn" onClick={goHome}>
          {screenSize.size === 'mobile' ? (
            <LogoPokemonMixupInitials height="36px" />
          ) : null}
          {screenSize.size === 'tablet' || screenSize.size === 'desktop' ? (
            <LogoPokemonMixupRow height="36px" />
          ) : null}
        </button>
        <div className="page-title">
          <PageTitle pageTitle={pageTitle} />
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
        <div className="login">P</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    screenSize: state.screenSize,
  };
};
export default withRouter(connect(mapStateToProps)(Header));
