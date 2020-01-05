import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBar = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>TOP CHAT</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>         
              <Link to='/' >Home</Link>
              <Link to='/userprofile'>User Profile</Link>
              <Link to='/board/create'>Make a Board</Link>
              <Link to='/user/login' >Login</Link>
              <Link to='/user/register' >Sign up</Link>      
          </Nav>      
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
