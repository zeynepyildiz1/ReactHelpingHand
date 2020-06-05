import React, { Component } from "react";
import { CardText, CardBody, Label, Row, Col } from "reactstrap";
import "../../css/post.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as LikeActions from "../../redux/actions/likeActions";
import * as CommentActions from "../../redux/actions/commentActions";
import Profil from "../../image/profil.png"
import {IMAGE_BASE} from "../../config/config"
import {Link} from "react-router-dom"
class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isChecked: true,
        };
      }
      selectUser(user) {
        this.props.actions.GetUserId(user);
      };  
      toggleChange = () => {
        this.setState({
          isChecked: !this.state.isChecked,
        });
      }
    
  componentDidMount() {
    this.props.actions.NotificationAction();
  }  
  
  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    // name değeri categoryId ise onu int e çevir değilse olduğu gibi al demek (hooksta kullanılır.)
    //[name]: name === "categoryId" ? parseInt(value, 10) : value
  };
  render()
   {
    var userimg=IMAGE_BASE+"/userimage/";
    this.props.actions.NotificationAction();
    return (
      <React.Fragment>
        {this.props.notification.map((notification, index) => {
          return (
            <div style={{ color: "black" }} key={index} className="post">
              
             { this.props.actions.UpdateAction(notification.id)}
               
                  <CardBody>
                  <Row>
                <Col xs="2">
                <div className="daireselbildirim">  <img
              
              style={{ width: "75px", height: "75px" }}
             
             src={notification.postUserImage===null?Profil:userimg+notification.postUserImage}
              alt="" 
            /></div>
                </Col>
                  <Col xs="8">
          <CardText className="postText" style={{ marginTop:"15px"}}>
          {this.props.user.id===notification.userId?
            <Link to="Profile"><span style={{color:"black"}}  onClick={()=>this.selectUser(notification.userId)}>Siz</span></Link>: <Link to="userprofile"><span  style={{color:"black"}} onClick={()=>this.selectUser(notification.userId)}>{notification.postUserName}</span></Link>}
            {this.props.user.id===notification.userId? <span><span style={{color:"red" ,fontWeight:"italic"}}>  "{notification.postText}"</span> postunuzu beğendiniz. </span> :<span> sizin   <span style={{color:"red" ,fontWeight:"italic"}}>  "{notification.postText}"</span> postunuzu beğendi.</span>  }
            
              
              </CardText>
         
          </Col>
          <Col xs="2"> 
          <Label check> </Label>
          </Col>
          </Row>
                  </CardBody>{notification.comments.map((comment, index) => {
          return (
            <div style={{ color: "black" }} key={index} className="post">
              
           
              { this.props.actions.CommentAction(comment.id)}
                  <CardBody>
                  <Row>
                <Col xs="2">
                <div className="daireselbildirim">  <img
              
              style={{ width: "75px", height: "75px" }}
             src={comment.commentUserImage===null?Profil:userimg+comment.commentUserImage}
              alt="" 
            /></div>
                </Col>
                  <Col xs="8">
          <CardText className="postText" style={{ marginTop:"15px"}}>
          {this.props.user.id===comment.userId?
            <Link style={{color:"black"}} to="Profile"><span  onClick={()=>this.selectUser(comment.userId)}>Siz</span></Link>: <Link style={{color:"black"}} to="userprofile"><span  onClick={()=>this.selectUser(comment.userId)}>{comment.commentUserName}</span></Link>}
            {this.props.user.id===comment.userId? <span> <span style={{color:"red" ,fontWeight:"italic"}}>  "{comment.postText}"  </span> postunuza <span style={{color:"red" ,fontWeight:"italic"}}>  "{comment.commentText}"  </span> yorumunu yaptınız.</span> :<span> sizin <span style={{color:"red" ,fontWeight:"italic"}}>  "{comment.postText}" </span> postunuza  <span style={{color:"red" ,fontWeight:"italic"}}>  "{comment.commentText}" </span> yorumunu yaptı.</span>   }

              </CardText>
         
          </Col>
          <Col xs="2"> 
          <Label check> </Label>
          </Col>
          </Row>
                  </CardBody>
                
            
            </div>
          );
        })}
                
            
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  return {
    notification: state.NotificationReducer,
    user:state.GetUserReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      NotificationAction: bindActionCreators(
        LikeActions.Notification,
        dispatch
      ),
      UpdateAction: bindActionCreators(
        LikeActions.UpdateLike,
        dispatch
      ),
      CommentAction: bindActionCreators(
        CommentActions.UpdateComment,
        dispatch
      ),
      GetUserId: bindActionCreators(
        LikeActions.GetUserId,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
