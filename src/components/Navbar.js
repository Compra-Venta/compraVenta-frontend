import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

const NavComp = (props) => {
 const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const loggedIn = true;

  return (
    <>
    <div style={{boxShadow:'0px 0px 4px rgba(0, 0, 0, 0.25)'}}>
      <Navbar light expand='lg' /*style={{marginBottom:'0px',marginTop:'0px',borderWidth:'medium'}}*/ >
        {/*{<div className='container'> }*/}
        <NavbarBrand  href="/" className="mr-auto" >
          <div className='row'>
          <div style={{display:'flex'}}>
          <div className='col-sm-2'>
            <img src='/assets/images/HeadLogo.png'height='50vh' width='50vh' 
              style={{float:'left',maxHeight:'100%',width:'6vw',height:'6vw'}} /> 
          </div>
          <div style={{width:'100%',textAlign:'center',justifyContent:'center',verticalAlign:'center',marginTop:'auto'}} className='col-sm-2 my-auto'> 
          <h1 className='my-auto' id='top' style={{fontSize:'3.1vw',alignContent:'center'}}>Compra Venta</h1></div></div></div></NavbarBrand>
        
        <NavbarToggler /*style={{backgroundColor: 'blue',marginRight:'40px',width:'7vw',height:'7vw'}}*/ onClick={toggleNavbar} className="me-0"/>
        <Collapse  isOpen={!collapsed} navbar>
          <Nav className='ml-auto mr-2 col-sm-8' navbar style={{fontFamily:'Roboto', fontSize:'1.8rem'}} >
            <NavItem>
              <NavLink style={{color:'deepskyblue',paddingRight:'1vw'}}  href="/AboutUs">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'deepskyblue',paddingRight:'1vw'}}  href="mailto:teamcompraventa@gmail.com">Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'deepskyblue',paddingRight:'1vw'}}  href="/Collaborators">Developers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'deepskyblue',paddingRight:'1vw'}}  href="/learn">Learn</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        {/*</div>*/}
      </Navbar>
    </div>
    </>
  );
}

export default NavComp;