import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';
import LogoPokemonMixupRow from '../../icons/LogoPokemonMixupRow';
import LogoPokemonMixupInitials from '../../icons/LogoPokemonMixupInitials';

const Header = (props) => {
  const { screenSize, history, location } = props;
  const goHome = () => {
    const path = '/';
    if (location.pathname !== path) {
      history.push(path);
    }
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
          <button type="button" onClick={() => console.log(props.state)}>
            Log
          </button>
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
    state,
  };
};
export default withRouter(connect(mapStateToProps)(Header));
