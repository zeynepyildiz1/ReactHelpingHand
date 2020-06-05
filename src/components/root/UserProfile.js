import React, { Component } from 'react'
import {Row,Col, Container} from "reactstrap"
import Navi from "../navi/naviUsersProfile"


import "../../css/background.css"
import UserProfileCard from '../UserProfile/UserProfileCard'
import UserProfilePost from '../UserProfile/UserProfilePost'
import LoginMenu from '../rootmenu/LoginMenu'

export default class UserProfile extends Component {
    render() {
        return (
          <div> 
             <LoginMenu/>
              <Container>
              <Row>
                  <Col xs="3"><UserProfileCard/></Col>
                  <Col xs="9">
                      <Row><Navi/></Row>
                     
                      <Row><UserProfilePost/></Row>
                      </Col>
              </Row></Container> 
          </div>
        )
    }
}
