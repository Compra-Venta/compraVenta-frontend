import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

const NavComp = (props) => {
 const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const loggedIn = true;

  return (
    <div>
      <Navbar light expand='md' /*style={{marginBottom:'0px',marginTop:'0px',borderWidth:'medium'}}*/ className='{border-bottom border-primary} me' >
        {/*{<div className='container'> }*/}
        <NavbarBrand  href="/" className="mr-auto" >
          <div className='col-sm-2'>
            <img src='/assets/images/HeadLogo.png'height='100vh' width='100vh' 
              style={{display:'inline-block',float:'left',maxHeight:'100%',width:'7vw',height:'7vw'}} /> 
          </div>
          <div style={{width:'100%',textAlign:'center',justifyContent:'center',verticalAlign:'center',marginTop:'auto'}} className='col-sm-3'> 
          <h1 id='top' style={{fontSize:'3.5vw',alignContent:'center',paddingTop:'30%'}}>Compra Venta</h1></div></NavbarBrand>
        <NavbarToggler /*style={{backgroundColor: 'blue',marginRight:'40px',width:'7vw',height:'7vw'}}*/ onClick={toggleNavbar} className="me-0"/>
        <Collapse  isOpen={!collapsed} navbar>
          <Nav className='ml-auto mr-2 col-sm-7' navbar >
            <NavItem>
              <NavLink style={{color:'darkcyan',fontSize:'1.5vw',paddingRight:'2vw'}} className='me' href="/aboutus"><span color='violet' >About us</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'darkcyan',fontSize:'1.5vw',paddingRight:'2vw'}}  href="/contactus">Contact Us </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'darkcyan',fontSize:'1.5vw',paddingRight:'2vw'}}  href="/Collaborators">Collaborators </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'darkcyan',fontSize:'1.5vw',paddingRight:'2vw'}}  href="/faqs">FAQs </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        {/*</div>*/}
      </Navbar>
    </div>
  );
}

export default NavComp;