import * as actionTypes from "../../actions/actionTypes";
const initialState={
    "id": 0,
    "firstName": "First Name",
    "lastName": "Last Name",
    "userImage": "",
    "dateOfBirth": "",
    "image": null,
    "address": null,
    "postCount": 0
}

export default function GetUserReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_USER:
      
      return action.payload;
      default:
      return state;
  }
}
