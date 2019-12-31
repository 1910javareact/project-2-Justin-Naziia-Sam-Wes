import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter, Switch } from 'react-router-dom';
import './components/navbar/navbar.css';
import { Provider } from 'react-redux';
import { store } from './Store';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <nav>
            <NavBar/>
          </nav>
          <Switch>
            {/* 
            <Route path='/login' component={LoginComponent} />
            <Route path='/'>
            <LoginComponent />
            </Route> */}
          
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HOME PAGE
        </p>
        </Switch>
        </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
