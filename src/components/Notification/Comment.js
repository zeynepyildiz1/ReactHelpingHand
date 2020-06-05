import React, { Component } from 'react'

  import { connect } from "react-redux";
  import { bindActionCreators } from "redux";
  import * as CommentActions from "../../redux/actions/commentActions"
  import {
    CardText,CardBody,CardTitle,Row,Col,UncontrolledDropdown,DropdownToggle,DropdownItem,DropdownMenu
  } from "reactstrap";
  import "../../css/post.css";
  import {IMAGE_BASE} from "../../config/config"
  import Profil from "../../image/profil.png"
  import {Link} from "react-router-dom"
  import * as LikeActions from "../../redux/actions/likeActions";
class Comment extends Component {
    constructor(props){ super(props)
        this.props.actions.getComment(this.props.showcomment.postId); 
        
       }
       Delete = (userId) => {
        this.props.actions.DeletePost(userId);//save
      };  
       componentWillUpdate() {
        this.props.actions.getComment(this.props.showcomment.postId); 
       
      }
  render() {
        var userimg=IMAGE_BASE+"/userimage/";
        return (
            <div>
             <React.Fragment>
        {this.props.comment.map((comment, index) => {
     
          return (
            <div style={{color:"black"}}  key={index} className="post">
            <Row>
            <Col xs="1.5"> 
            <div className="dairesel2">  
            <img
            style={{ width: "75px", height: "75px" }}
            src={comment.post.user.userImage===null?Profil:userimg+comment.post.user.userImage}
            alt="" />
            </div>
            </Col>
            <Col xs="9">
          <CardBody> 
          <span style={{float:"right",color: "#6c757d",fontSize: "80%",fontWeight: "400" }}>{comment.commentDate}</span>
          <CardTitle >
            {this.props.user.id===this.props.showcomment.postUserId?
            <Link style={{color:"black"}}to="Profile"><h6  onClick={()=>this.selectUser(comment.id)}>{ comment.user.firstName+" "+comment.user.lastName}</h6></Link>:
            <Link style={{color:"black"}}to="userprofile"><h6  onClick={()=>this.selectUser(comment.id)}>{ comment.user.firstName+" "+comment.user.lastName}</h6></Link>}
            </CardTitle>
            <CardText>{comment.commentText}</CardText>
          </CardBody></Col>
             <Col>
             {this.props.user.id===comment.userId?
            <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link" caret> 
          </DropdownToggle>
          <DropdownMenu size="sm">
            <DropdownItem onClick= {()=>this.Delete(comment.id)}>Kaldır</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>:""} </Col></Row>
         </div>
          )
        })}
      </React.Fragment>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
      comment:state.CommentReducer,
      posts: state.getPostReducer,
      showcomment:state.ShowComment,
      user:state.GetUserReducer, 
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        DeletePost:bindActionCreators(CommentActions.CommentDelete,dispatch),
        getComment:bindActionCreators(CommentActions.getComment,dispatch),
        SaveLike: bindActionCreators(LikeActions.SaveLike, dispatch),
      }
    };
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Comment)