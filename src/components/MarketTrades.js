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
        this.setupTradeSocket=this.setupTradeSocket.bind(this);
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

    setAlert = () => {
        alert(`${this.state.selectedValue}`)
    }

    setupTradeSocket = (category) =>{
        //this.check();
        var symbol = category.toLowerCase();
        //console.log('Category',category);
        var socketUrl = "wss://stream.binance.com:9443/ws/" + `${symbol}` + "@trade";
        //console.log(socketUrl);
        var binanceSocket = new WebSocket(socketUrl);
        binanceSocket.onmessage =(event) =>{
            var j = JSON.parse(event.data);
            // console.log(j)
            var ledger = this.state.ledger;
            var color = 'red';
            if(Object.keys(ledger).length > 15)
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
    check = (category) => {
        const ws  = this.state.ws;
        //console.log(ws);
        if (ws || ws.readyState == WebSocket.OPEN) {
            //console.log('connection check trade');

            ws.close();
        if(!ws|| ws.readyState == WebSocket.CLOSED){
            //console.log('connection close trade');
        }
    }
    this.setupTradeSocket(category);
    };
    componentDidMount()
    {
       //console.log(this.props.category);
        this.setupTradeSocket("BTCUSDT");
        /*this.setState({
            selectedValue: this.props.category
        })*/
    }
    /*shouldComponentUpdate(nextProps) {
        const differentCategory = this.props.category !== nextProps.category;
        //const differentDone = this.props.done !== nextProps.done
        return differentCategory;
    }*/


    render() {
        //this.setupTradeSocket(this.props.category);
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
                        {trade.price.substring(0,10)}
                    </div>
                    <div className='col-4 col-md-4'>
                        {parseFloat(trade.amount).toFixed(6)}
                    </div>
                    <div className='col-4 col-md-4'>
                        {trade.time}
                    </div>
                </div>
            )
        }))
            
        return (
            <>
            <div className='row' style={{color:'#969696',textAlign:'center' }}>
               
            <div className='col-4 col-md-4'>
                Price({this.props.category.slice(3)})
            </div>
            <div className='col-4 col-md-4'>
                Amount({this.props.category.slice(0,3)})
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