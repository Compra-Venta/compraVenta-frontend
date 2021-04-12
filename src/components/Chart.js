import * as React from 'react';
import { createChart,CrosshairMode, PriceScaleMode } from 'lightweight-charts';
import axios from 'axios'

export class LightweightChart extends React.Component {
    
	constructor(props) {
		super(props);
		this.state = {
			ws: new WebSocket(`wss://stream.binance.com:9443/ws/BTCUSDT@kline_1m`)
		}
		this.makeChart=this.makeChart.bind(this);
	}
	
    static defaultProps = {
		containerId: 'lightweight_chart_container',
	};

    chart = null;

	 calculateSMA = (data, count) =>{
		 console.log("sma")
		var avg = (data) => {
		  var sum = 0;
		  for (var i = 0; i < data.length; i++) {
			 sum += data[i].close;
		  }
		  return sum / data.length;
		};
		var result = [];
		for (var i=count - 1, len=data.length; i < len; i++){
		  var val = avg(data.slice(i - count + 1, i));
		  result.push({ time: data[i].time, value: val});
		}
		return result;
	  }


	// createData = async () => {
	// 	var data = [];
          
    //     await axios.get(`https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&endTime=${Date.now()}&limit=10000`)//&endTime=1614725621000
    //     .then( res=>{
    //         var candle = res.data;
    //          for ( let i =0; i< 1000 ;i++)
	// 		 {
	// 			 var date = this.convertUnixDate(candle[i][0]);
	// 			//  var time = `${date.slice(6,10)}-${date.slice(0,2)}-${date.slice(3,5)}`
	// 			var time =
	// 			{day: parseInt(date.slice(3,5)) ,
	// 			month: parseInt(date.slice(0,2)),
	// 			year: parseInt(date.slice(6,10))}
	// 			data.push(
	// 				{
	// 					// time: time,
	// 					time:candle[i][0]/1000,
	// 					// time: this.convertUnixDate(candle[i][0]), 
	// 					open:  candle[i][1], 
	// 					 high: candle[i][2], 
	// 					 low:  candle[i][3], 
	// 					 close:candle[i][4]
	// 				})
	// 		 };
    //         console.log(candle)
    //     } )
    //     .catch(error =>{
    //         alert(error)
    //         this.setState({errormsg:'Error Retreiving Data'})
      
    //       })
	// 	  console.log(Date.now())
    //     console.log('Data', typeof(data) ,data)
	// 	return data;

	// };
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
 
    makeChart = async (symbol, interval) =>{
		console.log('symbol',symbol,'interval',interval)
		console.log(this.chart !== null)
		if (this.chart !== null) {
			this.chart.remove();
			this.chart = null;
		}

		const props = this.props;

        const chart = createChart(this.props.containerId, {
		width: 820,
  		height: 380,
	layout: {
		backgroundColor: 'white',
		textColor: 'lightgray',
	},
	grid: {
		vertLines: {
			color: 'rgba(197, 203, 206, 0.5)',
		},
		horzLines: {
			color: 'rgba(197, 203, 206, 0.5)',
		},
	},
	crosshair: {
		mode: CrosshairMode.Magnet,
	},
	rightPriceScale: {
		borderColor: 'rgba(197, 203, 206, 0.8)',
	},
	timeScale: {
		borderColor: 'rgba(197, 203, 206, 0.8)',
	},
	
});
/*chart.applyOptions({
    priceScale: {
        position: 'right',
        mode: PriceScaleMode.Normal,
        autoScale: true,
        invertScale: false,
        alignLabels: false,
        borderVisible: false,
        borderColor: '#555ffd',
        scaleMargins: {
            top: 0.30,
            bottom: 0.25,
        },
    },
	priceFormat: {
        precision:6,
        minMove: 0.000001,
    },
	
});*/
	chart.resize(730,390);
	var candleSeries = chart.addCandlestickSeries({
  		upColor: 'green',
  		downColor: 'red',
  		// borderDownColor: 'rgba(255, 144, 0, 1)',
  		// borderUpColor: 'rgba(255, 144, 0, 1)',
  		wickDownColor: 'red',
		wickUpColor: 'green',

	});

	chart.applyOptions({
		priceScale: {
			position: 'right',
			mode: symbol.slice(-1) == 'T' ? 1:2,
			autoScale: true,
			invertScale: false,
			alignLabels: true,
			borderVisible: true,
			borderColor: 'black',
			// scaleMargins: {
			// 	top: 0.30,
			// 	bottom: 0.25,
			// },
		},
	});

// var sampledata = [
// 	{ time: '2018-10-19', open: 180.34, high: 180.99, low: 178.57, close: 179.85 },
// 	{ time: '2019-05-24', open: 192.54, high: 193.86, low: 190.41, close: 193.59 },
// // ];
var data = [];

		//var symbol = props.coinpair;
        await axios.get(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&endTime=${Date.now()}&limit=10000`)//&endTime=1614725621000
        .then( res=>{
            var candle = res.data;
             for ( let i =0; i< 1000 ;i++)
			 {
				data.push(
					{
						// time: time,
						time:candle[i][0]/1000,
						// time: this.convertUnixDate(candle[i][0]), 
						open:  candle[i][1], 
						 high: candle[i][2], 
						 low:  candle[i][3], 
						 close:candle[i][4]
					})
			 };
            console.log(candle)
        } )
        .catch(error =>{
            // alert(error)
            this.setState({errormsg:'Error Retreiving Data'})
      
          })
console.log('Data ',data)
candleSeries.setData(data);

var smaData = this.calculateSMA(data, 1000);
var smaLine = chart.addLineSeries({
	color: 'rgba(4, 111, 232, 1)',
	lineWidth: 2,
});
smaLine.setData(smaData);
	this.check();
	//var category= symbol.toLowerCase()
	var ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${interval}`)
	ws.onmessage = (event)=>{
		
		var message  = JSON.parse(event.data);

		var candlestick = message.k;
		console.log(candlestick);
		this.setState({
			ws:ws
		})
		candleSeries.update({
			time: candlestick.t /1000,
			// time: Date.now(),
			open: candlestick.o,
			high: candlestick.h,
			low: candlestick.l,
			close: candlestick.c
		});
		// smaLine.update(this.calculateSMA({
		// 	// time: candlestick.t,
		// 	time: Date.now(),
		// 	open: candlestick.o,
		// 	high: candlestick.h,
		// 	low: candlestick.l,
		// 	close: candlestick.c
		// },10))
	}
if (true)	{
this.chart=chart;
}
}

componentDidMount() {
	this.makeChart(`${this.props.coinpair}`, `${this.props.interval}`);
}

	componentWillUnmount() {
		if (this.chart !== null) {
			this.chart.remove();
			this.chart = null;
		}
	}

	render() {
		return (
			<div
				id={ this.props.containerId }
				className={ 'LightweightChart' }
			/>
		);
	}
}


