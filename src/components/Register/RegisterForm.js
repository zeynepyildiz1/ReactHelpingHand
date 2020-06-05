import React, { Component } from "react";
import { Row, Col, Button, Form, FormGroup, Label, Input} from "reactstrap";
import "../../css/register.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../redux/actions/userActions";
import AddUserImage from "./addUserImage";
import Menu from "../rootmenu/menu"
import { Link } from "react-router-dom";
class RegisterForm extends Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleSubmit = (event) => {
    console.log("email",this.state.email);
    console.log("email",this.state.ad);
    console.log("email",this.state.soyad);
    console.log("email",this.state.password);
    console.log("email",this.state.passwordConfirm);
    console.log("email",this.state.date);
    

    event.preventDefault();
    if (
      (this.state.email !== "") &
      (this.state.ad !== "") &
      (this.state.soyad !== "") &
      (this.state.password !== "") &
      (this.state.passwordConfirm !== "") &
      (this.state.date !== "")
    ) {
      if (this.state.password === this.state.passwordConfirm) {
        this.props.actions.addUser({
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
    } else {
      alert("Lütfen boş alanları doldurunuz.");
    }
  };

  render() {
    return (
      <div>
        <Menu/>
           <div  className="a2" style={{color:"white"}}><h4> Kayıt Ol</h4></div>
        <div className="a">
          <Row>
            <Row></Row>
            <br></br>
            <Col xs="2"></Col>
            <Col xs="8">
              <Form >
                <Row>
                  <Col xs="3">
                    <AddUserImage />
                  </Col>
                  <Col xs="1">
                  
                  </Col>
                  <Col xs="8">
                    {" "}
                    <Label>Ad</Label>
                    <Input
                      onChange={this.onChangeHandler}
                      type="text"
                      name="ad"
                      id="exampleText"
                      placeholder="Ad"
                    />
                    <Label>Soyad</Label>
                    <Input
                      onChange={this.onChangeHandler}
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
                    type="phone"
                    name="phone"
                    id="examplePhone"
                    placeholder="5*********"
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="exampleDate">Tarih</Label>
                  <Input
                    onChange={this.onChangeHandler}
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
                    name="address"
                    id="exampleAddress"
                    placeholder="1234 Main St"
                  />
                </FormGroup>

                <Link style={{color:"white"}}  to="loginform"> <Button onClick={this.handleSubmit}
                  type="submit" >Kaydol</Button></Link>
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
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addUser: bindActionCreators(userActions.addUser, dispatch),
      addImage: bindActionCreators(userActions.addUserImage, dispatch),
      imageAction: bindActionCreators(userActions.image, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
