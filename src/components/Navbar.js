import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

const NavComp = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar dark>
        <NavbarBrand href="/" className="me-0" style={{display:'inline-block'}}><img src='/assets/images/logoN.png'height='200px'/></NavbarBrand>
        <NavbarToggler style={{backgroundColor: '#131A6C',marginRight:'40px'}} onClick={toggleNavbar} className="me-0"/>
        <Collapse  isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink style={{color:'darkcyan',fontSize:'1.5rem'}} className='regB' href="/aboutus/"><span color='violet' >About us</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'darkcyan',fontSize:'1.5rem'}} className='regB' href="/contactus/">Contact Us </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'darkcyan',fontSize:'1.5rem'}} className='regB' href="/Collaborators/">Collaborators </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'darkcyan',fontSize:'1.5rem'}} className='regB' href="/faqs/">FAQs </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavComp;