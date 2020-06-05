import * as actionTypes from "../../actions/actionTypes"
import initialState from "../initialState/initialState";

export default function addPostImageReducer(state=(initialState.imageFile),action){
    switch (action.type) {
        case actionTypes.add_post_image:
            return action.payload;
        default:
            return state;
    }
}
