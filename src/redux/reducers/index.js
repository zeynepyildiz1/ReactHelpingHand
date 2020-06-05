import { combineReducers } from 'redux'
import getPostReducer from './postReducer/getPostReducer'
import changePostReducer from './postReducer/changePostReducer'
import addPostReducer from "./postReducer/addPostReducer"
import addPostImageReducer from "./postReducer/addPostImageReducer"
import UserReducer from "./userReducer/UserReducer"
import imageReducer from   "./postReducer/imageReducer"
import authReducer from   "./authReducer"
import GetUserPostReducer from   "./userReducer/GetUserPostReducer"
import ChangeUserPostReducer from   "./userReducer/ChangeUserPostReducer"
import ShowLikeReducer from "./postReducer/ShowLikeReducer"
import NotificationReducer from "./NotificationReducer/NotificationReducer"
import GetUserReducer from   "./userReducer/GetUserReducer"
import RefreshReducer from "./postReducer/RefreshReducer"
import RefreshDeleteReducer from "./postReducer/RefreshDeleteReducer"
import RefreshPostReducer from "./postReducer/RefreshPostReducer"
import GetUserProfileReducer from "./userProfileReducer/GetUserProfileReducer"
import GetUserProfilePostReducer from "./userProfileReducer/GetUserProfilePostReducer"
import ChangeUserProfilePostReducer from   "./userProfileReducer/ChangeUserProfilePostReducer"
import GetUserIdReducer from   "./NotificationReducer/GetUserIdReducer"
import CommentReducer from   "./NotificationReducer/CommentReducer"
import ShowComment from   "./NotificationReducer/ShowComment"
import AddCommentReducer from   "./NotificationReducer/AddCommentReducer"
export default combineReducers({
    getPostReducer,
    changePostReducer,
    addPostReducer,
    addPostImageReducer,
    imageReducer,
    UserReducer,
    authReducer,
    GetUserPostReducer,
    ChangeUserPostReducer,
    ShowLikeReducer,
    NotificationReducer,
    GetUserReducer,
    GetUserProfileReducer,
    GetUserProfilePostReducer,
    ChangeUserProfilePostReducer,
    GetUserIdReducer,CommentReducer,ShowComment,AddCommentReducer,RefreshReducer,RefreshDeleteReducer,RefreshPostReducer
    
})
