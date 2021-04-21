import React, { Component } from 'react';
import ReactStars from 'react-rating-stars-component';
class Account extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             account_details:{
                 balance: '50000.0000',
                 rating: 3,
                 profit: '123.56',
                 accountId: '5gffytdtrdyytd85jhjg',
                 currentInvestment: '3526.2624'
             }
        }
    }
    

    render() {

        const account_details = this.state.account_details;

        // var person = Object.keys(account_details).map()

        return (
            <div className='container-fluid'>
                <div className='row' style={{padding:'10px',fontSize:'1.2rem'}}>
                    <div className='col-6'>{`Balance: ${account_details.balance}`}</div>
                    <div className='col-6'>
                        
                         Rating: &nbsp;
                        
                    <ReactStars count={account_details.rating} color="#ffd700" size={28} edit={false}/>
                        
                        </div>
                 </div>   
                 <div className='row' style={{padding:'10px',fontSize:'1.2rem'}}>
                     <div className='col-6' style={{color:'green'}}>{`Profit: ${account_details.profit}`}</div>
                     <div className='col-6'>{`Account ID: ${account_details.accountId}`}</div>
                  </div>
                  <div className='row' style={{padding:'10px',fontSize:'1.2rem'}}>
                      <div className='col-6'>{`Current Investment: ${account_details.currentInvestment}`}</div>  
                    
                    
                </div>
            </div>
        )
    }
}
export default Account
