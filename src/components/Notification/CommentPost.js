import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CommentActions from "../../redux/actions/commentActions"
import { CardText, CardBody, CardTitle,Row,Col,UncontrolledDropdown,DropdownToggle,DropdownItem,DropdownMenu,Modal, ModalHeader, ModalBody, } from "reactstrap";
import "../../css/post.css";
import {IMAGE_BASE} from "../../config/config"
import Profil from "../../image/profil.png"
import {Link} from "react-router-dom"
import * as LikeActions from "../../redux/actions/likeActions";
class CommentPost extends Component {
  constructor(props){ super(props)

    this.state = {modal: false,image:""};
  }
    triggerClick = (postId) => {
        this.props.actions.SaveLike(this.props.showcomment.postId);//save
      };
    render() {
        var postimg=IMAGE_BASE+"/img/";
        var userimg=IMAGE_BASE+"/userimage/";
        const toggle = () => this.setState({modal: !this.state.modal});
        return (
            <div>
                 <React.Fragment>
             <div style={{color:"black"}}   className="post">
            <Row>
            <Col xs="1.5"> 
            <div className="dairesel2">  
            <img
            style={{ width: "75px", height: "75px" }}
            src={this.props.showcomment.postUserImage===null?Profil:userimg+this.props.showcomment.postUserImage}
            alt="" />
            </div>
            </Col>
            <Col xs="9">
          <CardBody> 
          <span style={{float:"right",color: "#6c757d",fontSize: "80%",fontWeight: "400" }}>{this.props.showcomment.postDate}</span>
          <CardTitle >
            {this.props.user.id===this.props.showcomment.postUserId?
            <Link style={{color:"black"}}to="Profile"><h6  onClick={()=>this.selectUser(this.props.showcomment.postUserId)}>{ this.props.showcomment.postUserFirstName+" "+this.props.showcomment.postUserLastName}</h6></Link>:
            <Link style={{color:"black"}}to="userprofile"><h6  onClick={()=>this.selectUser(this.props.showcomment.postUserId)}>{ this.props.showcomment.postUserFirstName+" "+this.props.showcomment.postUserLastName}</h6></Link>}
            </CardTitle>
              <CardText>{this.props.showcomment.postText}</CardText>
          {this.props.showcomment.postImage===null?"":   <img className="getPhoto" onClick={toggle} src={postimg+this.props.showcomment.postImage} alt=""></img>}
          
          </CardBody></Col>
             <Col>
            <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link" caret>
          </DropdownToggle>
          <DropdownMenu size="sm">
            <DropdownItem onClick= {()=>this.Delete()}>Kaldır</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown> </Col></Row>
         </div>
         </React.Fragment>
         <Modal isOpen={this.state.modal} fade={false} toggle={toggle} >
        <ModalHeader toggle={toggle}>Önizleme</ModalHeader>
        <ModalBody>
        <img className="getPhotoModal" src={postimg+this.props.showcomment.postImage} alt=""></img>
        </ModalBody>
       
      </Modal>
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
       // DeletePost:bindActionCreators(PostActions.PostDelete,dispatch),
        getComment:bindActionCreators(CommentActions.getComment,dispatch),
        SaveLike: bindActionCreators(LikeActions.SaveLike, dispatch),
      }
    };
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(CommentPost)