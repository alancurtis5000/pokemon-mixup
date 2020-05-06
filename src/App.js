import React from 'react';
import { connect } from 'react-redux';
import './styles/main.scss';
import AppRouter from './routes/AppRouter';
import { updateScreenSize as actionUpdateScreenSize } from './actions/screenSize';

export class App extends React.Component {
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    const width = window.innerWidth;
    const { updateScreenSize } = this.props;
    updateScreenSize(width);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppRouter />
        </header>
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
