import * as actionTypes from "../../actions/actionTypes"
import initialState from "../initialState/initialState";

export default function addPostReducer(state=initialState,action){
    
    switch (action.type) {
        case actionTypes.add_post:
            return action.payload;
        default:
            return state;
    }
}
