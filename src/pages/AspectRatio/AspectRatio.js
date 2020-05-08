import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';

const AspectRatio = () => {
  const pageTitle = 'Welcome';
  const [uiContainerWidth, setUiContainerWidth] = useState(160);
  const [uiContainerHeight, setUiContainerHeight] = useState(90);

  const updateDimensions = () => {
    const maxWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0,
    ); // view w
    const maxHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0,
    ); // view h

    let width;
    let height;

    width = maxWidth - 0.1;
    height = Math.floor((9 * maxWidth) / 16) - 0.1;

    if (height >= maxHeight - 40) {
      width = Math.floor((16 * maxHeight) / 9) - 40;
      height = maxHeight - 40;
    }

    setUiContainerWidth(`${width}px`);
    setUiContainerHeight(`${height}px`);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div className="AspectRatio">
      <Header pageTitle={pageTitle} />
      {/* <button type="button" onClick={() => console.log({})}>
        Log
      </button>
      <button type="button" onClick={() => {}}>
        changeHeight
      </button> */}
      <div
        id="intro-container"
        className="container"
        style={{ width: uiContainerWidth, height: uiContainerHeight }}
      >
        {/* <img
          id="intro-bg"
          className="image"
          src="./images/banner.png"
          alt="banner"
        /> */}
      </div>
    </div>
  );
};
export default AspectRatio;
