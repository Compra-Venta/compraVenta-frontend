import { Button } from 'reactstrap'
import React, { Component } from 'react'
import Account from './Account'
import Personal_Info from './Personal_Info'
import ProfileNav from './ProfileNav'
import Wallet from './Wallet'
import ChangePassword from './ChangePassword'
import Footer from '../Footer'

export class Profile extends Component {
    render() {
        return (
            <>
            <div><ProfileNav/></div>
            <div className='container-fluid'>
                <div className="row" style={{padding:'30px'}}><h2>Profile</h2></div>
                <div className='row' style={{marginLeft:'40px'}}>
                   <div className='col-12' style={{display:'inline-block'}}>
                    <h3>Personal Info</h3>
                    <hr/>
                    </div>
                    
                    <Personal_Info/>
                    <ChangePassword/>
                </div>
               
                <div className="row" style={{marginLeft:'40px',padding:'20px',paddingLeft:'0px',marginTop:'40px'}}>
                <div className='col-12'>
                   <h3>Account</h3>
                    <hr/>
                    </div>
                    <Account/>
                    <div>
                    <Button color="danger" size='md' style={{marginLeft:'30px'}}>Reset Account Details</Button>{' '}
                    </div>
                </div>

                <div className="row" style={{marginLeft:'40px',padding:'20px',paddingLeft:'0px',marginTop:'40px'}}>
                <div className='col-12'>
                   <h3>Wallet</h3>
                    <hr/>
                    </div>
                    <Wallet/>
                    <div>
                    <Button color="danger" size='md' style={{marginLeft:'30px'}}>Trade More Coins</Button>{' '}
                    </div>
                </div>
                <Footer/>
            </div>
            </>
        )
    }
}

export default Profile
