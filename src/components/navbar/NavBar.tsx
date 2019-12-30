import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarBrand, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';

// const NavBar = (props:any) => {
//   const [collapsed, setCollapsed] = useState(true);

//   const toggleNavbar = () => setCollapsed(!collapsed);
  const NavBar = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

    return (
      <div id= "headmenu">
        <Navbar style={{backgroundColor: '#6699cc'}} light expand="md">
        {/* <Nav className="navbar navbar-light" style={{backgroundColor: 'blue'}}> */}
          {/* <input style={{backgroundColor: 'blue'}} type="text" /> */}
          
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
                    {/* change the path */}
                <Link to='/users/display'>Home</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to='/usersbyid'>User</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to='/usersupdate'>Make Topic</Link> 
                <Link to='/usersupdate'>Logout</Link> 
                
                </DropdownItem>
               
                
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret right>
                Reimbursement
              </DropdownToggle>
              <DropdownMenu right>
              <DropdownItem>
                <Link to='/reimbursement/user'>Reimbursement By User</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to='/reimbursement/status/'>Reimbursement By Status</Link>
                </DropdownItem>   
                <DropdownItem>
                  <Link to='/reimbursement/update/'>Update Reimbursement</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/reimbursement/new'>New Reimbursement</Link>
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

  
        <br />
  
  
      </div>
    );
}

export default NavBar;

  