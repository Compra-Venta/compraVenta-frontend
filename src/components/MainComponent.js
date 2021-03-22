import React, { Component } from 'react';
import Header from './Header';
import LandingPage from './LandingPage'
import Footer from './Footer';
import { LightweightChart } from './Chart';
class MainComponent extends Component {
    render() {
        return (
            <div className="container-full-bg" >
              <Header/>  
              <LandingPage/>
              {/*<LightweightChart/>*/}
              <Footer/>
            </div>
        );
    }
}

export default MainComponent;