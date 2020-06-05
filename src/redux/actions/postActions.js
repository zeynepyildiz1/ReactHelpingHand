import * as actionTypes from "./actionTypes"
import { API_BASE } from "../../config/config"
import axios from "axios"
export function ChangePostCategory(post) {
  return { type: actionTypes.ChangePostCategory, payload: post }
}

export function getPostSuccess(post) {
  return { type: actionTypes.GetPostSuccess, payload: post }
}
export function getPost(category) {
 
  return function (dispatch) {

    let url = API_BASE + '/post/'+category;
   
    axios.get(url)
      .then(response => response.data)
      .then(result => dispatch(getPostSuccess(result)));
  }
}

export function addPostSuccess(post) {

  return { type: actionTypes.add_post, payload: post }
}

export function addPost(data) {

  return function (dispatch) {
    let url = API_BASE + '/post'
    let formData = new FormData();
    if(data.PostText!=="")
    {formData.set("PostText", data.PostText);}
    
    formData.set("PostCategory", data.PostCategory)
   
   
    if(data.image!=="")
    {formData.set("image", data.image)}

    axios.post(url, formData, { headers: {
        "Content-Type": "form-data"
      }})
 .then(result => dispatch(addPostSuccess(result))).catch(error => {
      alert(error)
    });
  }
}

export function addPostImageSuccess(post) {
  return { type: actionTypes.add_post_image, payload: post }
}

export function image(post) {

  return { type: actionTypes.image, payload: post }
}

export function addPostImage(data) {

  return function (dispatch) {
   
    const data2 = new FormData()
    data2.append('image', data.imageFile)
   
    let url = API_BASE + '/post/60';

    axios.post(url, data2, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(result => dispatch(addPostSuccess(result))).catch(error => {
      alert(error)
    });
  }
}
export function PostId(post) {
  return { type: actionTypes.postId, payload: post }
}
export function PostDeleteSuccess(post) {
  return { type: actionTypes.POST_DELETE_SUCCESS, payload: post }
}
export function PostDelete(data) {
console.log(data);
  return function (dispatch) {
  
    let url = API_BASE + '/post/'+data;

    axios.delete(url,).then(result => dispatch(PostDeleteSuccess(result))).catch(error => {
      alert(error)
    });
  }
}

export function Refresh(post) {
  return { type: actionTypes.refresh, payload: post }
}
export function RefreshDelete(post) {
  return { type: actionTypes.refresh_delete, payload: post }
}export function RefreshPost(post) {
  return { type: actionTypes.refresh_post, payload: post }}