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
            <div className="container-fluid" style={{backgroundImage:`url('/assets/images/bg2.jpg')`,backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'100%',overflow:'hidden',width:'100%'}}>
                <div className="row landing" style={{paddingLeft:0,marginLeft:0}}   >
                    <div className="col-sm-5" style={{justifyContent:'left', }}>
                        <div className='row' style={{justifyContent:'center' }}>
                        <img src='/assets/images/Compra venta.png' alt="logo" className='logo-img img-fluid'/>
                        </div>
                        
                    </div>
                    <div className='col-sm-7' style={{display: "flex", justifyContent: "center", alignItems: "center"}}>{OpenSignup ? <SignUp onClick={this.handleSignIn}/> : <SignIn onClick={this.handleRegister}/>}</div>
                </div>
                <hr/>
                {/*<div className="row" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <h1>Project Description</h1>
                    <div>our project is a website based on a virtual trading platform which will provide
budding investors a platform to dive into the trading of cryptocurrencies without
having any fear of losing anything.</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>

        </div>*/}
        <div className='container-fluid col-12 text-center'>
                <h1 >Description</h1>
                <hr />
                <p className="content container-fluid">Our project is a website based on a virtual trading platform which will provide<br/>
budding investors a platform to dive into the trading of cryptocurrencies without<br/>
having any fear of losing anything.</p>
            </div>
            <div className="feature container-fluid col-12">
                <h2 className="feature-heading">Features</h2>
                <hr className="feature-line" />
                <div className="row offset-1 col-10">
                    <ul className="feature-content">
                        <li>User authentication</li>
                        <li>Virtual Trading</li>
                        <li>Real-time price updation</li>
                        <li>Price Prediction of Cryptocurrency</li>
                        <li>Latest News</li>
                        <li>User Support</li>
                    </ul>
                </div>
            </div>
                <hr/>
                
            </div>
        );
    }
}

export default LandingPage;