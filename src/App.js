import React from 'react';
import './styles/main.scss';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppRouter />
      </header>
    </div>
  );
}

export default App;
