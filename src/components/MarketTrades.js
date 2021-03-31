import React, { Component } from 'react';

class MarketTrades extends Component {
    render() {
        const tradesArray = [
            {"price": 0.003551, "amount":0.98, "time":"12:05:42"},
            {"price": 0.003552, "amount":0.10, "time":"12:05:42"},
            {"price": 0.003551, "amount":0.99, "time":"12:05:42"},
            {"price": 0.003554, "amount":1.98, "time":"12:05:42"},
            {"price": 0.003554, "amount":0.22, "time":"12:05:42"},
            {"price": 0.003551, "amount":3.98, "time":"12:05:42"},
            {"price": 0.003549, "amount":2.28, "time":"12:05:42"},
            {"price": 0.003549, "amount":2.28, "time":"12:05:42"}
        ]
        let tradeView = tradesArray.map((trade => {
            return (
                <div className='row'>
                    <div className='col-4 col-md-4'>
                        {trade.price}
                    </div>
                    <div className='col-4 col-md-4'>
                        {trade.amount}
                    </div>
                    <div className='col-4 col-md-4'>
                        {trade.time}
                    </div>
                </div>
            )
        }))
        return (
            <>
            <div className='row' style={{color:'#969696'}}>
               {/* <table class="table table-borderless 'table-responsive-sm'" style={{padding:'0px',margin:'0px'}}>
                    <thead style={{padding:'0px',margin:'0px'}}>
                    <tr style={{color:'#969696',padding:'0px',margin:'0px'}}>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>0.003551</td>
                        <td>0.98</td>
                        <td>12:05:42</td>
                    </tr>
                    <tr>
                        <td>0.003552</td>
                        <td>0.10</td>
                        <td>12:05:42</td>
                    </tr>
                    <tr>
                        <td>0.003554</td>
                        <td>0.99</td>
                        <td>12:05:42</td>
                    </tr>
                    <tr>
                        <td>0.003554</td>
                        <td>0.99</td>
                        <td>12:05:42</td>
                    </tr>
                    <tr>
                        <td>0.003551</td>
                        <td>3.98</td>
                        <td>12:05:42</td>
                    </tr>
                    <tr>
                        <td>0.003549</td>
                        <td>0.22</td>
                        <td>12:05:42</td>
                    </tr>
                    <tr>
                        <td>0.003551</td>
                        <td>2.28</td>
                        <td>12:05:42</td>
                    </tr>
                    <tr>
                        <td>0.003549</td>
                        <td>2.28</td>
                        <td>12:05:42</td>
                    </tr>
                    </tbody>
        </table>*/}
        <div className='col-4 col-md-4'>
                        Price
        </div>
        <div className='col-4 col-md-4'>
            Amount
        </div>
        <div className='col-4 col-md-4'>
            Time
        </div>

            </div>
            {tradeView}
            </>
        );
    }
}

export default MarketTrades;