import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';

const AspectRatio = () => {
  const pageTitle = 'Welcome';
  const [uiContainerWidth, setUiContainerWidth] = useState(160);
  const [uiContainerHeight, setUiContainerHeight] = useState(90);

  const updateDimensions = () => {
    const aspectRatio = 16 / 9;
    const paddingWidth = 0;
    const paddingHeight = 41;
    const maxWidth =
      Math.max(document.documentElement.clientWidth, window.innerWidth || 0) -
      paddingWidth; // view w
    const maxHeight =
      Math.max(document.documentElement.clientHeight, window.innerHeight || 0) -
      paddingHeight; // view h

    let width;
    let height;

    width = maxWidth;
    height = Math.floor(maxWidth / aspectRatio);

    if (height >= maxHeight) {
      // width = Math.floor((16 * maxHeight) / 9);
      width = Math.floor(maxHeight * aspectRatio);
      height = maxHeight;
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
      </div>
    </div>
  );
};
export default AspectRatio;
