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
import { Route, Switch, Redirect ,withRouter} from 'react-router';
import { connect } from "react-redux";
import LearnCrypto from './LearnCrypto';
import Collaborators from './Collaborators';
import { registerUser, fetchWatchlist,addToWatchlist,removeFromWatchlist,loginUser,logoutUser} from "../redux/actionCreaters";

const mapDispatchToProps = (dispatch) => ({
    registerUser: (creds) => dispatch(registerUser(creds)),
    loginUser : (creds) => dispatch(loginUser(creds)),
    logoutUser : () => dispatch(logoutUser()),
    fetchWatchlist : () => dispatch(fetchWatchlist()),
    addToWatchlist : (symbol) => dispatch(addToWatchlist(symbol)),
    removeFromWatchlist : (symbol) => dispatch(removeFromWatchlist(symbol))

})

const mapStateToProps = (state) => {
    return {
        watchlist: state.watchlist,
        auth: state.auth
    }
}

class MainComponent extends Component {
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.fetchWatchlist()
            this.props.loginUser(JSON.parse(localStorage.getItem('creds')));
        }
    }
    render() {
        return (
            <div className="container-full-bg" >
                <Switch>
                <Route exact path="/">
                 <Redirect to="/home" />
                </Route>
                    <Route path='/home'>
                        <Header/>
                        <LandingPage auth={this.props.auth} registerUser={this.props.registerUser} loginUser={this.props.loginUser} logoutUser={this.props.logoutUser} />
                        <Footer/>
                    </Route>
                    <Route path='/dashboard'>
                        <DashboardComponent auth={this.props.auth} fetchWatchlist={this.props.fetchWatchlist} addToWatchlist={this.props.addToWatchlist} removeFromWatchlist={this.props.removeFromWatchlist} watchlist={this.props.watchlist} />
                    </Route>
                    <Route path='/profile'>
                        <Profile/>
                    </Route>
                    <Route path='/learn'>
                        <LearnCrypto/>
                    </Route>
                    <Route path='/collaborators'>
                        <Collaborators/>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));