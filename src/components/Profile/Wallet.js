import React, { Component } from 'react'
import {Button, Spinner, Table } from 'reactstrap';
import ReactStars from 'react-rating-stars-component'
import { walletFailed } from '../../redux/actionCreaters';

export class Wallet extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoading: true,
             errMess: null,
             profit:0,
             rating: 0,
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
        //console.log('wallet info',wallet_info)
        var wallet = this.state.wallet
        if(wallet_info.errMess ==null && wallet_info.isLoading==false) {
        for ( let i in wallet)
        {
            var bal = {'balance': wallet_info.wallet.balance[i], 'fixed_balance': wallet_info.wallet.fixed_balance[i]}
            wallet[i] = bal
        }
        const profit = (parseFloat(wallet_info.wallet.profit) - 50000 ).toPrecision(8);
        const rating = profit<= 0 ? 0 : profit < 1000 ? 1 : profit < 2000 ? 2 : profit < 3500 ? 3 : profit <= 5000 ? 4 : parseInt(profit)/1000
    
        this.setState({
            isLoading: wallet_info.isLoading,
            errMess: wallet_info.errMess,
            profit: (parseFloat(wallet_info.wallet.profit) - 50000 ).toPrecision(8),
            rating: rating,
            wallet: wallet
        })}

    }

    componentDidMount = async () => {
        await this.props.fetchWallet()
        this.setWallet(this.props.wallet)
    }
    componentDidUpdate(prevProps){
        if (prevProps.wallet!==this.props.wallet){
            this.setWallet(this.props.wallet)
        }
    }

    render() {
        /* if (typeof this.props.wallet!=='undefined'){
            this.setWallet(this.props.wallet)
        } */
        const state = this.state;
        //console.log(state);
        const wallet = state.wallet;
        // const wallet=this.setWallet(Wallet)
        let wallet_info = Object.keys(wallet).map( (label, value) =>{
            return(
                <tr>
                    <th>{`${label}`}</th>
                    <th>{ wallet[label].balance > 0.00000001 ? `${parseFloat(wallet[label].balance).toPrecision(8)}` : parseFloat(0).toPrecision(8) }</th>
                    <th>{ wallet[label].fixed_balance > 0.00000001 ? `${parseFloat(wallet[label].fixed_balance).toPrecision(8)}` : parseFloat(0).toPrecision(8) }</th>
                </tr>
        //        <div className='container-fluid' >
        //         <div className='row' style={{padding:'10px',fontSize:'1.2rem'}}>
        //             <div className='col'>
        //                 {`${label}`}
        //             </div>
        //             <div className='col'>
        //                 { wallet[label].balance > 0.00000001 ? `${parseFloat(wallet[label].balance).toPrecision(8)}` : parseFloat(0).toPrecision(8) }
        //             </div>
        //             <div className='col'>
        //                 { wallet[label].fixed_balance > 0.00000001 ? `${parseFloat(wallet[label].fixed_balance).toPrecision(8)}` : parseFloat(0).toPrecision(8) }
        //             </div>
                    
        // </div>
        // </div>
            )
        } )

        return (
            <div className='container-fluid'>
                {
                    state.isLoading ?
                    <Spinner type='grow' color='success' style={{textAlign:'center'}} />:
                    state.errMess == null ?
                    <>
                    <div className='row' padding='10%'>
                        <Button disabled color={'info'} >Assets Earned: $ {state.profit} </Button> 
                        <Button disabled style={{marginLeft:'1%', display:'flex', alignItems:'center'}} color={state.profit >=0 ? 'success' : 'danger'}>Rating: {state.rating <= 0 ? '0' : null} <ReactStars count={state.rating} color="#ffd700" size={25} edit={false}/></Button>
                    </div>
                    <div className='table-container'>
                    <Table hover responsive style={{textAlign:'center'}} >
                        <thead>
                            <tr style={{color:'deepskyblue'}}>
                                <th>Coin</th>
                                <th>Balance</th>
                                <th>Fixed Balance</th>
                            </tr>
                        </thead>
                        <tbody >
                            {wallet_info}
                        </tbody>
                    </Table>
                    </div>
                    </>: state.errMess.message=="Cannot read property 'json' of undefined" ?<div>Plz refresh the page </div> :
                    <div style={{color:'red', textAlign:'center'}}><h2>{state.errMess.message}</h2></div>
                }
                
            </div>
        )
    }
}

export default Wallet
