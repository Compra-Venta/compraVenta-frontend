import React, { Component } from 'react';
import Header from './Header';
import LandingPage from './LandingPage'
import Footer from './Footer';
import { LightweightChart } from './Chart';
import CryptoNewsFeed from './CryptoNewsFeed';
import DashboardComponent from './DashboardComponent';
import BinancePrice from './BinancePrice';
import Trading from './Trading';
import Watchlist from './Watchlist';
import MyTabs from './Tab';
import Profile from './Profile/Profile';
import { Route, Switch } from 'react-router';


class MainComponent extends Component {
    render() {
        return (
            <div className="container-full-bg" >
                <Switch>
                    <Route path='/home'>
                        <Header/>
                        <LandingPage/>
                        <Footer/>
                    </Route>
                    <Route path='/dashboard'>
                        <DashboardComponent/>
                    </Route>
                    <Route path='/profile'>
                        <Profile/>
                    </Route>
                </Switch>
              {/* <Header/>  
              <LandingPage/>
              <CryptoNewsFeed/>
              <Footer/> */}
              {/*<Transaction />*/}
              {/*<MyTabs/>*/}
               {/*<DashboardComponent/> */}
               {/*<Profile/>*/}
              {/* <BinancePrice/> */}
              {/* <Trading/> */}
             {/* <LightweightChart/> */}
             {/* <Watchlist/> */}
            </div>
        );
    }
}

export default MainComponent;