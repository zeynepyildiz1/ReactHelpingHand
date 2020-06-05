import * as actionTypes from "../../actions/actionTypes";

const initialState={
  comment:[]
}

export default function CommentReducer(state = initialState.comment, action) {
  switch (action.type) {
    case actionTypes.GetCommentSuccess:
        return action.payload;
      default:
      return state;
  }
}
