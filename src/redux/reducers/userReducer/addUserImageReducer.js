import * as actionTypes from "../../actions/actionTypes"
import initialState from "../initialState/UserInitialState";

export default function addUserImageReducer(state=initialState.imageFile,action){
    switch (action.type) {
        case actionTypes.add_user_image:
            return action.payload;
        default:
            return state;
    }
}
