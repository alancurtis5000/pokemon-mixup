import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import helpers from '../../helpers/helplers';
import Logo from '../../icons/LogoPokemonMixupCol';

const Landing = () => {
  const pageTitle = 'Welcome to';
  const [uiContainerWidth, setUiContainerWidth] = useState(160);
  const [uiContainerHeight, setUiContainerHeight] = useState(90);

  const updateDimensions = () => {
    const aspectRatio = 16 / 9;
    const paddingWidth = 0;
    const paddingHeight = 41;
    const size = helpers.maintainAspectRationOffScreenSize(
      aspectRatio,
      paddingWidth,
      paddingHeight,
    );

    setUiContainerWidth(`${size.width}px`);
    setUiContainerHeight(`${size.height}px`);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div className="Landing">
      <Header pageTitle={pageTitle} />
      <div
        className="container"
        style={{ width: uiContainerWidth, height: uiContainerHeight }}
      >
        <img
          className="image"
          src="./images/banner.png"
          alt="banner"
          style={{ width: uiContainerWidth, height: uiContainerHeight }}
        />
        <Logo className="logo" />
        <div className="buttons">
          <button type="button" className="btn-primary">
            Login
          </button>
          <button type="button" className="btn-primary">
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
    </div>
  );
};
export default Landing;
