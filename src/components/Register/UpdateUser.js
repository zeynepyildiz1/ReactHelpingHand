import React, { Component } from "react";
import { Row, Col, Button, Form, FormGroup, Label, Input} from "reactstrap";
import "../../css/register.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../redux/actions/userActions";
import UpdateUserImage from "./UpdateUserImage";

import { Link } from "react-router-dom";
class UpdateUser extends Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      ad: "",
      soyad: "",
      email: "",
      password: "",
      passwordConfirm: "",
      phone: "",
      date: "",
      address: "",
    };
  }
  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    // name değeri categoryId ise onu int e çevir değilse olduğu gibi al demek (hooksta kullanılır.)
    //[name]: name === "categoryId" ? parseInt(value, 10) : value
  };
  handleClick = (event) => {
    event.preventDefault();
      if (this.state.password === this.state.passwordConfirm) {
        this.props.actions.updateUser({
          email: this.state.email,
          password: this.state.password,
          ad: this.state.ad,
          soyad: this.state.soyad,
          date: this.state.date,
          address: this.state.address,
          phone: this.state.phone,
          image:this.props.imageFile.image,
        });
        if (
          this.props.imageFile.imageFile !== null &&
          this.props.imageFile.imageFile !== undefined
        ) {
          this.props.actions.addImage({
            imageFile: this.props.imageFile.image,
          });
        }
       
      } else {
        alert("Passwords are not equal");
      }
    
  };

  render() {
    return (
      <div>
     
        <div className="update">
        <div style={{width:"100%",height:"20px"}}></div>
          <Row>
            
            <Col xs="2"></Col>
            <Col xs="8">
              <Form >
                <Row>
                  <Col xs="3">
                    <UpdateUserImage />
                  </Col>
                  <Col xs="1">
                  
                  </Col>
                  <Col xs="8">
                    {" "}
                    <Label>Ad</Label>
                    <Input
                      onChange={this.onChangeHandler}
                      defaultValue={this.props.user.firstName}
                      type="text"
                      name="ad"
                      id="exampleText"
                      placeholder="Ad"
                    />
                    <Label>Soyad</Label>
                    <Input
                      onChange={this.onChangeHandler}
                      defaultValue={this.props.user.lastName}
                      type="text"
                      name="soyad"
                      id="exampleText"
                      placeholder="Soyad"
                    />
                  </Col>
                </Row>

                <FormGroup>
                  <Label for="exampleEmail">E-mail</Label>
                  <Input
                   
                    onChange={this.onChangeHandler}
                    defaultValue={this.props.user.mail}
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="ornek@ornek.com"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Parola</Label>
                  <Input
                 
                    onChange={this.onChangeHandler}
                    defaultValue={this.props.user.password}
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="*******"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Parola Tekrar</Label>
                  <Input
                    onChange={this.onChangeHandler}
                    defaultValue={this.props.user.password}
                    type="password"
                    name="passwordConfirm"
                    id="examplePassword"
                    placeholder="*******"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Telefon</Label>
                  <Input
                    onChange={this.onChangeHandler}
                    defaultValue={this.props.user.phoneNumber}
                    type="phone"
                    name="phone"
                    id="examplePhone"
                    placeholder="5*********"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="exampleDate">Doğum Tarihi</Label>
                  <Input
                    onChange={this.onChangeHandler}
                    defaultValue={this.props.user.dateOfBirth}
                    type="date"
                    name="date"
                    id="exampleDate"
                    placeholder="date placeholder"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="exampleAddress">Adres</Label>
                  <Input
                    type="text"
                    defaultValue={this.props.user.address}
                    name="address"
                    id="exampleAddress"
                    placeholder="1234 Main St"
                  /> 
                  
                </FormGroup>
             <FormGroup>
                <Button color="secondary" style={{position:"relative",marginTop:"25px", float:"left",left: "10%"}} onClick={this.handleClick}
                  type="button" > <Link style={{color:"white"}}  to="Dashboard">Güncelle</Link></Button></FormGroup>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    imageFile: state.UserReducer,
    user:state.GetUserReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      updateUser: bindActionCreators(userActions.updateUser, dispatch),
      addImage: bindActionCreators(userActions.addUserImage, dispatch),
      imageAction: bindActionCreators(userActions.image, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser);
