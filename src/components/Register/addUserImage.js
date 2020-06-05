
import React, { Component } from 'react'
import Profil from "../../image/Profil2.png"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as UserActions from "../../redux/actions/userActions";
import "../../css/register.css";
class addUserImage extends Component {
 
  constructor(props) {
    super(props);
    this.myInput = React.createRef();
   
  }
    handleFileUpload = async event => {
   
      this.props.actions.imageAction({ imageFile:event.target.files[0], imagePath: URL.createObjectURL(event.target.files[0]),image: event.target.files[0] ,display: "inline"});
       };
       triggerClick = () => {
        this.props.actions.imageAction({ imageFile:null, imagePath:null,image: null ,display: "none"});
        this.myInput.current.click();
      };
      dene = (event) => {
        event.preventDefault();
        this.props.actions.imageAction({ imageFile:null, imagePath:null,image: null ,display: "none"});
      
      }
  
    render() {
        return (
            <div>
              <input
                style={{ display: "none" }}
                type="file"
                className="form-control"
                aria-describedby="basic-addon1"
                accept="image/png, image/jpeg"
                onChange={this.handleFileUpload}
                ref={this.myInput}
               
              /><div className="bosluk">
              <div className="dairesel">
              <img
               onClick={this.triggerClick}
                style={{ width: "125px", height: "125px" }}
                accept="image/x-png,image/gif,image/jpeg"
               src={this.props.image.imagePath===null?Profil:this.props.image.imagePath}
                alt="" 
              />
               <button onClick={this.dene} style={{display:this.props.image.display}} className="btn">x</button></div></div>
          </div>
        )
    }
}

function mapStateToProps(state) {
  return {
 
    image:state.UserReducer
    
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
     // imageAction: bindActionCreators(UserActions.addUserImageSuccess, dispatch),
     imageAction: bindActionCreators(UserActions.image, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(addUserImage);

