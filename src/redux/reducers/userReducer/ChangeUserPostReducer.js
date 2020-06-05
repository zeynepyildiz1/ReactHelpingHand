import * as actionTypes from "../../actions/actionTypes"
import initialState from "../initialState/UserInitialState";

export default function changePostReducer(state=initialState.currentPost,action){
    switch (action.type) {
        case actionTypes.ChangeUserPostCategory:
            return action.payload;
           
        default:
            return state;
    }
}
