import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';

export class Wallet extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             wallet: {
                'BTC': {
                    balance: '0.56900000',
                    fixed_balance: `0.46543200`,
                    total_profit: `103.4554`,
                    color: 'red'
                },
                'ETH': {
                    balance: '2.45549000',
                    fixed_balance: `0.10695432`,
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
                        {`${wallet[label].balance}`}
                    </div>
                    <div className='col'>
                        {`${wallet[label].fixed_balance}`}
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
                    Balance
                </div>
                <div className='col'>
                   Fixed Balance
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
