import React, { Component } from 'react';
import { UncontrolledAlert } from 'reactstrap';
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
        /*var binanceSocket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
        binanceSocket.onmessage = function (event) {
            console.log(event.data);
        }*/
        var OpenSignup;
        if (this.state.isLogging === false && this.state.isSigning === true){
            OpenSignup=true;
        }
        else if(this.state.isLogging === true && this.state.isSigning === false){
            OpenSignup=false;
        }
        //console.log('opensignup', OpenSignup)
        return (
            <div className="container-fluid" style={{height:'100%',overflow:'hidden',width:'100%',marginTop:'10px'}}>
                <UncontrolledAlert color='info'>It's never Late, Start learning Now!</UncontrolledAlert>
                <div className="row">
                    <div className="col-sm-6 text-center" >
                        
                        <img src='/assets/images/BodyLogo.png' alt="logo" className='img-fluid' style={{width:'auto'}}/>
                        
                        
                    </div>
                    <div className='col-sm-6 text-center' style={{display: "flex", justifyContent: "center", alignItems: "center", width:'100%'}}>
                        {OpenSignup ? <SignUp onClick={this.handleSignIn} registerUser={this.props.registerUser}/> :
                         <SignIn onClick={this.handleRegister} loginUser={this.props.loginUser} auth={this.props.auth}
                         newPassword={this.props.newPassword} newPassword_status={this.props.newPassword_status}/>}</div>
                </div>
               
        <div className='container' style={{display: "flex", justifyContent: "center", alignItems: "center", width:'100%'}}>
        <div className='container-fluid col-12 text-center'>
                <h1 >Why Compra Venta?</h1>
               
                <p className="content container-fluid" style={{color:'lightgray'}}>Our project is a website based on a virtual trading platform which will provide<br/>
budding investors a platform to dive into the trading of cryptocurrencies without<br/>
having any fear of losing anything.</p>
            </div>
            
              
            </div>
            
            </div>
        );
    }
}

export default LandingPage;