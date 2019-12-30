import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarBrand, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';

// const NavBar = (props:any) => {
// const [collapsed, setCollapsed] = useState(true);

// const toggleNavbar = () => setCollapsed(!collapsed);
  const NavBar = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    
    return (
      <div id= "headmenu">
        <Navbar style={{backgroundColor: '#6699cc'}} light expand="md">
        {/* <Nav className="navbar navbar-light" style={{backgroundColor: 'blue'}}>
          <input style={{backgroundColor: 'blue'}} type="text" /> */}
          
          <NavbarBrand href="/"><h3>Top Chat</h3></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
           
              <NavItem className="nav">
              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret right>
                User
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                    {/* Please, change the path */}
                <Link to='/'>Home</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to='/'>User</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to='/'>Make Topic</Link> 
                <Link to='/'>Logout</Link> 
                
                </DropdownItem>
               
                
              </DropdownMenu>
            </UncontrolledDropdown>
            
            </NavItem>
            </Nav>
          </Collapse>
          <NavItem className="nav">
            <Link to='/login' style={{color: 'black'}}>LOGIN</Link>
          </NavItem>
        </Navbar>

      </div>
    );
        }
export default NavBar;




