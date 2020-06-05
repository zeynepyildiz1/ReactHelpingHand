import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState/initialState";

export default function postIdReducer(state = initialState.postId, action) {
  switch (action.type) {
    case actionTypes.postId:
      return action.payload;
      default:
      return state;
  }
}
