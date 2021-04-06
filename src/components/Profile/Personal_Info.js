import React, { Component } from 'react'

export class Personal_Info extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             personal_data:{
                 name: 'Aseem Mangla',
                 email: 'aseemmangla.bt19ele@pec.edu.in',
                 country: 'India',
                 dob: '28-03-2001',
                 phone: '+91 9501421773'
             }
        }
    }
    

    render() {

        const personal_data = this.state.personal_data;

        // var person = Object.keys(personal_data).map()

        return (
            <div>
                <div>
                    {`Name: ${personal_data.name}`}
                    {`Country: ${personal_data.country}`}
                    {`Phone no: ${personal_data.phone}`}
                    {`DOB: ${personal_data.dob}`}
                    {`Email ID: ${personal_data.email}`}
                </div>
            </div>
        )
    }
}

export default Personal_Info
