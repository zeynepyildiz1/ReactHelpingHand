import React, {  Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,NavLink
} from 'reactstrap';


import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as serviceActions from "../../redux/actions/serviceActions";

class LoginMenu extends Component {
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
      logout(){
        this.props.actions.Logout();
    
              }
      render() {
     
        return (
          <div>
           
           
            <Navbar color="white" light expand="md">
            <NavbarBrand style={{fontWeight:"bold",color:"#aa66cc"}} href="/">helpinghand</NavbarBrand><br></br>
              <NavbarToggler onClick={this.toggle}   />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem to="loginform">
           <NavLink style={{fontWeight:"bold",color:"#aa66cc"}} href="/Dashboard">Ana Sayfa </NavLink>
            </NavItem>
            <NavItem>
            <NavLink style={{fontWeight:"bold",color:"#aa66cc"}} href="/Profile">Profil</NavLink>
            </NavItem>
            <NavItem>
            <NavLink style={{fontWeight:"bold",color:"#aa66cc"}} href="/Notification">Bildirimler</NavLink>
            </NavItem>
            <NavItem>
            <NavLink style={{fontWeight:"bold",color:"#aa66cc"}} href="/UpdateUserRoot">Ayarlar</NavLink>
            </NavItem>
            <NavItem>
            <NavLink style={{fontWeight:"bold",color:"#aa66cc"}} onClick={()=>this.logout()} href="/loginform">Çıkış</NavLink>
            </NavItem>
                  
                </Nav>
              </Collapse>
            </Navbar>
            <div style={{width:"100%",height:"10px"}}></div>
          </div>
        );
      }
    }function mapStateToProps(state) {
      return {
        authReducer:state.authReducer,
      };
    }
    function mapDispatchToProps(dispatch) {
      return {
        actions: {
          Logout: bindActionCreators(serviceActions.Logout, dispatch),
        },
      };
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(LoginMenu);
     
