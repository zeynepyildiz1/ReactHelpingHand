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
import * as CommentActions from "../../redux/actions/commentActions";
import {IMAGE_BASE} from "../../config/config"
import Profil from "../../image/profil.png"

class AddComment extends Component {
  state = {
    text: ""
  };
  Clear = () => {
 this.setState({ text: ''})
  }
  postPost() {
    this.props.actions.AddComment({
        CommentText: this.state.text,
        PostId:this.props.showcomment.postId,
    });
  
this.Clear();
  
  
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
                      placeholder="Bir şeyler yaz!"
                      value={this.state.text}
                      name="text"
                      id="exampleText"
                    /> </Row>
                   
                     <Row> <Col xs="1"></Col><Col xs="9"><br></br><br></br></Col>
                      <Col xs="1">
                      <FormGroup>
                 <Button 
                disabled={(this.state.text==="")?  true:false}
                  onClick={() => this.postPost()}
                  style={{ marginTop:"10px",marginLeft:"5px", float: "right" }}
                  
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
    showcomment:state.ShowComment,
    user:state.GetUserReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      AddComment: bindActionCreators(CommentActions.addComment, dispatch),
     
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
