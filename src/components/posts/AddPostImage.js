import React, { Component } from "react";
import { connect } from "react-redux";
import Interface from "../../image/interface.png";
import "../../css/post.css"
import { bindActionCreators } from "redux";
import * as PostActions from "../../redux/actions/postActions";
class AddPostImage extends Component {
  componentDidMount(){
   
    this.props.actions.imageAction({ imageFile:null, imagePath:null,image: null ,display: "none"});
    
  }
  constructor(props) {
    super(props);

    this.myInput = React.createRef();
  }

  handleFileUpload = async (event) => {
  
    
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
         
          aria-describedby="basic-addon1"
          accept="image/png, image/jpeg"
          onChange={this.handleFileUpload}
          ref={this.myInput}
        />

      
          <img
           className="PostLogo"
          onClick={this.triggerClick}
            alt=""
            style={{ width: "25px", height: "25px" }}
            src={Interface}
          />
        <div className="container">
        <img
        name="imagebox"
        className= "addPhoto"
        style={{display:this.props.image.display}}
          accept="image/x-png,image/gif,image/jpeg"
          alt=""
          src={this.props.image.imagePath}
        />  <button  onClick={this.dene} style={{display:this.props.image.display}} className="btn">x</button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    imageFile: state.addPostImageReducer,
    image:state.imageReducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addImage: bindActionCreators(PostActions.addPostImage, dispatch),
      imageAction: bindActionCreators(PostActions.image, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostImage);
