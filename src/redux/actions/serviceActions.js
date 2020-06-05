import * as actionTypes from "./actionTypes"
import { API_BASE } from "../../config/config"
import axios from "axios"
import setAuthorizationToken from "./setAuthorizationToken"
import jwtDecode from 'jwt-decode';

export function LoginSuccess(data) {
  return { type: actionTypes.LOGIN_SUCCESS, payload: data }
}

export function Login(data) {
  return function (dispatch) {

    let url = API_BASE + '/login/accesstoken'
    axios.post(url, data)
      .then(response => response.data)
      .then(result => {
        const token=result.token;
        localStorage.setItem('token',token);
        setAuthorizationToken(token);
       console.log(jwtDecode(token));
        dispatch(LoginSuccess(jwtDecode(token)))}).catch((error) => {
        alert(error);
});
  }
}
export function resetLogin(data) {
  return { type: actionTypes.RESET_LOGIN, payload: data }
}
export function logoutfunction() {
  return function(dispatch){
  localStorage.removeItem("token");
  setAuthorizationToken(false);
  dispatch(Logout()).catch((error) => {
    alert(error);
});}
}
export function Logout () {
 localStorage.removeItem("token");
  setAuthorizationToken(false);
  return {
    type: actionTypes.LOGOUT
  };
}