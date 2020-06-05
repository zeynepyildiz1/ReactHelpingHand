import React, { Component } from "react";
import {

  CardText,
  CardBody,
  CardLink,
  CardTitle,
  Row,
  Col,UncontrolledDropdown,DropdownToggle,DropdownItem,DropdownMenu,Modal, ModalHeader, ModalBody, 
} from "reactstrap";
import "../../css/post.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as PostActions from "../../redux/actions/postActions";
import * as CommentActions from "../../redux/actions/commentActions";
import * as LikeActions from "../../redux/actions/likeActions";
import {IMAGE_BASE} from "../../config/config"
import Profil from "../../image/profil.png"
import {Link} from "react-router-dom"
import Boslike from "../../image/boslike.png"
import Dolulike from "../../image/dolulike.png"
import Comment from "../../image/comment.png"

class PostList extends Component {
  constructor(props){ super(props)
    this.props.actions.getPost((this.props.currentPostCategory.category?"true":"false")); 
    this.state = {modal: false,image:"",category:true,like:"0",delete:"0"};
  }
  componentDidMount() {  
    this.props.actions.getPost((this.props.currentPostCategory.category?"true":"false"));
  }
  componentDidUpdate() {
    if(this.props.refresh===1)  
    {console.log("like");this.props.actions.getPost((this.props.currentPostCategory.category?"true":"false"));this.props.actions.Refresh(0);}
    if(this.props.refreshDelete===1)  
    {console.log("delete");this.props.actions.getPost((this.props.currentPostCategory.category?"true":"false"));this.props.actions.RefreshDelete(0);}
    if(this.props.refreshPost===1)  
    {console.log(this.props.refreshPost);this.props.actions.getPost((this.props.currentPostCategory.category?"true":"false"));this.props.actions.RefreshPost(0);}
  }

   triggerClick = (postId) => {
    
    this.props.actions.SaveLike(postId);//save
    this.props.actions.getPost((this.props.currentPostCategory.category?"true":"false"));
    this.props.actions.Refresh(1);
  };
  postImage = (userImage) => {
    this.setState({image: userImage});
  };
  commentClick = async (post) => {
      this.props.actions.ShowComment({postId:post.id,
      postText:post.postText,
      postUserId:post.userId,
      postUserImage:post.user.userImage,
      postImage:post.postImage,
      postUserFirstName:post.user.firstName,
      postUserLastName:post.user.lastName,
      postLikeCount:post.likeCount ,
      postUserLike:post.userLike ,
      postDate:post.postDate
    });//save

  };
  Delete = async (postId) => {
    
   this.props.actions.DeletePost(postId);//save
   this.props.actions.getPost((this.props.currentPostCategory.category?"true":"false"));
   this.props.actions.RefreshDelete(1);
  };  
  selectUser(user) {
    this.props.actions.GetUserId(user);
  }; 
  render() {

var postimg=IMAGE_BASE+"/img/";
var userimg=IMAGE_BASE+"/userimage/";

const toggle = () => this.setState({modal: !this.state.modal});
    return (
      <React.Fragment>
        {this.props.posts.map((post, index) => {
          return (
          <div style={{color:"black"}} key={index}   className="post">
          <Row>
            <Col xs="1.5"> 
            <div className="dairesel2">  
            <img
                style={{ width: "75px", height: "75px" }}
               src={post.user.userImage===null?Profil:userimg+post.user.userImage}
                alt="" 
              /></div></Col>
            <Col xs="9">
              <CardBody>
              <span style={{float:"right",color: "#6c757d",fontSize: "80%",fontWeight: "400" }}>{post.postDate}</span>
          <CardTitle>
            {this.props.user.id===post.userId?
            <Link style={{color:"black"}}to="Profile"><h6  onClick={()=>this.selectUser(post.userId)}>{ post.user.firstName+" "+post.user.lastName}</h6></Link>:
            <Link style={{color:"black"}}to="userprofile"><h6  onClick={()=>this.selectUser(post.userId)}>{ post.user.firstName+" "+post.user.lastName}</h6></Link>}
           </CardTitle>
          <CardText className="postText">{post.postText} </CardText>
           {post.postImage===null?"":   <div  onClick= {()=>this.postImage(postimg+post.postImage)}><img className="getPhoto" onClick={toggle} src={postimg+post.postImage} alt=""></img></div>}
          <CardLink href="#"><img
            className="PostLogo"
           onClick= {()=>this.triggerClick(post.id)}
             alt=""
             style={{ width: "50px", height: "35px" }}
             src={post.userLike?Dolulike:Boslike}
           />{post.likeCount}  </CardLink><Link to="CommentPage">  <img
           className="PostLogo"
           onClick= {(()=>this.commentClick(post))}
            alt=""
            style={{ width: "50px", height: "35px" }}
            src={Comment}
          /> </Link>
         
          <div>  
         </div>
              </CardBody>
            </Col> <Col>  
            {this.props.user.id===post.userId?
            <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link" caret>
          </DropdownToggle>
          <DropdownMenu size="sm">
            <DropdownItem onClick= {()=>this.Delete(post.id)}>Kaldır</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>:""}
            </Col>
          </Row>
          <Modal isOpen={this.state.modal} fade={false} toggle={toggle} >
        <ModalHeader toggle={toggle}>Önizleme</ModalHeader>
        <ModalBody>
        <img className="getPhotoModal" src={this.state.image} alt=""></img>
        </ModalBody>
      </Modal>
          </div>
          )
        })}
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentPostCategory :state.changePostReducer,
    like: state.ShowLikeReducer,
    user:state.GetUserReducer, 
    comment:state.CommentReducer,
    posts: state.getPostReducer,
    refresh:state.RefreshReducer,
    refreshDelete:state.RefreshDeleteReducer,
    refreshPost:state.RefreshPostReducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getPost:bindActionCreators(PostActions.getPost,dispatch),
      ChangePostCategory:bindActionCreators(PostActions.ChangePostCategory,dispatch),
      DeletePost:bindActionCreators(PostActions.PostDelete,dispatch),
      Refresh:bindActionCreators(PostActions.Refresh,dispatch),
      RefreshDelete:bindActionCreators(PostActions.RefreshDelete,dispatch),
      RefreshPost:bindActionCreators(PostActions.RefreshPost,dispatch),
      ShowComment:bindActionCreators(CommentActions.ShowComment,dispatch),
      SaveLike: bindActionCreators(LikeActions.SaveLike, dispatch),
      GetUserId: bindActionCreators(LikeActions.GetUserId,dispatch),
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(PostList)