import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './styles/main.scss';
import AppRouter from './routes/AppRouter';
import { updateScreenSize } from './actions/screenSize';

const App = (props) => {
  const handleWindowSizeChange = () => {
    console.log(window.innerWidth);
    const width = window.innerWidth;
    props.updateScreenSize(width);
  };

  useEffect(() => {
    // comp mounted
    console.log('App mounted');
    window.addEventListener('resize', handleWindowSizeChange);
  }, []);

  useEffect(() => {
    // comp will unmounted

    return () => {
      console.log('cleaned up');
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={() => console.log(props.screenSize)}>
          log
        </button>
        <AppRouter />
      </header>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    screenSize: state.screenSize,
  };
};

export default connect(mapStateToProps, { updateScreenSize })(App);
