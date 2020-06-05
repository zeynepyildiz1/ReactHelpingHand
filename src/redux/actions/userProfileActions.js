import * as actionTypes from "./actionTypes"
import { API_BASE } from "../../config/config"
import axios from "axios"


export function ChangePostCategory(post) {
  return { type: actionTypes.ChangeUserProfilePostCategory, payload: post }
}
export function getUserSuccess(user) {
  console.log(user);
  return { type: actionTypes.GetUserProfile, payload: user }
}
export function getUser(data) {
 
  return function (dispatch) {
   
    let url = API_BASE + '/userprofile/'+data;
    axios.get(url)
      .then(result => dispatch(getUserSuccess(result)));
  }}

  export function getPostSuccess(post) {
    return { type: actionTypes.GetUserProfilePostSuccess, payload: post }
  }
  export function getPost(data,category) {
    return function (dispatch) {
      let url = API_BASE + "/userprofile/" + data + "/" + category;
      axios.get(url).then(response => response.data)
      .then(result => dispatch(getPostSuccess(result)));
    }
  }
  