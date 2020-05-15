import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Header/Header';
import PlayableArea from '../../components/PlayableArea/PlayableArea';
import Logo from '../../icons/LogoPokemonMixupCol';

const Landing = (props) => {
  const pageTitle = 'Welcome to';

  const handlePlayAsGuest = () => {
    const { history } = props;
    history.push('/Game');
  };

  return (
    <div className="Landing">
      <Header pageTitle={pageTitle} />
      <PlayableArea>
        <div className="container">
          <img className="image" src="./images/banner.png" alt="banner" />
          <Logo className="logo" />
          <div className="buttons">
            <button type="button" className="btn-primary">
              Login
            </button>
            <button
              type="button"
              className="btn-primary"
              onClick={handlePlayAsGuest}
            >
              Play As Guest
            </button>
            <button type="button" className="btn-primary">
              Intro
            </button>
            <button type="button" className="btn-primary">
              High Scores
            </button>
          </div>
        </div>
      </PlayableArea>
    </div>
  );
};
export default withRouter(Landing);
