import React from "react";

import {
Row,Col,Button
} from "reactstrap";
import {connect} from "react-redux"
import {bindActionCreators} from 'redux'
import * as UserProfileActions from '../../redux/actions/userProfileActions'
class NaviProfile extends React.Component {
  selectCategory = category => {
    console.log(category)
    this.props.actions.ChangePostCategory({category: category});
  };  
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
        <Col xs="6" >  <Button outline color="secondary" onClick={()=>this.selectCategory(true)} className="navibutton">Destekler</Button></Col>
        <Col  xs="6" ><Button outline color="secondary" onClick={()=>this.selectCategory(false)} className="navibutton">İhtiyaçlar</Button></Col>
      </Row>
      
               </div> </React.Fragment>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    currentPostCategory :state.ChangeUserProfilePostReducer
  }
}
function mapDispatchToProps(dispatch){
  return {
    actions:{
     
      ChangePostCategory:bindActionCreators(UserProfileActions.ChangePostCategory,dispatch)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NaviProfile)