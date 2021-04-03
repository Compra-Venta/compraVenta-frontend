import { isUTCTimestamp } from 'lightweight-charts';
import React, { Component } from 'react'

export class Watchlist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             prices: {
                 'BTCUSDT':{
                 price: 555555,
                 color: 'red',
             }
             }
        }
    }
    
    createwatchlist = () => {
        var symbol =['ETHUSDT', 'BTCUSDT', 'ETHBTC', 'DOGEBTC', 'LTCBTC'];
        var ws = new WebSocket('wss://stream.binance.com:9443/ws/!miniTicker@arr')
	    ws.onmessage = (event)=>{
		var res = JSON.parse(event.data)
		// console.log(res)
       res.filter((ticker)=> {
            if(symbol.find(sym => sym == ticker.s))
           {
            //    console.log(ticker.c)
            var prices = this.state.prices;
            var prev_price;
            console.log(prices)
            if(Object.keys(prices).find( (label, value) => label == ticker.s ))
            prev_price = prices[ticker.s].price;
            else
            prev_price = 0;
            prices[ticker.s] = {
                price: ticker.c,
                color: ticker.c < prev_price? 'red' : 'green'
            }
            this.setState({
                prices: prices
            })
        }
       })
	}
    }

    componentDidMount(){
        this.createwatchlist();
    }

    render() {

        const prices  = this.state.prices;

        console.log(prices);
        let watchlists = Object.keys(prices).map(( (label, value) => {
            console.log(label, prices[label]);
            return (
                <div className='row'>
                    <div className='col-4 col-md-4' style={{color: prices[label].color}} >
                        {label}
                    </div>
                    <div className='col-4 col-md-4' style={{color: prices[label].color}} >
                        {prices[label].price}
                    </div>
                </div>
            )
        }))

        return (
            <div>
                {watchlists}
            </div>
        )
    }
}

export default Watchlist
