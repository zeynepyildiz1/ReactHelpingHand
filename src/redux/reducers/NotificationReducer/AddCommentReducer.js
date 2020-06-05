import * as actionTypes from "../../actions/actionTypes"
const initialState={
    PostId:0,
    CommentText:""
}

export default function addComment(state=initialState,action){
    
    switch (action.type) {
        case actionTypes.add_comment:
            return action.payload;
        default:
            return state;
    }
}
