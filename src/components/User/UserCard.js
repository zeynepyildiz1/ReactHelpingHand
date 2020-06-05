import React, { Component } from "react";
import { Card, CardBody, ListGroup, ListGroupItem ,Badge} from "reactstrap";
import Profil from "../../image/profil.png";
import {Link} from  "react-router-dom"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../redux/actions/userActions";
import {IMAGE_BASE} from "../../config/config"
import * as serviceActions from "../../redux/actions/serviceActions";

class UserCard extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.props.actions.getUser();
  }
  logout(){
    this.props.actions.Logout();

          }
  render() {

    var userimg=IMAGE_BASE+"/userimage/";
    this.props.actions.getUser();
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
    <div className="ortala"><Link style={{color:"black",textAlign:"center"}} to="/Profile"><h4>{this.props.user.firstName+" "+this.props.user.lastName}</h4></Link><h6> Post: <Badge color="secondary">{this.props.user.postCount}</Badge></h6></div>
              <div ></div>
              <div style={{width:"10px", height:"25px"}}></div>
              <div ><ListGroup>
              <Link style={{color:"#495057",textAlign:"center"}} to="/Dashboard">  <ListGroupItem  tag="button" action>Anasayfa</ListGroupItem></Link>
              <Link style={{color:"#495057",textAlign:"center"}} to="/Profile">  <ListGroupItem  tag="button" action>Profil</ListGroupItem></Link>
       
    <Link style={{color:"#495057",textAlign:"center"}} to="/Notification">  <ListGroupItem tag="button" action>Bildirimler <Badge color="secondary"> {this.props.user.notificationCount}</Badge></ListGroupItem></Link>
    <Link style={{color:"#495057",textAlign:"center"}} to="/UpdateUserRoot">  <ListGroupItem style={{color:"#495057",textAlign:"center"}} tag="button" action>Ayarlar</ListGroupItem></Link>
        <Link style={{color:"#495057",textAlign:"center"}} to="/loginform">   <ListGroupItem onClick={()=>this.logout()} style={{color:"#495057",textAlign:"center"}} tag="button" action>Çıkış</ListGroupItem></Link>
        
      </ListGroup>
     </div>
          </CardBody>
        </Card>
        </React.Fragment>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user:state.GetUserReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getUser: bindActionCreators(userActions.getUser, dispatch),
      Logout: bindActionCreators(serviceActions.Logout, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);