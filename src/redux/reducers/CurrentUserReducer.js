import * as actionTypes from "../actions/actionTypes"
import { isCompositeComponentWithType } from "react-dom/test-utils";
const initialState={
    isAuthenticated:false,
    user:{}
}

export default function authReducer(state=initialState,action){
   
    switch (action.type) {
     
        case actionTypes.SET_CURRENT_USER:
            return {
                isAuthenticated:!isCompositeComponentWithType(action.user),
                user:action.user
         };
        default:
            return state;
    }
}
