import React, { Component } from 'react'
import {Spinner} from 'reactstrap'

export class Personal_Info extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoading: true,
             errMess: null,
             personal_data:{
                 name: 'Aseem Mangla',
                 email: 'aseemmangla.bt19ele@pec.edu.in',
                 country: 'India',
                 age: 20,
                 phone: '+91 9501421773'
             }
        }
        this.setProfile = this.setProfile.bind(this)
    }
    
    setProfile = (profile) => {
            var personal_data = this.state.personal_data
            personal_data.name = profile.profile.name
            personal_data.age = profile.profile.age
            personal_data.country = profile.profile.country
            personal_data.email = profile.profile.email
            personal_data.phone = profile.profile.PhoneNo
            this.setState({
                isLoading: profile.isLoading,
                errMess: profile.errMess,
                personal_data: personal_data
            })
            console.log(this.state.personal_data)
    }

    componentDidMount = async () =>
    {
        await this.props.fetchProfile()
        this.setProfile(this.props.profile)
    }
    

    render() {

        const state = this.state
        const personal_data = state.personal_data;

        // var person = Object.keys(personal_data).map()

        return (
            <div className='container-fluid'>
                {
                    state.isLoading ?
                    <Spinner color='success' style={{textAlign:'center'}} />:
                    state.errMess == null ?
                    <>
                        <div className='row' style={{padding:'10px',fontSize:'1.2rem'}}>
                    <div className='col-6'>{`Name: ${personal_data.name}`}</div>
                    <div className='col-6'>{`Country: ${personal_data.country}`}</div>
                 </div>   
                 <div className='row' style={{padding:'10px',fontSize:'1.2rem'}}>
                     <div className='col-6' style={{overflowWrap:'break-word'}}>{`Email ID: ${personal_data.email}`}</div>
                     <div className='col-6'>{`Age: ${personal_data.age}`}</div>
                  </div>
                  <div className='row' style={{padding:'10px',fontSize:'1.2rem'}}>
                      <div className='col-6'>{`Phone no: ${personal_data.phone}`}</div>          
                </div>
                    </>:
                    <div style={{color:'red', textAlign:'center'}}><h2>{state.errMess.message}</h2></div>
                }
            </div>
        )
    }
}

export default Personal_Info
