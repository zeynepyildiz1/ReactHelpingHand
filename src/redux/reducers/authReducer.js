import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState/authInitialState";

export default function authReducer(state=initialState,action){
   
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
               console.log("login")
           return {state:action.payload,
            user:action.payload,
        LoginSuccess:1
        };

        case actionTypes.RESET_LOGIN:
            return {state:action.payload,
             LoginSuccess:0
         };
         case actionTypes.LOGOUT:
            console.log("logout")
            return {
                LoginSuccess:0,
                state: '',
                user:"",
            };
        default:
            return state;
    }
}
