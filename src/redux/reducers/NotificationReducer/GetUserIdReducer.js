import * as actionTypes from "../../actions/actionTypes";
const initialState={
    userId:0
}

export default function GetUserIdReducer(state = initialState, action) {
  switch (action.type) {
      case actionTypes.GetUserId:
        return action.payload;
      default:
      return state;
  }
}
