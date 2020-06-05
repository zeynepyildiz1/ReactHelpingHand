import React, { Component } from 'react'
import {Row,Col, Container} from "reactstrap"
import Navi from "../navi/navi"
import AddPost from '../posts/AddPost'
import PostList from '../posts/PostList'
import UserCard from   "../User/UserCard"
import {connect} from "react-redux"
import {bindActionCreators} from 'redux'
import * as PostActions from '../../redux/actions/postActions'
import "../../css/background.css"
import LoginMenu from '../rootmenu/LoginMenu'


class Dashboard extends Component {
    onSelectCategory = (category) => {
        this.props.actions.ChangePostCategory({category: category});
        this.props.actions.getPost(category);
    }
 
    render() {
        return (
          <div> 
             <LoginMenu/>
            
              <Container>
              <Row>
                  <Col xs="3"><UserCard/></Col>
                  
                  <Col xs="9">
                      <Row><Navi selectCategory={this.onSelectCategory}/></Row>
                      <Row><AddPost/></Row>
                      <Row><PostList/></Row>
                      </Col>
              </Row></Container> 
          </div>
        )
    }
}
function mapStateToProps(state){
    return {
      currentPostCategory :state.changePostReducer,
      posts: state.getPostReducer,
    }
  }
  function mapDispatchToProps(dispatch){
    return {
      actions:{
        getPost:bindActionCreators(PostActions.getPost,dispatch),
        ChangePostCategory:bindActionCreators(PostActions.ChangePostCategory,dispatch),
        addPost: bindActionCreators(PostActions.addPost, dispatch),
      }
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)