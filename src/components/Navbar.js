import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

const NavComp = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar dark>
        <NavbarBrand href="/" className="me-0"><img src='/assets/images/logoN.png'height='100px'/> </NavbarBrand>
        <NavbarToggler style={{backgroundColor: '#131A6C',marginRight:'40px'}} onClick={toggleNavbar} className="me-0"/>
        <Collapse  isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink style={{color:'darkcyan'}} href="/aboutus/"><span color='violet' >About us</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'darkcyan'}} href="/contactus/">Contact Us </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'darkcyan'}} href="/Collaborators/">Collaborators </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'darkcyan'}} href="/faqs/">FAQs </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavComp;