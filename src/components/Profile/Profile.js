import React, { Component } from 'react'
import Account from './Account'
import Personal_Info from './Personal_Info'

export class Profile extends Component {
    render() {
        return (
            <div>
                <div>
                    Personal Info
                    <Personal_Info/>
                </div>
                <div>
                    Account
                    <Account/>
                </div>
            </div>
        )
    }
}

export default Profile
