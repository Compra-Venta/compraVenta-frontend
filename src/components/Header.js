import React, { Component } from 'react';
import '../App.css'
import NavComp from './Navbar';
class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid text-center" style={{backgroundImage:`url('/assets/images/bg1.jpg')`,backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'100%',overflow:'hidden',marginBottom:'0px'}}>
                
                
                 <h1 id='top' style={{marginTop:0,fontSize:'3rem'}}/* className='bg-text'*/>Welcome to Compra Venta</h1>
                 <div>
                 
                 <div className='col-12' style={{color: 'teal',marginBottom:'0px',fontSize:'1.5rem'}}>-------- Give us a try....</div>
                 {<NavComp/>}
                 </div>
                 </div>
                 
            
        );
    }
}

export default Header;