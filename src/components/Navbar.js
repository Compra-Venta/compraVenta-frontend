import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

const NavComp = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar light expand="md" style={{marginBottom:'0px',marginTop:'0px'}} >
        <NavbarBrand href="/" className="me-0" style={{display:'inline-block'}}><img src='/assets/images/logoN.png'height='200px' style={{display:'inline-block',float:'left'}}/> <div style={{width:'100%',textAlign:'center',justifyContent:'center'}}> <h1 id='top' style={{marginTop:'70px', fontSize:'3rem',alignContent:'center'}}>Compra Venta</h1></div></NavbarBrand>
        <NavbarToggler style={{backgroundColor: '#131A6C',marginRight:'40px'}} onClick={toggleNavbar} className="me-0"/>
        <Collapse  isOpen={!collapsed} navbar>
          <Nav className='ml-auto mr-2' navbar >
            <NavItem>
              <NavLink style={{color:'darkcyan',fontSize:'1.5rem'}}  href="/aboutus/"><span color='violet' >About us</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'darkcyan',fontSize:'1.5rem'}}  href="/contactus/">Contact Us </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'darkcyan',fontSize:'1.5rem'}}  href="/Collaborators/">Collaborators </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'darkcyan',fontSize:'1.5rem'}}  href="/faqs/">FAQs </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavComp;