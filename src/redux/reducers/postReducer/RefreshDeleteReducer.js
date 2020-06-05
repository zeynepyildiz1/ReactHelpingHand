import * as actionTypes from "../../actions/actionTypes";
const initialState={
    refresh:0
}

export default function postIdReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.refresh_delete:
      return action.payload;
      default:
      return state;
  }
}
