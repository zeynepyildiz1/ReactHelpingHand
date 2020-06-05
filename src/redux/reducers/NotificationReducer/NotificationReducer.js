import * as actionTypes from "../../actions/actionTypes";
import initialState from "../initialState/initialState";

export default function NotificationReducer(state = initialState.notification, action) {
  switch (action.type) {
   
    case actionTypes.Notification_Success:
      return action.payload;
      default:
      return state;
  }
}
