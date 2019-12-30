import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import { store } from './Store';
import ProfilePage from './components/user-component/UserProfilePage';
import { Login } from './components/login/Login';

const App: React.FC = () => {
  return (
    <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <nav>
          <Navbar/>
        </nav>
        <Switch>
        <Route path="profile" component={ProfilePage}/>
          
          <Route path='/login' component={Login} />
          <Route path='/'>
         
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  </div>
  );
}

export default App;
