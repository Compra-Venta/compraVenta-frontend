import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

const LearnDash = (props) => {
 const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const loggedIn = true;

  return (
    <div style={{boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
      <Navbar light expand='md' /*style={{marginBottom:'0px',marginTop:'0px',borderWidth:'medium'}}*/ className=' mr-0 fixed-nav-bar' style={{ padding:'0px',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)'}} >
        {/*{<div className='container'> }*/}
        <NavbarBrand  href="/" className="mr-auto" ><div className='col-sm-2'><img src='/assets/images/HeadLogo.png'height='40vh' width='40vh' style={{display:'inline-block',float:'left',maxHeight:'100%',width:'4vw',height:'4vw'}} /> </div><div style={{width:'100%',textAlign:'center',justifyContent:'center',verticalAlign:'center',marginTop:'auto'}} className='col-sm-3'> <h1 id='top' style={{fontSize:'3vw',alignContent:'center'}}>Compra Venta</h1></div></NavbarBrand>
        <NavbarToggler style={{backgroundColor: 'white'}} onClick={toggleNavbar} className="me-0"/>
        <Collapse  isOpen={!collapsed} navbar>
          <Nav className='ml-auto col-md-7 justify-content-end' navbar style={{paddingRight:'0px',justifyItems:'right'}} >
          <NavItem>
              <NavLink style={{color:'deepskyblue',fontSize:'1.4rem',paddingRight:'2vw'}}  href="/AboutUs">About Us </NavLink>
            </NavItem>
            <NavItem className='my-auto'>
              <NavLink style={{color:'black',fontSize:'1.4rem',paddingRight:'2vw'}} href="/collaborators">Developers</NavLink>
            </NavItem>
            
            <div className='getStarted'>
            <NavItem >
              <NavLink style={{color:'white',fontSize:'1.4rem',paddingRight:'1vw'}}  href="/home">Get Started</NavLink>
            </NavItem>
            </div>
            <NavItem>
              <div>&nbsp;&nbsp;&nbsp;</div>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default LearnDash;