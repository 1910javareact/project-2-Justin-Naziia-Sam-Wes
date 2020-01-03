import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './components/navbar/navbar.css';
import NavBar from './components/navbar/NavBar';
import { Provider } from 'react-redux';
import { store } from './Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserComponent from "./components/user-component/UserProfilePageContainer";
import Login from './components/login/LoginContainer';
import RegisterUserComponent from './components/register-user/RegisterUserContainer';
import BoardComponent from './components/makeBoard/BoardContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <nav>
            <NavBar/>
          </nav>
          <Switch>
            <Route path='/userprofile' component={UserComponent} />
            <Route path='/user/login' component={Login} />
            <Route path='/user/register' component={RegisterUserComponent} />
            <Route path='/board/create' component={BoardComponent} />
            <Route path='/'>
            </Route>
        </Switch>
        </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
