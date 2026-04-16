import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import LogInteraction from './components/LogInteraction';
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen">
        <LogInteraction />
      </div>
    </Provider>
  );
}

export default App;
