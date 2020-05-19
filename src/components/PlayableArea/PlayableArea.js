import React, { Component } from 'react';
import PropTypes from 'prop-types';
import helpers from '../../helpers/helplers';

class PlayableArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uiContainerWidth: `${160}px`,
      uiContainerHeight: `${90}px`,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    const { aspectRatio, paddingWidth, paddingHeight } = this.props;

    const size = helpers.maintainAspectRationOffScreenSize(
      aspectRatio,
      paddingWidth,
      paddingHeight,
    );
    this.setState({
      uiContainerWidth: `${size.width}px`,
      uiContainerHeight: `${size.height}px`,
    });
  };

  render() {
    const { children } = this.props;
    const { uiContainerWidth, uiContainerHeight } = this.state;

    return (
      <div
        className="PlayableArea"
        id="PlayableArea"
        style={{ width: uiContainerWidth, height: uiContainerHeight }}
      >
        {children}
      </div>
    );
  }
}

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
