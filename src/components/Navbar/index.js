import React, {Component} from "react";
import Swiggy from "../../Swiggy_logo.svg";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
    Row } from 'reactstrap';
import "./home.css"

export default class Navigation extends Component {
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
          <Navbar color="light" light expand="md" style={{boxShadow:'0px 3px 6px -6px'}}>
            <NavbarBrand><img src={Swiggy} className = "home-navbar-header" align="left"/></NavbarBrand>
            
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" pills>
                <NavItem>
                  <NavLink  style = {{marginRight : '80px'}}><span className = 'home-navbar-label'><h3>FAQ</h3></span></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink><span className = 'home-navbar-login'><h3>Login</h3></span></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink><button className = "home-navbar-signin"><h3 >Sign Up</h3></button></NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            
          </Navbar>
        </div>
      );
    }
  }