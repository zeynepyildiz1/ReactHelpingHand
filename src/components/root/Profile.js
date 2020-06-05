import React, { Component } from 'react'
import {Row,Col, Container} from "reactstrap"
import Navi from "../navi/naviProfile"
import AddPost from '../posts/AddPost'

import UserCard from   "../User/UserCard"
import UserPost from   "../User/UserPost"
import "../../css/background.css"
import LoginMenu from '../rootmenu/LoginMenu'

export default class Profile extends Component {
    render() {
        return (
          <div> 
             <LoginMenu/>
              <Container>
              <Row>
                  <Col xs="3"><UserCard/></Col>
                  <Col xs="9">
                      <Row><Navi/></Row>
                      <Row><AddPost/></Row>
                      <Row><UserPost/></Row>
                      </Col>
              </Row></Container> 
          </div>
        )
    }
}
