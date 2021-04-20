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
            <div className='container-fluid'>
                <div className='row' style={{padding:'10px',fontSize:'1.2rem'}}>
                    <div className='col-6'>{`Name: ${personal_data.name}`}</div>
                    <div className='col-6'>{`Country: ${personal_data.country}`}</div>
                 </div>   
                 <div className='row' style={{padding:'10px',fontSize:'1.2rem'}}>
                     <div className='col-6' style={{overflowWrap:'break-word'}}>{`Email ID: ${personal_data.email}`}</div>
                     <div className='col-6'>{`DOB: ${personal_data.dob}`}</div>
                  </div>
                  <div className='row' style={{padding:'10px',fontSize:'1.2rem'}}>
                      <div className='col-6'>{`Phone no: ${personal_data.phone}`}</div>  
                    
                    
                </div>
            </div>
        )
    }
}

export default Personal_Info
