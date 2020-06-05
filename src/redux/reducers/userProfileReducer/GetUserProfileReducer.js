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

export default function GetUserProfileReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GetUserProfile:
        console.log("reducer",action.payload);
      return action.payload.data;
      default:
      return state;
  }
}
