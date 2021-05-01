import React, { Component } from 'react'

class BinancePrice extends Component {

    constructor(props) {
        super(props)
    
        
    }
    
    componentDidMount(){
        var ob =[];
        var category = this.props.category;
        var symbol = category.toLowerCase();
         
        const socketUrl = "wss://stream.binance.com:9443/ws/" + `${symbol}` + "@ticker"
        //console.log(socketUrl);
        var binanceSocket = new WebSocket(socketUrl);
        binanceSocket.onmessage = function (event) {
            ob = JSON.parse(event.data) ;
            //console.log(ob.p);
            
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
