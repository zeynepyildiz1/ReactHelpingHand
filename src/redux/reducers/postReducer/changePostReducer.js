import * as actionTypes from "../../actions/actionTypes"
import initialState from "../initialState/initialState";

export default function changePostReducer(state=initialState.currentPost,action){
    switch (action.type) {
        case actionTypes.ChangePostCategory:
            return action.payload;
        default:
            return state;
    }
}
