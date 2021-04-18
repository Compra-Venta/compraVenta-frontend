import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

const LearnDash = (props) => {
 const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const loggedIn = true;

  return (
    <div style={{boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',backgroundColor:'black'}}>
      <Navbar light='false' expand='md' /*style={{marginBottom:'0px',marginTop:'0px',borderWidth:'medium'}}*/ className=' mr-0' style={{ padding:'0px'}} >
        {/*{<div className='container'> }*/}
        <NavbarBrand  href="/" className="mr-auto" ><div className='col-sm-2'><img src='/assets/images/HeadLogoLearn.png'height='40vh' width='40vh' style={{display:'inline-block',float:'left',maxHeight:'100%',width:'4vw',height:'4vw'}} /> </div><div style={{width:'100%',textAlign:'center',justifyContent:'center',verticalAlign:'center',marginTop:'auto'}} className='col-sm-3'> <h1 id='top' style={{fontSize:'3vw',alignContent:'center',color:'gold'}}>Compra Venta</h1></div></NavbarBrand>
        <NavbarToggler /*style={{backgroundColor: 'blue',marginRight:'40px',width:'7vw',height:'7vw'}}*/ onClick={toggleNavbar} className="me-0"/>
        <Collapse  isOpen={!collapsed} navbar>
          <Nav className='ml-auto col-md-7 justify-content-end' navbar style={{paddingRight:'0px',justifyItems:'right'}} >
            <NavItem>
              <NavLink style={{color:'white',fontSize:'1.4rem',paddingRight:'2vw'}} href="/collaborators">Collaborators</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'white',fontSize:'1.4rem',paddingRight:'2vw'}}  href="/faqs">FAQs </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'white',fontSize:'1.4rem',paddingRight:'2vw'}}  href="/aboutus">About Us </NavLink>
            </NavItem>
            <div className='getStarted'>
            <NavItem>
              <NavLink style={{color:'white',fontSize:'1.4rem',paddingRight:'2vw'}}  href="/home">Get started</NavLink>
            </NavItem>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default LearnDash;