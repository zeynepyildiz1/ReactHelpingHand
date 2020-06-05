import React, { Component } from 'react'
import {Row,Col, Container} from "reactstrap"

import Comment from '../Notification/Comment'
import CommentPost from '../Notification/CommentPost'
import UserCard from   "../User/UserCard"

import "../../css/background.css"
import AddComment from '../Notification/AddComment'
import LoginMenu from '../rootmenu/LoginMenu'

export default class Dashboard extends Component {
    render() {
        return (
          <div> 
             <LoginMenu/>
              <Container>
              <Row>
                  <Col xs="3"><UserCard/></Col>
                  <Col xs="9"> 
                  <Row><CommentPost/></Row>
                  <Row><AddComment/></Row>
                      <Row><Comment/></Row>
                      </Col>
              </Row></Container> 
          </div>
        )
    }
}
