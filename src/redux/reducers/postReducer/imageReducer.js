import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState/initialState";

export default function ImageReducer(state = initialState, action) {
  switch (action.type) {
  
    case actionTypes.image:
      return action.payload;
    default:
      return state;
  }
}
