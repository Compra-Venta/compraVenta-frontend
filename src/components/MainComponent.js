import React, { Component } from 'react';
import Header from './Header';
import LandingPage from './LandingPage'
import Footer from './Footer';
import DashboardComponent from './DashboardComponent';
import Profile from './Profile/Profile';
import { Route, Switch, Redirect, withRouter } from 'react-router';
import { connect } from "react-redux";
import LearnCrypto from './LearnCrypto';
import  Learn  from "./Learn";
import Collaborators from './Collaborators';
import RouteGuard from "./RouteGaurd";
import { registerUser, fetchWatchlist, addToWatchlist, removeFromWatchlist, loginUser, logoutUser, getPrediction, newPassword, changePassword, fetchProfile, fetchWallet, fetchOpenTransaction, fetchClosedTransaction, cancelOrder, placeMarketOrder, resetAccount, placeStopOrder, verifyMail } from "../redux/actionCreaters";
import AboutUs from './AboutCompraVenta';

const mapDispatchToProps = (dispatch) => ({
    registerUser: (creds) => dispatch(registerUser(creds)),
    loginUser: (creds) => dispatch(loginUser(creds)),
    newPassword: (Email) => dispatch(newPassword(Email)),
    fetchWatchlist: () => dispatch(fetchWatchlist()),
    verifyMail: (Email) => dispatch(verifyMail(Email))

})

const mapStateToProps = (state) => {
    return {
        watchlist: state.watchlist,
        auth: state.auth,
        newPassword_status: state.newPassword_status,
        register: state.register,
        verifyMailStatus: state.verifyMailStatus
        
    }
}

class MainComponent extends Component {

    componentDidMount() {
        /* console.log('auth', this.props.auth)
        console.log('reg', this.props.register)

        if (this.props.auth.isAuthenticated) {
            this.props.fetchWatchlist()

        }
    console.log('main', this.props.watchlist) */
        //console.log('main auth', this.props.auth)
        //const reps= await this.props.watchlist
        /* try {
             const response = await this.props.watchlist;
             if (!response) {
               throw Error('failed');
             }
           } catch (error) {
             console.log(error);
           }*/
    }
    render() {
        /* const DashRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} component={(props) => (
                this.props.auth.isAuthenticated
                    ? <Component {...props} />
                    : <Redirect to={{
                        pathname: '/home',
                        state: { from: props.location }
                    }} />
            )} />
        ); */

        //console.log('m', this.props.watchlist)
        return (
            <div className="container-full-bg" >
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route path='/home'>
                        <Header />
                        <LandingPage
                            auth={this.props.auth} registerUser={this.props.registerUser} loginUser={this.props.loginUser}
                            verifyMail={this.props.verifyMail} verifyMailStatus={this.props.verifyMailStatus}
                            newPassword={this.props.newPassword} newPassword_status={this.props.newPassword_status} register={this.props.register} />
                        <Footer />
                    </Route>
                     {/* <Route path='/dashboard'> {/* component={() =>} <DashboardComponent
                        auth={this.props.auth} logoutUser={this.props.logoutUser}
                        fetchWatchlist={this.props.fetchWatchlist} addToWatchlist={this.props.addToWatchlist} removeFromWatchlist={this.props.removeFromWatchlist} watchlist={this.props.watchlist}
                        getprediction={this.props.getPrediction} prediction={this.props.prediction}
                        placeMarketOrder={this.props.placeMarketOrder} marketOrder={this.props.marketOrder}
                        placeStopOrder={this.props.placeStopOrder} stopOrder={this.props.stopOrder} />
                    </Route> */} 
                      <RouteGuard
                        exact
                        path='/dashboard'
                        isAuthenticated={this.props.auth.isAuthenticated}
                        redPath='/home'
                        component={DashboardComponent}
                        /* auth={this.props.auth} logoutUser={this.props.logoutUser}
                        fetchWatchlist={this.props.fetchWatchlist} addToWatchlist={this.props.addToWatchlist} removeFromWatchlist={this.props.removeFromWatchlist} watchlist={this.props.watchlist}
                        getprediction={this.props.getPrediction} prediction={this.props.prediction}
                        placeMarketOrder={this.props.placeMarketOrder} marketOrder={this.props.marketOrder}
                        placeStopOrder={this.props.placeStopOrder} stopOrder={this.props.stopOrder} */
                    />  



                   {/*  <Route path='/profile'>
                        <Profile
                            fetchClosedTransaction={this.props.fetchClosedTransaction} closedTransaction_info={this.props.closedTransaction_info}
                            fetchOpenTransaction={this.props.fetchOpenTransaction} openTransaction_info={this.props.openTransaction_info} cancelOrder={this.props.cancelOrder}
                            fetchProfile={this.props.fetchProfile} profile={this.props.profile}
                            fetchWallet={this.props.fetchWallet} wallet={this.props.wallet}
                            resetAccount={this.props.resetAccount}
                            changePassword={this.props.changePassword} changePassword_status={this.props.changePassword_status} />
                    </Route> */}
                    <RouteGuard
                        exact
                        path='/profile'
                        isAuthenticated={this.props.auth.isAuthenticated}
                        redPath='/home'
                        component={Profile}
                        />
                    <Route path='/learn'>
                        <Learn/>
                    </Route>
                    <Route path='/AboutUs'>
                        <AboutUs />
                    </Route>
                    <Route path='/collaborators'>
                        <Collaborators auth={this.props.auth} />
                    </Route>
                    <Redirect to='/home' />
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));