import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './components/navbar/navbar.css';
import { Provider } from 'react-redux';
import { store } from './Store';
//import ProfilePage from './components/user-component/UserProfilePage';
import Login from './components/login/LoginContainer';
import RegisterUserComponent from './components/register-user/RegisterUserContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <nav>
            <NavBar/>
          </nav>
          <Switch>
            
            <Route path='/user/login' component={Login} />
            <Route path='/user/register' component={RegisterUserComponent} />
            <Route path='/'>
            </Route>
          
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HOME PAGE
        </p>
          <Route path='/user/login' component={Login} />
          <Route path='/'>
         
          </Route>
        </Switch>
        </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
