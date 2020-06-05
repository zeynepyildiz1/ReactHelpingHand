import React from "react";

import {
Row,Col,Button
} from "reactstrap";

import "mdbreact/dist/css/mdb.css";
import  "../../css/app.css"

import {connect} from "react-redux"
import {bindActionCreators} from 'redux'
import * as PostActions from '../../redux/actions/postActions'
class Navi extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {

    return (
      <div>
       <React.Fragment><div className="navibox">
       <Row>
        <Col xs="6" >  <Button outline color="secondary" onClick={()=>this.props.selectCategory(true)} className="navibutton">Destekler</Button></Col>
        <Col  xs="6" ><Button outline color="secondary" onClick={()=>this.props.selectCategory(false)} className="navibutton">İhtiyaçlar</Button></Col>
      </Row>
      
               </div> </React.Fragment>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    currentPostCategory :state.changePostReducer
  }
}
function mapDispatchToProps(dispatch){
  return {
    actions:{
      getPost:bindActionCreators(PostActions.getPost,dispatch),
      ChangePostCategory:bindActionCreators(PostActions.ChangePostCategory,dispatch)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navi)