import React, { Component } from 'react'
import {Row,Col, Container} from "reactstrap"
import UpdateUser from '../Register/UpdateUser'
import UserCard from '../User/UserCard'
import LoginMenu from '../rootmenu/LoginMenu'
export default class UpdateUserRoot extends Component {
    render() {
        return (
            <div>
                <LoginMenu/>
                <Container>
              <Row>
                  <Col xs="3"><UserCard/></Col>
                  
                  <Col xs="9">
                      <Row><UpdateUser/></Row>
                     
                      </Col>
              </Row></Container> 
            </div>
        )
    }
}
