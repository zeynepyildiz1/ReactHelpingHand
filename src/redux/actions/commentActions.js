import * as actionTypes from "./actionTypes";
import { API_BASE } from "../../config/config";
import axios from "axios";


export function ShowComment(post) {
    return { type: actionTypes.show_comment, payload: post }
  }

export function getCommentSuccess(post) {
    return { type: actionTypes.GetCommentSuccess, payload: post }
  }
  export function getComment(postId) {
     
    return function (dispatch) {
      let url = API_BASE + '/comment/'+postId;
      axios.get(url)
        .then(response => response.data)
        .then(result => dispatch(getCommentSuccess(result)));
    }
  }
  export function addCommentSuccess(post) {

    return { type: actionTypes.add_comment, payload: post }
  }
  
  export function addComment(data) {
  console.log("data",data);
    return function (dispatch) {
      let url = API_BASE + '/comment'

      axios.post(url, 
        {
            "PostId":data.PostId,
            "CommentText":data.CommentText
        }
        )
   .then(result => dispatch(addCommentSuccess(result))).catch(error => {
        alert(error)
      });
    }
  }
  export function CommentDeleteSuccess(post) {
    return { type: actionTypes.COMMENT_DELETE_SUCCESS, payload: post }
  }
  export function CommentDelete(data) {
  console.log(data);
    return function (dispatch) {
    
      let url = API_BASE + '/comment/remove/'+data;
  
      axios.delete(url,).then(result => dispatch(CommentDeleteSuccess(result))).catch(error => {
        alert(error)
      });
    }
  }
  export function UpdateCommentSuccess(like) {
    return { type: actionTypes.update_comment_success, payload: like };
  }
  
  export function UpdateComment(data) {

    return function (dispatch) {
      let url = API_BASE + "/comment/updatecomment/"+data;
  
      axios
        .post(
          url,
        )
        .then((result) =>dispatch(UpdateCommentSuccess(result)))
        .catch((error) => {
          alert(error);
        });
    };
  }