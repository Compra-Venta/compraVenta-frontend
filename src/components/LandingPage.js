import React, { Component } from 'react';
import {Image} from '../images/Screenshot__305_-removebg-preview.png'
import SignIn from './SignIn';
import SignUp from './SignUp';
class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLogging:true,
            isSigning:false
        }
        this.handleRegister=this.handleRegister.bind(this);
        this.handleSignIn=this.handleSignIn.bind(this);
    
    }
    handleRegister (){
        this.setState({
            isLogging: !this.state.isLogging,
            isSigning: !this.state.isSigning
        })
        console.log(this.state.isSigning,this.state.isLogging)
    }
    handleSignIn (){
        this.setState({
            isLogging: !this.state.isLogging,
            isSigning: !this.state.isSigning
        })
        console.log(this.state.isSigning,this.state.isLogging)
    }
    
    render() {
        var OpenSignup;
        if (this.state.isLogging==false && this.state.isSigning==true){
            OpenSignup=true;
        }
        else if(this.state.isLogging==true && this.state.isSigning==false){
            OpenSignup=false;
        }
        console.log('opensignup', OpenSignup)
        return (
            <div className="container" /*style={{backgroundImage:`url('/assets/images/ezgif.com-gif-maker.jpg')`,backgroundSize:'cover'}}*/>
                <div className="row landing" style={{paddingLeft:0,marginLeft:0}}   >
                    <div className="col-sm-5" style={{justifyContent:'left', }}>
                        <div className='row' style={{justifyContent:'center' }}>
                        <img src='/assets/images/Compra venta.png' alt="logo" className='logo-img img-fluid'/>
                        </div>
                        
                    </div>
                    <div className='col-sm-7' style={{display: "flex", justifyContent: "center", alignItems: "center"}}>{OpenSignup ? <SignUp onClick={this.handleSignIn}/> : <SignIn onClick={this.handleRegister}/>}</div>
                </div>
                <hr/>
                <div className="row" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <h1>Project Description</h1>
                </div>
                <hr/>
                
            </div>
        );
    }
}

export default LandingPage;