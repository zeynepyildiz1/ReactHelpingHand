import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState//UserInitialState";

export default function GetUserPostReducer(state = initialState.posts, action) {
  switch (action.type) {
    case actionTypes.GET_USER_POST_SUCCESS:
      return action.payload;
      default:
      return state;
  }
}
