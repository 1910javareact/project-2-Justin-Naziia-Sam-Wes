import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';


// const NavBar = (props:any) => {
// const [collapsed, setCollapsed] = useState(true);

// const toggleNavbar = () => setCollapsed(!collapsed);
const NavBar = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    
    
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/"><h3>TopChat</h3></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
              <NavItem className="nav">
                <NavItem>
                  <Link to='/'>Home</Link>
                </NavItem>
                <NavItem>
                  <Link to='/'>User</Link>
                </NavItem>
                <NavItem>
                  <Link to='/'>Make a Topic</Link>
                </NavItem>
                <NavItem>
                  <Link to='/'>Logout</Link>
                </NavItem>
                </NavItem>
              </Nav>
              
              
            </Collapse>
          </Navbar>
        </div>
      );
  }
export default NavBar;




