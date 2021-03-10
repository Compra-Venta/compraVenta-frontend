import React, { Component } from 'react';
import Header from './Header';
import LandingPage from './LandingPage'
import Footer from './Footer';
class MainComponent extends Component {
    render() {
        return (
            <div className="container-full-bg" >
              <Header/>  
              <LandingPage/>
              <Footer/>
            </div>
        );
    }
}

export default MainComponent;