import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';

export class Wallet extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             wallet: {
                'BTC': {
                    amount: '0.569',
                    total_investment: `465.432`,
                    total_profit: `103.4554`,
                    color: 'red'
                },
                'ETH': {
                    amount: '2.45549',
                    total_investment: `10695.432`,
                    total_profit: `145.4554`,
                    color: 'green'
                }
             }
        }
    }
    


    render() {
        const wallet = this.state.wallet;
        let wallet_info = Object.keys(wallet).map( (label, value) =>{
            return(
               <div className='container-fluid' >
                <div className='row' style={{padding:'10px',fontSize:'1.2rem'}}>
                    <div className='col'>
                        {`${label}`}
                    </div>
                    <div className='col'>
                        {`${wallet[label].amount}`}
                    </div>
                    <div className='col'>
                        {`${wallet[label].total_investment}`}
                    </div>
                    <div className='col' style={{color:wallet[label].color}}>
                        {`${wallet[label].total_profit}`}
                    </div>
        </div>
        </div>
            )
        } )

        return (
            <div className='container-fluid'>
            <div className='row' style={{padding:'10px',fontSize:'1.2rem', color: 'dodgerblue'}}>
                <div className='col'>
                    Coin
                </div>
                <div className='col'>
                    Amount
                </div>
                <div className='col'>
                   Invested
                </div>
                <div className='col'>
                   Profit Earned
                </div>
            </div>
            {wallet_info}
            </div>
        )
    }
}

export default Wallet
