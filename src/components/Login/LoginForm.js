import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../../css/register.css";
import { Redirect } from "react-router-dom";
import Logo from "../../image/logo.PNG";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as serviceActions from "../../redux/actions/serviceActions";
import Menu from "../rootmenu/menu"

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  
  }
  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    // name değeri categoryId ise onu int e çevir değilse olduğu gibi al demek (hooksta kullanılır.)
    //[name]: name === "categoryId" ? parseInt(value, 10) : value
  };
  handleSubmit = (event) => {
    
    this.props.actions.Login({
      email: this.state.email,
      password: this.state.password,
    });
    event.preventDefault();
  };

  render() { 
    console.log(this.props.authReducer);
if (this.props.authReducer.LoginSuccess === 1) {
this.props.actions.ResetLogin({LoginSuccess:0})
      return <Redirect to="/Dashboard"/>
    }

  
    return (
      <div>
        <Menu/>
        <div  className="b2" style={{color:"white"}}><h4> Giriş Yap</h4></div>
        <div className="b">
        
          <Form><div style={{ textAlign:"center", margin:"auto",width: "200px", height: "90px" }}>
            <img
              style={{  marginLeft:"-25px",width: "260px", height: "90px" }}
              src={Logo}
              alt=""
            /></div>
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
<div   style={{ textAlign: "center" }}>
            <Button
            
              onClick={this.handleSubmit}
              type="submit"
            >
           Giriş
            </Button>
            <FormGroup>
              <Label style={{ marginTop: "30px" }}>
                Şifremi Unuttum
              </Label>
            </FormGroup></div>
          </Form>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    authReducer:state.authReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      Login: bindActionCreators(serviceActions.Login, dispatch),
      ResetLogin:bindActionCreators(serviceActions.resetLogin, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
 