import React from 'react';
import { connect } from 'react-redux';
import './styles/main.scss';
import AppRouter from './routes/AppRouter';
import { updateScreenSize as actionUpdateScreenSize } from './actions/screenSize';

export class App extends React.Component {
  componentDidMount() {
    this.handleWindowSizeChange();
    window.addEventListener('resize', this.handleWindowSizeChange);
    window.addEventListener('mousedown', this.handleMouseDown);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
    window.removeEventListener('resize', this.handleMouseDown);
  }

  handleMouseDown = (e) => {
    e.preventDefault();
    document.activeElement.blur();
  };

  handleWindowSizeChange = () => {
    const width = window.innerWidth;
    let size;
    switch (true) {
      case width > 1024:
        size = 'desktop';
        break;
      case width > 768:
        size = 'tablet';
        break;
      case width > 560:
        size = 'mobile';
        break;
      case width > 0:
        size = 'tooSmall';
        break;
      default:
        break;
    }
    const { updateScreenSize, screenSize } = this.props;
    if (size !== screenSize.size) {
      updateScreenSize(width, size);
    }
  };

  render() {
    const { screenSize } = this.props;

    return (
      <div className="App">
        {screenSize.size === 'tooSmall' ? (
          <div className="tooSmall">
            please rotate or make your screen wider.
          </div>
        ) : null}
        <AppRouter />
      </div>
    );
  }
}

const mapActionsToProps = {
  updateScreenSize: actionUpdateScreenSize,
};

const mapStateToProps = (state) => {
  return {
    screenSize: state.screenSize,
  };
};

export default connect(mapStateToProps, mapActionsToProps)(App);
