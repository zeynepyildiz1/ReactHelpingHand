import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  FormGroup,
  Input,Button
} from "reactstrap";

import "../../css/post.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as PostActions from "../../redux/actions/postActions";
import AddPostImage from './AddPostImage'
import {IMAGE_BASE} from "../../config/config"
import Profil from "../../image/profil.png"
class AddPost extends Component {
  state = {
    text: ""
  };
  Clear = () => {
 this.setState({ text: ''})
  }
  AddPost() {
    this.props.actions.addPost({
      PostText: this.state.text,
          PostCategory:Boolean( this.props.currentPostCategory.category),
      image:this.props.image.image
      
    });
this.props.actions.imageAction({ imageFile:null, imagePath:null,image: null ,display: "none"});
this.Clear();
this.props.actions.RefreshPost(1);
this.props.actions.getPost((this.props.currentPostCategory.category?"true":"false"));
  }
  onChangeHandler=event=>{
    
    this.setState({text:event.target.value});
  }
  render() {
    var userimg=IMAGE_BASE+"/userimage/";
    return (
      <React.Fragment>
       
       <Card
          inverse
          style={{ backgroundColor: "#f8f9fa" }}
          className="addPost"
        >
          <Row>
            <Col xs="2">
            <div className="dairesel5">
            {" "}
            <img
              style={{ width: "100", height: "100" }}
              src={this.props.user.userImage===null?Profil:userimg+this.props.user.userImage}
              alt=""
            />
          </div>
            </Col>
            <Col xs="10">
              <CardBody>
             <Row>
                    <Input
                      onChange={this.onChangeHandler}
                      type="textarea"
                      rows="3"
                      cols="50"
                      placeholder={
                        this.props.currentPostCategory.category
                          ? "Destek ver!"
                          : "Bir şeye mi ihtiyacın var?"
                      }
                      value={this.state.text}
                      name="text"
                      id="exampleText"
                    /></Row>
                   
                      <Row > <AddPostImage/></Row>
                     <Row> <Col xs="1"></Col><Col xs="9"></Col>
                      <Col xs="1">
                      <FormGroup>
                 <Button 
                disabled={(this.state.text===""&&this.props.image.image===null)?  true:false}
                  onClick={() => this.AddPost()}
                  
                  style={{ marginTop:"-5px",marginLeft:"5px", float: "right" }}
                  
                  color="secondary"
                > Gönder
                </Button></FormGroup></Col></Row>
              
                   
              </CardBody>
            </Col>
          </Row>
        </Card>
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  return {
    addPostState: state.addPostReducer,
    currentPostCategory: state.changePostReducer,
    imageFile: state.addPostImageReducer,
    image: state.imageReducer,
    user:state.GetUserReducer,
    refreshPost:state.RefreshPost
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addPost: bindActionCreators(PostActions.addPost, dispatch),
      addImage: bindActionCreators(PostActions.addPostImage, dispatch),
      imageAction: bindActionCreators(PostActions.image, dispatch),
      getPost:bindActionCreators(PostActions.getPost,dispatch),
      RefreshPost:bindActionCreators(PostActions.RefreshPost,dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
