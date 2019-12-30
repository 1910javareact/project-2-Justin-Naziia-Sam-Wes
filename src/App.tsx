import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './Store';
import { Router, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
      <header className="App-header">
        <Switch>
          <Route path='/login' component={Login} />
        </Switch>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App.tsx has been changed
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
