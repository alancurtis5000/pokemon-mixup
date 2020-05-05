import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { pageTitle } = props;
  return <div className="PageTitle">{pageTitle}</div>;
};
export default Header;

Header.defaultProps = {
  pageTitle: 'cheese',
};

Header.propTypes = {
  pageTitle: PropTypes.string,
};
