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
             },
             ws: new WebSocket('wss://stream.binance.com:9443/ws/!miniTicker@arr'),
             //symbol : ['ETHUSDT', 'BTCUSDT', 'ETHBTC', 'DOGEBTC', 'LTCBTC']
        }
        this.createwatchlist = this.createwatchlist.bind(this);
        this.check = this.check.bind(this);
    }
    
    createwatchlist = (symbol) => {
        
        //console.log('CoinPair',symbol)
        var checkP = this.state.prices
        //var newP = Object.keys(checkP).filter(symb => symbol.indexOf(symb)!==-1);
        for (const item of Object.keys(checkP)){
            //console.log('item',item)
            if (symbol.indexOf(item)===-1){
                //console.log('delete',item)
                delete checkP[item]
            }
        }
        this.setState({
            prices : checkP
        })
        //console.log('checkP',checkP);
        this.check();
       /* var socketUrl = 'wss://stream.binance.com:9443/ws/!miniTicker@arr';
        console.log(socketUrl)*/
        var binanceSocket=this.state.ws;
	    binanceSocket.onmessage = (event)=>{
		var res = JSON.parse(event.data)
		//console.log(res)
       res.filter((ticker)=> {
            if(symbol.find(sym => sym === ticker.s))
           {
               //console.log('sym',symbol)
            //    console.log(ticker.c)
            var prices = this.state.prices;
            //console.log('pp',prices)
            var prev_price;
            // console.log(prices)
            if(Object.keys(prices).find( (label, value) => label === ticker.s ))
            prev_price = prices[ticker.s].price;
            else
            prev_price = 0;
            prices[ticker.s] = {
                price: parseFloat(ticker.c).toPrecision(),
                color: ticker.c < prev_price? 'red' : 'green'
            }
            this.setState({
                prices: prices
            })
        }
       })
	}
    }

    check = () => {
        const ws  = this.state.ws;
        if (ws || ws.readyState === WebSocket.OPEN) {
            //console.log('connection check');
        } 
    };

    componentDidMount(){
        // console.log('w',this.props.array)
        this.createwatchlist(this.props.array);
        this.props.setClick(this.createwatchlist)
    }
    componentDidUpdate(prevProps){
        //console.log('hi i m updated')
        if (prevProps.array !== this.props.array) {
            // console.log('hi',this.props.array);
            this.createwatchlist(this.props.array);
          }
    }

    render() {
        
        const prices  = this.state.prices;

         //console.log('prices',prices);
         
         
        let watchlists = Object.keys(prices).map(( (label, value) => {
            // console.log(label, prices[label]);
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
