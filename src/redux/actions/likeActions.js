import * as actionTypes from "./actionTypes";
import { API_BASE } from "../../config/config";
import axios from "axios";

export function ShowLikeSuccess(like) {
  console.log(like)
  return { type: actionTypes.show_like_success, payload: like };
}

export function ShowLike(data) {
  return function (dispatch) {
    let url = API_BASE + "/like/showlikes";

    axios.post(
        url,
        { UserId: data.UserId, PostId: data.PostId }
      )
      .then((result) => dispatch(ShowLikeSuccess(result)))
      .catch((error) => {
        alert(error);
      });
  };
}

export function SaveLikeSuccess(like) {
    return { type: actionTypes.save_like_success, payload: like };
  }
  
  export function SaveLike(data) {

    return function (dispatch) {
      let url = API_BASE + "/like";
  
      axios
        .post(
          url,
          {  PostId: data }
        )
        .then((result) =>dispatch(SaveLikeSuccess(result)))
        .catch((error) => {
          alert(error);
        });
    };
  }
  export function UpdateLikeSuccess(like) {
    return { type: actionTypes.update_like_success, payload: like };
  }
  
  export function UpdateLike(data) {

    return function (dispatch) {
      let url = API_BASE + "/like/"+data;
  
      axios
        .post(
          url,
        )
        .then((result) =>dispatch(UpdateLikeSuccess(result)))
        .catch((error) => {
          alert(error);
        });
    };
  }
  export function NotificationSuccess(data) {
    
    return { type: actionTypes.Notification_Success, payload: data }
  }
  export function Notification() {
   
    return function (dispatch) {
  
      let url = API_BASE + '/like/notification'
      
      axios.get(url)
        .then(response => response.data)
        .then(result => dispatch(NotificationSuccess(result)));
    }
  }

  export function GetUserId(data) {
    return { type: actionTypes.GetUserId, payload: data }
  }