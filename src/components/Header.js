import React, { Component } from 'react';
import '../App.css'
import NavComp from './Navbar';
class Header extends Component {
    render() {
        return (
            <div /*className="jumbotron jumbotron-fluid text-center"*/ style={{backgroundColor:'white',marginTop:'0px',marginBottom:'0px',paddingBottom:'0px',boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                
                
                {/* <h1 id='top' style={{marginTop:0,fontSize:'3rem'}} className='bg-text'>Compra Venta</h1> */}
                 <div>
                 
                 {/*<div className='col-12' style={{color: 'teal',marginBottom:'0px',fontSize:'1.5rem'}}>-------- Give us a try....</div>*/}
                 {<NavComp/>}
                 </div>
                 </div>
                 
            
        );
    }
}

export default Header;