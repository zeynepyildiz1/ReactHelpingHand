import React, { Component } from 'react'
import {Row,Col, Container} from "reactstrap"
import UserCard from   "../User/UserCard"
import Notification from   "../Notification/Notification"
import "../../css/background.css"
import LoginMenu from '../rootmenu/LoginMenu'

export default class NotificationPage extends Component {
    render() {
        return (
          <div> 
             <LoginMenu/>
              <Container>
              <Row>
                  <Col xs="3"><UserCard/></Col>
                  <Col xs="9">
                      <Row><Notification/></Row>
                     
                      </Col>
              </Row></Container> 
          </div>
        )
    }
}
