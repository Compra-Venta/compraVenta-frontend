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
import { registerUser, fetchWatchlist,addToWatchlist,removeFromWatchlist,loginUser,logoutUser, getPrediction, newPassword} from "../redux/actionCreaters";

const mapDispatchToProps = (dispatch) => ({
    registerUser: (creds) => dispatch(registerUser(creds)),
    loginUser : (creds) => dispatch(loginUser(creds)),
    logoutUser : () => dispatch(logoutUser()),
    fetchWatchlist : () => dispatch(fetchWatchlist()),
    addToWatchlist : (symbol) => dispatch(addToWatchlist(symbol)),
    removeFromWatchlist : (symbol) => dispatch(removeFromWatchlist(symbol)),
    getPrediction : (info) => dispatch(getPrediction(info)),
    newPassword : (Email) => dispatch(newPassword(Email)),

})

const mapStateToProps = (state) => {
    return {
        watchlist: state.watchlist,
        auth: state.auth,
        prediction: state.prediction,
        newPassword_status: state.newPassword_status,
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
                        <LandingPage 
                        auth={this.props.auth} registerUser={this.props.registerUser} loginUser={this.props.loginUser} logoutUser={this.props.logoutUser} 
                        newPassword={this.props.newPassword} newPassword_status={this.props.newPassword_status} />
                        <Footer/>
                    </Route>
                    <Route path='/dashboard'>
                        <DashboardComponent 
                        auth={this.props.auth} 
                        fetchWatchlist={this.props.fetchWatchlist} addToWatchlist={this.props.addToWatchlist} removeFromWatchlist={this.props.removeFromWatchlist} watchlist={this.props.watchlist}
                        getprediction={this.props.getPrediction} prediction={this.props.prediction} />
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
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));