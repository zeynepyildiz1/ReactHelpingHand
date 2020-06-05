import * as actionTypes from "../../actions/actionTypes";
const initialState={
  posts:[]
}

export default function GetPostReducer(state = initialState.posts, action) {
  switch (action.type) {
    case actionTypes.GetPostSuccess:
      return action.payload;
      default:
      return state;
  }
}
