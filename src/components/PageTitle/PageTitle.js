import React from 'react';
import { withRouter } from 'react-router-dom';

const Header = (props) => {
  const { location } = props;
  let pageTitle = '';

  switch (location.pathname) {
    case '/':
      pageTitle = 'Welcome';
      break;
    case '/Game':
      pageTitle = 'Game';
      break;
    default:
      break;
  }

  return <div className="PageTitle">{pageTitle}</div>;
};
export default withRouter(Header);
