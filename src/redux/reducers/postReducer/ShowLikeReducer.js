import * as actionTypes from "../../actions/actionTypes"
import initialState from "../initialState/initialState";

export default function ShowLikeReducer(state=initialState,action){

    switch (action.type) {
        case actionTypes.show_like_success:
            return {
                LikeStatus:action.payload.data};
            case actionTypes.save_like_success:
                return action.payload;
                case actionTypes.update_like_success:
                return action.payload;
        default:
            return state;
    }
}
