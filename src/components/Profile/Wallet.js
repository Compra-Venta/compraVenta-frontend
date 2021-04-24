import React, { Component } from 'react'
import { Spinner } from 'reactstrap';
import { walletFailed } from '../../redux/actionCreaters';

export class Wallet extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoading: true,
             errMess: null,
             wallet: {
                 USDT:{},
                 BTC: {},
                 ETH: {},
                 LTC: {},
                 XRP: {},
                 BNB: {}
              }
        }
        this.setWallet = this.setWallet.bind(this)
    }
    
    setWallet = (wallet_info) => {
    
        var wallet = this.state.wallet
        if(wallet_info.errMess ==null) 
        for ( let i in wallet)
        {
            var bal = {'balance': wallet_info.wallet.balance[i], 'fixed_balance': wallet_info.wallet.fixed_balance[i]}
            wallet[i] = bal
        }
    
        this.setState({
            isLoading: wallet_info.isLoading,
            errMess: wallet_info.errMess,
            wallet: wallet
        })

    }

    componentDidMount = async () => {
        await this.props.fetchWallet()
        this.setWallet(this.props.wallet)
    }

    render() {
        const state = this.state;
        const wallet = state.wallet;
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
                    
        </div>
        </div>
            )
        } )

        return (
            <div className='container-fluid'>
                {
                    state.isLoading ?
                    <Spinner color='success' style={{textAlign:'center'}} />:
                    state.errMess == null ?
                    <>
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
                    </div>
                    {wallet_info}
                    </>:
                    <div style={{color:'red', textAlign:'center'}}><h2>{state.errMess.message}</h2></div>
                }
            </div>
        )
    }
}

export default Wallet
