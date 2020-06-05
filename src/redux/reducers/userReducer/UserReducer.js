import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState/UserInitialState";

export default function UserReducer(state = initialState, action) {
    
  switch (action.type) {
    case actionTypes.add_user:
      return action.payload;
    case actionTypes.user_image:
      return action.payload;
    case actionTypes.add_user_image:
      return action.payload;
    default:
      return state;
  }
}
