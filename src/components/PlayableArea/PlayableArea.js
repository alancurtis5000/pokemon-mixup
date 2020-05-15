import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import helpers from '../../helpers/helplers';

const PlayableArea = (props) => {
  const { aspectRatio, paddingWidth, paddingHeight, children } = props;
  const [uiContainerWidth, setUiContainerWidth] = useState(160);
  const [uiContainerHeight, setUiContainerHeight] = useState(90);

  const updateDimensions = () => {
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
    <div
      className="PlayableArea"
      id="PlayableArea"
      style={{ width: uiContainerWidth, height: uiContainerHeight }}
    >
      {children}
    </div>
  );
};
export default PlayableArea;

PlayableArea.defaultProps = {
  aspectRatio: 16 / 9,
  paddingWidth: 10,
  paddingHeight: 41,
  children: <h1>Child</h1>,
};

PlayableArea.propTypes = {
  aspectRatio: PropTypes.number,
  paddingWidth: PropTypes.number,
  paddingHeight: PropTypes.number,
  children: PropTypes.element,
};
