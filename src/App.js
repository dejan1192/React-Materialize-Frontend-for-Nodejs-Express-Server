import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { useEffect } from 'react';
import LoginPage from './pages/auth/Login';
import RegisterPage from './pages/auth/Register';
import AuthState from './context/auth/AuthState';
import PrivateRoute from './components/PrivateRoutes/PrivateRoute';
import PostState from './context/post/PostState';
import ProfileState from './context/profile/ProfileState';
import SinglePost from './pages/SinglePost';

function App() {

 

  useEffect(()=>{
    
    M.AutoInit();
  },[])

  return (
  <AuthState>
    <PostState>
    <ProfileState>
    <Router>
      <div className="App">
        <Navbar />
       
     
        <div id='main' className="container">
          <Switch>
            <PrivateRoute exact path='/' component={Home}/>
            <PrivateRoute exact path='/profile/:id' component={Profile}/>
            <PrivateRoute exact path='/show/:id' component={SinglePost}/>
            <Route exact path='/login' component={LoginPage}/>
            <Route exact path='/register' component={RegisterPage}/>
          </Switch>
        </div>
     </div>
   </Router>
    </ProfileState>
    </PostState>
  </AuthState>
  );
}

export default App;
