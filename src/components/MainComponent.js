import React, { Component } from 'react';
import Header from './Header';
import LandingPage from './LandingPage'
import Footer from './Footer';
import DashboardComponent from './DashboardComponent';
import Profile from './Profile/Profile';
import { Route, Switch, Redirect ,withRouter} from 'react-router';
import { connect } from "react-redux";
import LearnCrypto from './LearnCrypto';
import Collaborators from './Collaborators';
import { registerUser, fetchWatchlist,addToWatchlist,removeFromWatchlist,loginUser,logoutUser, getPrediction, newPassword, changePassword, fetchProfile, fetchWallet, fetchOpenTransaction, fetchClosedTransaction, cancelOrder} from "../redux/actionCreaters";

const mapDispatchToProps = (dispatch) => ({
    registerUser: (creds) => dispatch(registerUser(creds)),
    loginUser : (creds) => dispatch(loginUser(creds)),
    logoutUser : () => dispatch(logoutUser()),
    fetchWatchlist : () => dispatch(fetchWatchlist()),
    addToWatchlist : (symbol) => dispatch(addToWatchlist(symbol)),
    removeFromWatchlist : (symbol) => dispatch(removeFromWatchlist(symbol)),
    getPrediction : (info) => dispatch(getPrediction(info)),
    newPassword : (Email) => dispatch(newPassword(Email)),
    changePassword: (info) => dispatch(changePassword(info)),
    fetchProfile: () => dispatch(fetchProfile()),
    fetchWallet: () => dispatch(fetchWallet()),
    fetchOpenTransaction: () => dispatch(fetchOpenTransaction()),
    fetchClosedTransaction: () => dispatch(fetchClosedTransaction()),
    cancelOrder: (info) => dispatch(cancelOrder()),
})

const mapStateToProps = (state) => {
    return {
        watchlist: state.watchlist,
        auth: state.auth,
        prediction: state.prediction,
        newPassword_status: state.newPassword_status,
        changePassword_status: state.changePassword_status,
        profile: state.profile,
        wallet: state.wallet,
        openTransaction_info: state.openTransaction_info,
        closedTransaction_info: state.closedTransaction_info,
        
    }
}

class MainComponent extends Component {
    
    componentDidMount() {
        console.log('auth',this.props.auth.isAuthenticated)
        if (this.props.auth.isAuthenticated) {
            this.props.fetchWatchlist()
            
        }
        console.log('main',this.props.watchlist)
        console.log('main auth',this.props.auth)
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
        /*const DashRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
                this.props.auth.isAuthenticated
                    ? <Component {...props} />
                    : <Redirect to={{
                        pathname: '/home',
                        state: { from: props.location }
                    }} />
            )} />
        );*/

        console.log('m',this.props.watchlist)
        return (
            <div className="container-full-bg" >
                <Switch>
                <Route exact path="/">
                 <Redirect to="/home" />
                </Route>
                    <Route path='/home'>
                        <Header/>
                        <LandingPage 
                        auth={this.props.auth} registerUser={this.props.registerUser} loginUser={this.props.loginUser} logoutUser={this.props.logoutUser} 
                        newPassword={this.props.newPassword} newPassword_status={this.props.newPassword_status} />
                        <Footer/>
                    </Route>
                    <Route path='/dashboard'>{ /*component={() =>*/}<DashboardComponent auth={this.props.auth} fetchWatchlist={this.props.fetchWatchlist} addToWatchlist={this.props.addToWatchlist} removeFromWatchlist={this.props.removeFromWatchlist} watchlist={this.props.watchlist} logoutUser={this.props.logoutUser} getprediction={this.props.getPrediction} prediction={this.props.prediction}/>
                    </Route>
                        
                    
                    <Route path='/profile'>
                        <Profile 
                        fetchClosedTransaction={this.props.fetchClosedTransaction} closedTransaction_info={this.props.closedTransaction_info}
                        fetchOpenTransaction={this.props.fetchOpenTransaction} openTransaction_info={this.props.openTransaction_info} cancelOrder={this.props.cancelOrder}
                        fetchProfile={this.props.fetchProfile} profile={this.props.profile}
                        fetchWallet={this.props.fetchWallet} wallet={this.props.wallet}
                        changePassword={this.props.changePassword} changePassword_status={this.props.changePassword_status} />
                    </Route>
                    <Route path='/learn'>
                        <LearnCrypto/>
                    </Route>
                    <Route path='/collaborators'>
                        <Collaborators/>
                    </Route>
                    <Redirect to='/home'/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));