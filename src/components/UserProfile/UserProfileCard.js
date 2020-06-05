import React, { Component } from "react";
import { Card, CardBody, Badge} from "reactstrap";
import Profil from "../../image/profil.png";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userProfileActions from "../../redux/actions/userProfileActions";
import {IMAGE_BASE} from "../../config/config"
class UserProfileCard extends Component {
  constructor(props) {
    super(props);
    this.props.actions.getUser(this.props.notification);
    
  }
  render() {
    var userimg=IMAGE_BASE+"/userimage/";
    return (
      <div>
        <React.Fragment>
        <Card >
          <div className="daireseluser">
            {" "}
            <img
              style={{ width: "180px", height: "180px" }}
              src={this.props.user.userImage===null?Profil:userimg+this.props.user.userImage}
              alt=""
            />
          </div>
          <CardBody>
    <div className="ortala"><h4>{this.props.user.firstName+" "+this.props.user.lastName}</h4><h6> Post: <Badge color="secondary">{this.props.user.postCount}</Badge></h6></div>
              <div ></div>
              <div style={{width:"10px", height:"25px"}}></div>
              
          </CardBody>
        </Card></React.Fragment>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user:state.GetUserProfileReducer,
    notification: state.GetUserIdReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getUser: bindActionCreators(userProfileActions.getUser, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileCard);