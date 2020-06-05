import * as actionTypes from "../../actions/actionTypes";

const initialState={
posts:[],
}

export default function GetUserProfilePostReducer(state = initialState.posts, action) {
  switch (action.type) {
    case actionTypes.GetUserProfilePostSuccess:
      return action.payload;
      default:
      return state;
  }
}