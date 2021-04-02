import { price } from 'cryptocompare';
import React, { Component } from 'react';

class MarketTrades extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            selectedValue: 'BTCUSDT',
            ledger:[
            {
             price: '0',
             amount: '455',
             time: '12:05:42 A.M.',
             color: 'red'
            },
        ] ,
        ws:new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade')
        }
        // this.selectValue=this.selectValue.bind(this);
        // this.priceChange=this.priceChange.bind(this);
        this.setupSocket=this.setupSocket.bind(this);
        this.check=this.check.bind(this);
    }
    
    convertUnixDate = (Date) =>{
        return new Intl.DateTimeFormat(
            'en-US', { //year: 'numeric',
            // month: '2-digit',
            // day: '2-digit',
            hour: '2-digit',
            minute: '2-digit', 
            second: '2-digit' }).format(Date);
    }

    setupSocket = (category) =>{
        this.check();
        var symbol = category.toLowerCase();
        console.log('vvvvvvvvvvvvvvvvvvvvvvnnnnnn',category);
        var socketUrl = "wss://stream.binance.com:9443/ws/" + `${symbol}` + "@trade";
        console.log(socketUrl);
        var binanceSocket = new WebSocket(socketUrl);
        binanceSocket.onmessage =(event) =>{
            var j = JSON.parse(event.data);
            // console.log(j)
            var ledger = this.state.ledger;
            var color = 'red';
            if(Object.keys(ledger).length > 8)
            {
                ledger.shift();
                color = ledger[7].price > j.p ? 'red' : 'green' 
            }
            ledger.push(
                {
                price: j.p,
                amount: j.q,
                time: this.convertUnixDate(j.T),
                color: color
                }
            )               
            this.setState({
                ledger: ledger,
                ws: binanceSocket
            })
        }

    }
    check = () => {
        const ws  = this.state.ws;
        if (ws || ws.readyState == WebSocket.OPEN) {
            console.log('connection check');

            ws.close();
        if(!ws|| ws.readyState == WebSocket.CLOSED){
            console.log('connection close');
        }
        } 
    };
    componentDidMount()
    {
        this.setupSocket(this.props.category)
        this.setState({
            selectedValue: this.props.category
        })
    }



    render() {
        // const tradesArray = [
        //     {"price": 0.003551, "amount":0.98, "time":"12:05:42"},
        //     {"price": 0.003552, "amount":0.10, "time":"12:05:42"},
        //     {"price": 0.003551, "amount":0.99, "time":"12:05:42"},
        //     {"price": 0.003554, "amount":1.98, "time":"12:05:42"},
        //     {"price": 0.003554, "amount":0.22, "time":"12:05:42"},
        //     {"price": 0.003551, "amount":3.98, "time":"12:05:42"},
        //     {"price": 0.003549, "amount":2.28, "time":"12:05:42"},
        //     {"price": 0.003549, "amount":2.28, "time":"12:05:42"}
        // ]
        var count = 0;
        let tradeView = this.state.ledger.map((trade => {
            return (
                <div className='row'>
                    <div className='col-4 col-md-4' style={{color:trade.color}}>
                        {parseFloat(trade.price).toPrecision(8)}
                    </div>
                    <div className='col-4 col-md-4'>
                        {parseFloat(trade.amount).toPrecision(6)}
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