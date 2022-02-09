import React, { useState } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';
 import { Link } from 'react-router-dom'; 
 
function NavTab() {
  const[isOpen,setIsOpen]=useState(false)
  const toggle=()=>{
    setIsOpen(!isOpen);
  }
  return <div>
       <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Routing</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse style={{flexGrow:"unset"}} isOpen={isOpen}  navbar >
            <Nav className="ml-auto"  navbar >
              <NavItem>
             <NavLink ><Link style={{textDecoration:"none",color:"black"}}  to="/">Home</Link></NavLink> 
              </NavItem>
              <NavItem>
              <NavLink><Link  style={{textDecoration:"none",color:"black"}}to="/about">About Us</Link></NavLink>
              </NavItem>
              <NavItem>
              <NavLink><Link style={{textDecoration:"none",color:"black"}} to="/contact">Contact Us</Link></NavLink> 
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
  </div>;
}

export default NavTab;
