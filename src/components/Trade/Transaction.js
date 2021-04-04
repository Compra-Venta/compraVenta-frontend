import React, { Component } from 'react'
import Buy_Market from './Buy_Market'
import Buy_Stoploss from './Buy_Stoploss'
import Sell_Market from './Sell_Market'
import Sell_Stoploss from './Sell_Stoploss'

export class Transaction extends Component {
    render() {
        return (
            <div>
                <Buy_Market/>
                <Sell_Market/>
                <Buy_Stoploss/>
                <Sell_Stoploss/>
            </div>
        )
    }
}

export default Transaction
