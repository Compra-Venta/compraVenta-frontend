import React, { Component } from 'react';
import Header from './Header';
import LandingPage from './LandingPage'
import Footer from './Footer';
import { LightweightChart } from './Chart';
import CryptoNewsFeed from './CryptoNewsFeed';
import DashboardComponent from './DashboardComponent';
class MainComponent extends Component {
    render() {
        return (
            <div className="container-full-bg" >
              {/*<Header/>  
              <LandingPage/>
              {/*<LightweightChart/>
              /*<CryptoNewsFeed/>
              <Footer/>*/}
              <DashboardComponent/>
            </div>
        );
    }
}

export default MainComponent;