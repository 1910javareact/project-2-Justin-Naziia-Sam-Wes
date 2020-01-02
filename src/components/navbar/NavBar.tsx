import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const NavBar = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">TOP CHAT</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href='/'>Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href='/userprofile'>User Profile</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href='/'>Make a Topic</NavLink>
            </NavItem>
          
            <NavItem>
              <NavLink href='/user/login' >Login</NavLink>
            </NavItem>

          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}
export default NavBar;




