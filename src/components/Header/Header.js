import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';
import LogoPokemonMixupRow from '../../icons/LogoPokemonMixupRow';
import LogoPokemonMixupInitials from '../../icons/LogoPokemonMixupInitials';

const Header = (props) => {
  const { screenSize, history } = props;
  const goHome = () => {
    console.log('clicked');
    history.push('/');
  };

  return (
    <div className="Header">
      <div className="grid">
        <button type="button" className="btn" onClick={goHome}>
          {screenSize.size === 'mobile' ? (
            <LogoPokemonMixupInitials height="34px" />
          ) : null}
          {screenSize.size === 'tablet' || screenSize.size === 'desktop' ? (
            <LogoPokemonMixupRow height="34px" />
          ) : null}
        </button>
        <div className="page-title">
          <PageTitle />
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
