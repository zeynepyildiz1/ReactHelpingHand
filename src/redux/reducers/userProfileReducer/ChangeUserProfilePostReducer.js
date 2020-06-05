import * as actionTypes from "../../actions/actionTypes";

const initialState={
currentPost:{"category":"true"},
}

export default function changePostReducer(state=initialState.currentPost,action){
    switch (action.type) {
       
        case actionTypes.ChangeUserProfilePostCategory:
            console.log(action.payload)
        return action.payload;
        default:
            return state;
    }
}
