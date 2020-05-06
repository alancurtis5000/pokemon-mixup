import React from 'react';
import { NavLink } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';
import LogoPokemonMixup from '../../icons/LogoPokemonMixup';

const Header = (props) => {
  const { pageTitle } = props;
  return (
    <div className="Header">
      <LogoPokemonMixup height="40px" />
      Header
      <NavLink exact to="/">
        Landing
      </NavLink>
      <NavLink exact to="/Page1">
        Page1
      </NavLink>
      <NavLink exact to="/page2">
        Page2
      </NavLink>
      <PageTitle pageTitle={pageTitle} />
    </div>
  );
};
export default Header;
