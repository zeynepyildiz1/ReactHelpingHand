import * as actionTypes from "../../actions/actionTypes";
const initialState={
  postId:0,
  postText:"",
  postImage:"",
  postUserImage:"",
  postUserFirstName:"",
  postUserLastName:"",
  postUserId:0,
  postLikeCount:0,
  postUserLike:false,
  postDate:""
}
export default function ShowComment(state = initialState, action) {
  switch (action.type) {
    case actionTypes.show_comment:
        return action.payload;
      default:
      return state;
  }
}
