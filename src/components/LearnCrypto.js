import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';
import Footer from './Footer';
import  LearnDash  from "./LearnDash";


export class LearnCrypto extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>
            <LearnDash/>
            <div className='container'>
               <div className='container-fluid'>
                    
                
                <div style={{paddingTop:'20px', fontSize:'2.1rem', color:'darkslateblue',fontWeight:500}}>
                    Welcome to CompraVenta Academy!
                </div>
                <div>
                    <p style={{fontFamily:'Helvetica Neue'}} className='cryC'>
                    Today’s world has advanced a lot in terms of cryptocurrency exchange or digital currency exchange and the main reason that these digital currencies are overtaking physical currency is that it is not governed by anyone single authority and is secure since it uses blockchain technology. It is becoming investors' choice to trade into cryptocurrencies. But since this concept is relatively new and many people fear to adapt to invest in cryptocurrency, it has still not reached its potential.
                    </p>
                </div>
                </div>
                <div style={{padding:'20px'}} className='quicklink container-fluid'>
                    <Navbar light expand='md' className=' mr-0'  >
                        {/* <NavbarBrand  href="/" className="mr-auto" >
                           
                            <div style={{width:'100%',textAlign:'center',justifyContent:'center',verticalAlign:'center',marginTop:'auto'}} className='col-sm-3'> 
                                <h1  style={{fontSize:'1.2rem',alignContent:'center',color:'white'}}>
                                    Quick Links</h1></div>
                        </NavbarBrand> */}
                
                <Nav className='ml-auto col-md-7 justify-content-end' navbar style={{paddingRight:'0px',justifyItems:'right'}} >
                    <NavItem style={{paddingRight:'2vw',whiteSpace:'nowrap'}} className='my-auto'>
                     
                                <h1 style={{fontSize:'1.2rem',alignContent:'center',color:'white'}}>
                                    Quick Links</h1>
                    </NavItem>
                    <NavItem className='qlinks text-center'>
                        <NavLink style={{color:'white',fontSize:'1.4rem',paddingRight:'2vw'}} className='me' href="#cryptocurrency">CryptoCurrency</NavLink>
                    </NavItem>
                    <NavItem className='qlinks'>
                        <NavLink style={{color:'white',fontSize:'1.4rem',paddingRight:'2vw'}}  href="#blockchain">BlockChain </NavLink>
                    </NavItem>
                    <NavItem className='qlinks'>
                        <NavLink style={{color:'white',fontSize:'1.4rem',paddingRight:'2vw'}}  href="#trading">Trading </NavLink>
                    </NavItem>
                    <NavItem className='qlinks'>
                        <NavLink style={{color:'white',fontSize:'1.4rem',paddingRight:'2vw'}}  href="#">CompraVenta </NavLink>
                    </NavItem>
                </Nav>
        </Navbar>
                    
                </div>
                <div id='cryptocurrency'>
                    <h2 style={{fontFamily:'cursive'}}>What is CryptoCurrency?</h2>
                    <p style={{fontFamily:'Helvetica Neue'}} className='cryC'>
                    A cryptocurrency is just like a digital form of cash. You can use it to pay friends for your share of the bar tab, buy that new pair of socks you've been eyeing up 👀, or book flights ✈️ and hotels 🏨 for your next holiday. Because cryptocurrency is digital, it can also be sent to friends and family anywhere in the world.
                    <br/>Just like PayTm or bank transfers, right?<br/>
                        Well, not really. It's way more interesting!
                        <br/>You see, traditional online payment gateways are owned by organizations. They hold your money for you, and you need to ask them to transfer it on your behalf when you want to spend it.
                        <br/>In cryptocurrencies, there isn't an organization. You, your friends, and thousands of others can act as your own banks by running free software. Your computer connects with other people's computers, meaning you communicate directly – no middlemen required!
                        <br/>So, this magical internet money isn't owned by anyone and uses cryptography to secure the system. But you've already got apps for paying people – why should you care?
                    </p>
                </div>
                <div id='blockchain'>

                </div>
                <div id='trading'>
                <h2 style={{fontFamily:'cursive'}}>Trading</h2>
                    <p style={{fontFamily:'Helvetica Neue'}} className='cryC'>
                    As you might have heard, blockchain and cryptocurrencies are already used in a lot of different areas. Undoubtedly, one of the biggest current use cases is speculation.
                    <br/>Trading generally implies a shorter-term approach to generating profit. Traders may jump in and out of positions all the time. But how do they know when to get in and out?
                    <br/>One of the most common ways to make sense of the cryptocurrency market is through an approach called technical analysis (TA). Technical analysts look at price history, charts, and other types of market data to find bets that have a good chance of returning a profit.
                    <br/>You must be dying to get started right away. And technically, you could. It's that easy! But, like most things worth pursuing, trading is hard! It would take us a long time to talk about all that you need to keep in mind.
                    </p>
                </div>
                <div id='dashboard'>
                    <h3 style={{fontFamily:'cursive'}}>Dashboard</h3>
                    <div style={{display:'flex'}}>
                    <img src='assets/images/learnPage/dashboard.png' style={{height:'60vh', width:'80%', borderStyle:'groove' }} />
                    <p style={{fontFamily:'Helvetica Neue'}} className='cryC my-auto'>
                        Here is the dashboard of our website where you will be doing everything related to trading. We will jump deeply explaining each component.
                    </p>
                    </div>
                </div>
               
            </div>
            <Footer/>
            </>
        )
    }
}

export default LearnCrypto
