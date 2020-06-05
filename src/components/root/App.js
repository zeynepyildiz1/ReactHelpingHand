import React from 'react';
import RegisterForm from "../Register/RegisterForm";
import UpdateUserRoot from "./UpdateUserRoot";
import Dashboard from  "../root/Dashboard"
import  "../../css/register.css"
import {Route,Switch} from "react-router-dom"
import LoginForm from '../Login/LoginForm';
import Notification from "./NotificationPage"
import Profile from "./Profile"
import PrivateRoute from "./PrivateRoute"
import CommentPage from "./CommentPage"
import UserProfile from './UserProfile';


function App() {
  return (
    <div >

   <Switch>
   
  <Route  path="/loginform" component={LoginForm} />
  
  <Route path="/registerform" component={RegisterForm} />  
  <PrivateRoute path="/CommentPage" component={CommentPage} />
  <PrivateRoute exact path="/" component={Dashboard} />
  <PrivateRoute path="/userprofile" component={UserProfile} />
  <PrivateRoute path="/Dashboard" component={Dashboard} />
  <PrivateRoute path="/Notification" component={Notification} />
  <PrivateRoute path="/Profile" component={Profile} />
  <PrivateRoute path="/UpdateUserRoot" component={UpdateUserRoot} />
</Switch>
    </div>
  );
}

export default App;
//<Route component={NotFound} />