import React, { Component } from 'react'

class BinancePrice extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             curency : ['btc', 'eth'],
             price: 0
        }
    }
    
    componentDidMount(){
        var ob =[];
        const socketUrl = "wss://stream.binance.com:9443/ws/" + this.state.curency[0] + "usdt@trade"
        var binanceSocket = new WebSocket(socketUrl);
        binanceSocket.onmessage = function (event) {
            ob = event.data;
            console.log(ob);
            
        }

    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default BinancePrice
