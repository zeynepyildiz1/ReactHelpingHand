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
import * as UserActions from "../../redux/actions/userActions";
import * as PostActions from "../../redux/actions/postActions";
import {IMAGE_BASE} from "../../config/config"
import Profil from "../../image/profil.png"
import * as CommentActions from "../../redux/actions/commentActions";
import * as LikeActions from "../../redux/actions/likeActions";
import Boslike from "../../image/boslike.png"
import Dolulike from "../../image/dolulike.png"
import Comment from "../../image/comment.png"
import {Link} from "react-router-dom"
class UserPost extends Component {
  constructor(props){ super(props)

    this.state = {modal: false,image:""};
  }
  componentDidMount() {
   console.log(this.props.actions.getUserPost(this.props.currentPostCategory.category?"true":"false")); 
  }
  Delete = (postId) => {
    console.log(postId);
    this.props.actions.DeletePost(postId);//save
  };
  triggerClick = (postId) => {
    this.props.actions.SaveLike(postId);//save
  };
  postImage = (userImage) => {
    this.setState({image: userImage});
  };
  commentClick = async (post) => {
    await this.props.actions.ShowComment({postId:post.id,
      postText:post.postText,
      postUserId:post.userId,
      postUserImage:post.user.userImage,
      postImage:post.postImage,
      postUserFirstName:post.user.firstName,
      postUserLastName:post.user.lastName,
      postLikeCount:post.likeCount ,
      postUserLike:post.userLike  
    });//save

  };
  render() {
    this.props.actions.getUserPost(this.props.currentPostCategory.category?"true":"false");
var postimg=IMAGE_BASE+"/img/";
var userimg=IMAGE_BASE+"/userimage/";
const toggle = () => this.setState({modal: !this.state.modal});
    return (
      <React.Fragment>
        {this.props.posts.map((post, index) => {
          return (
          <div style={{color:"black"}} key={index} className="post">
          <Row>
            <Col xs="1.5"> <div className="dairesel2">  <img
              
                style={{ width: "75px", height: "75px" }}
               
               src={post.user.userImage===null?Profil:userimg+post.user.userImage}
                alt="" 
              /></div></Col>
            <Col xs="9">
              <CardBody>
              <span style={{float:"right",color: "#6c757d",fontSize: "80%",fontWeight: "400" }}>{post.postDate}</span>
          <CardTitle><h6>{ post.user.firstName+" "+post.user.lastName}</h6></CardTitle>
                <CardText className="postText">{post.postText}</CardText>
                {post.postImage===null?"":   <div  onClick= {()=>this.postImage(postimg+post.postImage)}><img className="getPhoto" onClick={toggle} src={postimg+post.postImage} alt=""></img></div>}
              
                <CardLink href="#"><Link><img
            className="PostLogo"
           onClick= {()=>this.triggerClick(post.id)}
             alt=""
             style={{ width: "50px", height: "35px" }}
             src={post.userLike?Dolulike:Boslike}
           /></Link>{post.likeCount}  <Link to="CommentPage">  <img
           className="PostLogo"
           onClick= {(()=>this.commentClick(post))}
            alt=""
            style={{ width: "50px", height: "35px" }}
            src={Comment}
          /> </Link></CardLink>
              </CardBody>
            </Col><Col>    
           
            <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link" caret>
            
          </DropdownToggle>
       
          <DropdownMenu>
            <DropdownItem onClick= {()=>this.Delete(post.id)}>Kaldır</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown></Col>
      
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
    posts: state.GetUserPostReducer,
    currentPostCategory :state.ChangeUserPostReducer,
    user:state.GetUserReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getUserPost:bindActionCreators(UserActions.getUserPost,dispatch),
    //  ChangePostCategory:bindActionCreators(PostActions.ChangePostCategory,dispatch)
    DeletePost:bindActionCreators(PostActions.PostDelete,dispatch),
    ShowComment:bindActionCreators(CommentActions.ShowComment,dispatch),
    SaveLike: bindActionCreators(LikeActions.SaveLike, dispatch),
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(UserPost)
