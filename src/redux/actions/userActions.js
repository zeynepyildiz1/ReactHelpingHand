import * as actionTypes from "./actionTypes";
import { API_BASE } from "../../config/config";
import axios from "axios";

export function addUserSuccess(user) {
 
  return { type: actionTypes.add_user, payload: user };
}

export function addUser(data) {
  
  return function (dispatch) {
   
    let url = API_BASE + "/user";

    let formData = new FormData();
    formData.set("FirstName", data.ad);
    formData.set("LastName", data.soyad)
    formData.set("Password", data.password)
    formData.set("DateOfBirth", data.date)
    formData.set("PhoneNumber", data.phone)
    formData.set("Mail", data.email)
    formData.set("Address", data.address)
    if(data.image!=="")
    {formData.set("image", data.image)}

    axios.post(url, formData, { headers: {
        "Content-Type": "form-data"
      }})
      .then((result) => dispatch(addUserSuccess(result)))
      .catch((error) => {
        alert(error);
      });
  };
}
export function image(user) {
  return { type: actionTypes.user_image, payload: user };
}


export function addUserImageSuccess(user) {
  return { type: actionTypes.add_user_image, payload: user };
}
export function addUserImage(data) {

  return function (dispatch) {
    const data2 = new FormData();
    data2.append("image", data.imageFile);

    let url = API_BASE + "/user/uploaduser/1";

    axios
      .post(url, data2, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      .then((result) => dispatch(addUserImageSuccess(result)))
      .catch((error) => {
        alert(error.res);
      });
  };
}
export function ChangeUserPostCategory(post) {
  return { type: actionTypes.ChangeUserPostCategory, payload: post }
}

export function getUserPostSuccess(post) {
  return { type: actionTypes.GET_USER_POST_SUCCESS, payload: post }
}
export function getUserPost(category) {

  return function (dispatch) {

    let url = API_BASE + '/post/getuserpost/'+category

    axios.get(url)
      .then(response => response.data)
      .then(result => dispatch(getUserPostSuccess(result)));
  }
}
export function getUserSuccess(user) {
 
  return { type: actionTypes.GET_USER, payload: user }
}
export function getUser() {
 
  return function (dispatch) {

    let url = API_BASE + '/user';
   
    axios.get(url)
      .then(response => response.data)
      .then(result => dispatch(getUserSuccess(result)));
  }}
  export function updateUserSuccess(user) {
 
    return { type: actionTypes.update_user, payload: user };
  }
  
  export function updateUser(data) {
  
    return function (dispatch) {
      let url = API_BASE + "/user/update";
  
      let formData = new FormData();
      formData.set("FirstName", data.ad);
      formData.set("LastName", data.soyad)
      formData.set("Password", data.password)
      if(data.date!==""){formData.set("DateOfBirth", data.date)}
      formData.set("PhoneNumber", data.phone)
      formData.set("Mail", data.email)
      formData.set("Address", data.address)
      if(data.image!=="")
      {formData.set("image", data.image)}
  
      axios.post(url, formData, { headers: {
          "Content-Type": "form-data"
        }})
        .then((result) => dispatch(updateUserSuccess(result)))
        .catch((error) => {
          alert(error);
        });
    };}  
     
     export function SearchSuccess(post) {
      
      return { type: actionTypes.search, payload: post }
    }
    export function Search() {
      return function (dispatch) {
        let url = API_BASE + '/user/getallasync'
        axios.get(url)
          .then(response => response.data)
          .then(result => dispatch(SearchSuccess(result)));
      }
    }