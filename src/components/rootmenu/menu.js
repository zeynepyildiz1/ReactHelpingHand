import React, {  Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,NavLink
} from 'reactstrap';

import Logo from "../../image/logo.PNG";
import { connect } from "react-redux";

class menu extends Component {
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
     
      render() {
     
        return (
          <div>
           
            <Navbar color="white" light expand="md">
            <NavbarBrand style={{fontWeight:"bold",color:"#aa66cc"}} href="/">helpinghand</NavbarBrand><br></br>
           
              <NavbarToggler onClick={this.toggle}   />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem to="loginform">
           <NavLink style={{fontWeight:"bold",color:"#aa66cc"}} href="/loginform">Giriş Yap </NavLink>
            </NavItem>
            <NavItem>
            <NavLink style={{fontWeight:"bold",color:"#aa66cc"}} href="/registerform">Kaydol</NavLink>
            </NavItem>
                  
                </Nav>
              </Collapse>
            </Navbar>
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
         
        },
      };
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(menu);
     
