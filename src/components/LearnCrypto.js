import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';
import NavDash from './NavDashboard'


export class LearnCrypto extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <div>
                    <NavDash/>
                </div>
                <div style={{padding:'0px', fontSize:'2.1rem', color:'darkslateblue'}}>
                    Welcome to CompraVenta Academy!
                </div>
                <div>
                    <p style={{fontFamily:'calibri', fontSize:'1.1rem'}}>
                    Today’s world has advanced a lot in terms of cryptocurrency exchange or digital currency exchange and the main reason that these digital currencies are overtaking physical currency is that it is not governed by anyone single authority and is secure since it uses blockchain technology. It is becoming investors' choice to trade into cryptocurrencies. But since this concept is relatively new and many people fear to adapt to invest in cryptocurrency, it has still not reached its potential.
                    </p>
                </div>
                <div style={{padding:'3px' ,boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                    <Navbar light expand='md' className=' mr-0' style={{ padding:'0'}} >
                        <NavbarBrand  href="/" className="mr-auto" >
                            <div className='col-sm-2'>
                                <img src='/assets/images/HeadLogo.png'height='40vh' width='40vh' style={{display:'inline-block',float:'left',maxHeight:'100%',width:'4vw',height:'4vw'}} /> 
                            </div>
                            <div style={{width:'100%',textAlign:'center',justifyContent:'center',verticalAlign:'center',marginTop:'auto'}} className='col-sm-3'> 
                                <h1 id='top' style={{fontSize:'3vw',alignContent:'center'}}>
                                    Quick Links</h1></div>
                        </NavbarBrand>
                <NavbarToggler className="me-0"/>
                <Nav className='ml-auto col-md-7 justify-content-end' navbar style={{paddingRight:'0px',justifyItems:'right'}} >
                    <NavItem>
                        <NavLink style={{color:'blue',fontSize:'1.4rem',paddingRight:'2vw'}} className='me' href="#"><span color='violet' >CryptoCurrency</span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{color:'black',fontSize:'1.4rem',paddingRight:'2vw'}}  href="/faqs">BlockChain </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{color:'black',fontSize:'1.4rem',paddingRight:'2vw'}}  href="/profile">Trading </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{color:'black',fontSize:'1.4rem',paddingRight:'2vw'}}  href="/home">CompraVenta </NavLink>
                    </NavItem>
                </Nav>
                </Navbar>
                </div>
            </div>
        )
    }
}

export default LearnCrypto
