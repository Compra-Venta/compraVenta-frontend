import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

const ProfileNav = (props) => {
 const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const loggedIn = true;
  const handleLogoutClick = () => {
    props.logoutUser();
  }

  return (
    <div style={{boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
      <Navbar light expand='md' /*style={{marginBottom:'0px',marginTop:'0px',borderWidth:'medium'}}*/ className=' mr-0' style={{ padding:'0'}} >
        {/*{<div className='container'> }*/}
        <NavbarBrand  href="/" className="mr-auto" ><div className='col-sm-2'><img src='/assets/images/HeadLogo.png'height='40vh' width='40vh' style={{display:'inline-block',float:'left',maxHeight:'100%',width:'4vw',height:'4vw'}} /> </div><div style={{width:'100%',textAlign:'center',justifyContent:'center',verticalAlign:'center',marginTop:'auto'}} className='col-sm-3'> <h1 id='top' style={{fontSize:'3vw',alignContent:'center'}}>Compra Venta</h1></div></NavbarBrand>
        <NavbarToggler /*style={{backgroundColor: 'blue',marginRight:'40px',width:'7vw',height:'7vw'}}*/ onClick={toggleNavbar} className="me-0"/>
        <Collapse  isOpen={!collapsed} navbar>
          <Nav className='ml-auto col-md-7 justify-content-end' navbar style={{paddingRight:'0px',justifyItems:'right'}} >
            <NavItem>
              <NavLink style={{color:'black',fontSize:'1.4rem',paddingRight:'1vw'}}  href="/dashboard"><span  >Dashboard</span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'deepskyblue',fontSize:'1.4rem',paddingRight:'1vw'}}  href="/AboutUs">About Us </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'black',fontSize:'1.4rem',paddingRight:'1vw'}}  href="/collaborators"> Developers </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'black',fontSize:'1.4rem',paddingRight:'1vw'}}  href="/learn">Learn </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'red',fontSize:'1.4rem',paddingRight:'1vw'}} className='logoutt' onClick={handleLogoutClick} >Logout </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default ProfileNav;