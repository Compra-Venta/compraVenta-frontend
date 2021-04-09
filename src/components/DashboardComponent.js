import React, { Component } from 'react';
import NavDash from './NavDashboard';
import {LightweightChart} from './Chart';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import MarketTrades from './MarketTrades';
import CryptoNewsFeed from './CryptoNewsFeed';
import BinancePrice from './BinancePrice';
import Watchlist from './Watchlist';
import MyTabs from './Tab';
class DashboardComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedValue: 'BTCUSDT',
            current_price: '55505',
            price:'0.002',
            h_high: '0.001',
            h_low: '0.00001',
            color: 'green',
            bs_volume: '000',
            change: '',
            change_color: 'red',
            prev_val : '3334',
            ws:new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker'),
            watchArray : ['ETHUSDT', 'BTCUSDT', 'ETHBTC', 'DOGEBTC', 'LTCBTC']
            
        }
        
        this.childRef = React.createRef();
        this.childRefChart = React.createRef();
        this.childRefWatchList=React.createRef();
        this.selectValue=this.selectValue.bind(this);
        this.priceChange=this.priceChange.bind(this);
        this.setUpSocket=this.setUpSocket.bind(this);
        this.check=this.check.bind(this);
        this.addToWatcharray=this.addToWatcharray.bind(this);
        this.removeFromWatcharray=this.removeFromWatcharray.bind(this);

    }
    /*socketUrl = 'wss://stream.binance.com:9443/ws/btcusdt@ticker';

         
    /*socketUrl = "wss://stream.binance.com:9443/ws/" + `${this.state.selectedValue.toLowerCase()}` + "@ticker"
       
    binanceSocket = new WebSocket(this.socketUrl);*/
    addToWatcharray = () => {
        var array = this.state.watchArray
        var newItem = this.state.selectedValue
        array.indexOf(newItem) === -1 && array.push(newItem)
        this.setState({
            watchArray: array
        }, () => {this.childRefWatchList.current.createwatchlist(this.state.watchArray)})
    }
    removeFromWatcharray = () => {
        var array = this.state.watchArray
        var element = this.state.selectedValue
        var result = array.filter(el => el !== element)
        console.log('array',result)
        this.setState({
            watchArray: result
        }, () => {this.childRefWatchList.current.createwatchlist(this.state.watchArray)})
    }
    priceChange =(value) =>{
        this.setState({
            price: value
            
        })
    }
    setUpSocket = (category) => {
        this.check();
        var ob =[];
       /* var category = this.state.selectedValue;*/
        var symbol = category.toLowerCase();
         
        var socketUrl = "wss://stream.binance.com:9443/ws/" + `${symbol}` + "@ticker"
        console.log(socketUrl);
        var binanceSocket = new WebSocket(socketUrl);
        binanceSocket.onmessage = (event) => {
            ob = JSON.parse(event.data) ;
            // console.log(ob.p);
            console.log(ob);
            // if (ob.p>=0.000){
            //     this.setState({
                
            //         price: ob.p,
            //         color:'green'
            //     })
            // }
            // else{
            //     this.setState({
                   
                
            //         color:'red'
            //     })
            // }
            this.setState({
                ws: binanceSocket,
                h_high: ob.h,
                h_low: ob.l,
                bs_volume: ob.v,
                price: ob.p,
                change: ob.P,
                current_price: ob.c,
                change_color: ob.P >= 0 ? 'rgb(2, 192, 118)' : 'rgb(248, 73, 96)',
                color: ob.c > this.state.prev_val ? 'rgb(2, 192, 118)' : 'rgb(248, 73, 96)',
                // color: ob.c > this.state.prev_val ? 'green' : 'red',
                prev_val : ob.c
            })

            /*console.log(ob.p);
            /*this.setState({
            price: ob.p
        })*/
            
            
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
    componentDidMount(){
        /*var ob =[];
        var category = this.state.selectedValue;
        var symbol = category.toLowerCase();
         
        var socketUrl = "wss://stream.binance.com:9443/ws/" + `${symbol}` + "@ticker"
        console.log(socketUrl);
        var binanceSocket = new WebSocket(socketUrl);
        binanceSocket.onmessage = (event) => {
            ob = JSON.parse(event.data) ;
            if (ob.p>=0){
                this.setState({
                    price: ob.p,
                    color:'green'
                })
            }
            else{
                this.setState({
                    price: -1*ob.p,
                    color:'red'
                })
            }
            console.log(ob.p);
            this.setState({
            price: ob.p
        })
            
            
        }*/
        
        this.setUpSocket(this.state.selectedValue);

    }
    selectValue = (event) => {

        
        this.setUpSocket(event.target.value);
        /**/
        this.setState({
            selectedValue: event.target.value
            
        })
        this.childRef.current.check(event.target.value);
        this.childRefChart.current.makeChart(event.target.value);
        
    }
    render() {
        var addButton = <Button color="primary" size='md' className='mx-auto' onClick={this.addToWatcharray} >Add to Watchlist</Button>;
        var removeButton = <Button color="danger" size='md' className='mx-auto' onClick={this.removeFromWatcharray} >Remove from Watchlist</Button>;
        const currencies={BTCUSDT:{ba:'BTC',qa:'USDT',qp:'',bp:''},
                          ETHUSDT:{ba:'ETH',qa:'USDT',qp:'',bp:''},
                          ETHBTC:{ba:'ETH',qa:'BTC',qp:'',bp:''},
                          LTCBTC:{ba:'LTC',qa:'BTC',qp:'',bp:''},
                          LTCUSDT:{ba:'LTC',qa:'USDT',qp:'',bp:''},
                          ADABTC:{ba:'ADA',qa:'BTC',qp:'',bp:''},
                          ADAETH:{ba:'ADA',qa:'ETH',qp:'',bp:''},
                          ADAUSDT:{ba:'ADA',qa:'USDT',qp:'',bp:''},
                          DOGEBTC:{ba:'DOGE',qa:'BTC',qp:'',bp:''},
                          XRPBTC:{ba:'XRP',qa:'BTC',qp:'',bp:''},
                          XRPUSDC:{ba:'XRP',qa:'USDC',qp:'',bp:''},
                          XRPETH:{ba:'XRP',qa:'ETH',qp:'',bp:''}}
                            
        let pairList = Object.keys(currencies).map((k) => {
            return (
                <option key={k} value={k}>{k}</option>
            )
        }, this);  
        
        const watchListArray = {ETHBTC:{price: '0.003', color:'red'},
                                BTCUSDT:{price:'0.0022', color:'green'},
                                ETHUSDT:{price:'1.5326', color:'green'},
                                ADABTC:{price:'0.123', color:'red'},
                                DOGEBTC:{price:'0.786', color:'green'},
                                XRPBTC:{price:'0.0053', color:'red'}

        };
        let watchList = Object.keys(watchListArray).map((c) => {
            return(
                <div className='row' style={{color:watchListArray[c].color,fontSize:'1.2rem'}}>
                    <div className='col col-md-3'>{c}</div>
                    <div className='col col-md-3 offset-2'>{watchListArray[c].price}</div>
                </div>
            )
        },this);
              
        return (
            
            <div>
                <div>
                <NavDash/>
                </div>
                {/*<BinancePrice category={this.state.selectedValue}/>*/}
                <div className='container-fluid'>
                    <div className='row mx-auto'>
                    <div className='col-12 col-lg-3 col-md-4 border-right'>
                        <div className='row mx-auto' style={{margin:'10px'}} >
                            <div className="col-11">
                        <select className="form-control " name="crypto" id="crypto" required onChange={this.selectValue} style={{height:'3rem',fontSize:'1.4rem'}}>
                                        {/*<option defaultValue>Select</option>
                                        <option value="LTCBTC">LTCBTC</option>
                                        <option value="BTCUSD">BTCUSD</option>
                                        <option value="BTCUSD">BTCUSD</option>
                                        <option value="BTCUSD">BTCUSD</option>
                                        <option value="BTCUSD">BTCUSD</option>
                                        <option value="BTCUSD">BTCUSD</option>
                                        <option value="BTCUSD">BTCUSD</option>
                                        <option value="BTCUSD">BTCUSD</option>
                                        <option value="BTCUSD">BTCUSD</option>
                                        <option value="BTCUSD">BTCUSD</option>
                                        <option value="BTCUSD">BTCUSD</option>
                                        <option value="BTCUSD">BTCUSD</option>*/}
                                        {pairList}
                                    </select>
                                    </div>
                                    </div>
                                    <div className='container' style={{objectFit:'cover'}}>
                                    <div className='row' style={{padding:'0px 10px 0px 10px',objectFit:'cover'}}>
                                <div className='col-5 col-md-5 my-auto' style={{padding:'0px',fontSize:'1.1rem'}}>
                                    Quote Asset : 
                                </div>
                                <div className='col-7 col-md-7 text-center my-auto' style={{margin:'0px',fontSize:'2rem',verticalAlign:'center',padding:'0px', justifyItems:'self-end'}}>
                                {`${currencies[this.state.selectedValue].qa}`} 
                                </div>
                                </div>
                            <div className='row' style={{padding:'0px 10px 0px 10px'}}>
                                <div className='col-5 col-md-5 my-auto' style={{padding:'0px',fontSize:'1.1rem'}}>
                                    Base Asset : 
                                </div>
                                <div className='col-7 col-md-7 text-center my-auto' style={{margin:'0px',fontSize:'2rem',verticalAlign:'center',padding:'0px'}}>
                                {`${currencies[this.state.selectedValue].ba}`} 
                                </div>
                           
                           </div>  
                           <div className='row' style={{padding:'0px 10px 0px 10px'}}>
                                <div className='col-5 col-md-3 my-auto' style={{padding:'0px',fontSize:'1.1rem'}}>
                                    Price : 
                                </div>
                                <div className='col-6 col-md-9 text-center ml-auto' style={{margin:'0px',fontSize:'2rem',verticalAlign:'center',padding:'0px',color:`${this.state.color}`,objectFit:'fill'}}>
                                {parseFloat(this.state.current_price).toPrecision()} 
                                </div>
                                {/*<div className='col-1 col-md-1 my-auto mx-auto text-right' style={{margin:'0px'}}>
                                <FontAwesomeIcon icon={faChevronUp} color='green' size='sm'/>
                                    </div>*/}
                            </div>
                                
                                <div className='row mx-auto'>
                                    {(this.state.watchArray.indexOf(this.state.selectedValue)===-1)? addButton : removeButton}
                                
                                {' '}
                                </div>
                            </div>  
                            <div className='row' style={{paddingTop:'10px'}} >
                                <p style={{color:'blue',fontSize:'1.5rem'}}>Watch List</p>
                                <div className='container'>
                                    <Watchlist array={this.state.watchArray} ref={this.childRefWatchList}/>
                                    {/* {watchList} */}
                                </div>
                            </div>
                         
                            <div className='row' style={{paddingTop:'10px'}} >
                                <p style={{color:'blue',fontSize:'1.5rem',marginBottom:'1px'}}>Market Trades</p>
                                <div className='container'><MarketTrades  category={`${this.state.selectedValue}`} ref={this.childRef} /></div>
                                
                        
                            </div>
                    
                    </div>
                    <div className='col col-md-5 col-lg-6 border-right'>
                        <div className='container-fluid' style={{padding:'10px'}}>
                            <div className='row' >
                                <div className='col-sm-6 col-lg-3'>
                                    <div className='row mx-auto' style={{color:'gray'}}>24 Change</div>
                                    <div className='row ' style={{color:`${this.state.change_color}`}}>
                                        <div className='col-12' style={{fontSize:'1.5rem'}}>
                                        {this.state.price.substring(0,9)}
                                        </div>
                                        <div className='col-12'>
                                        {parseFloat(this.state.change).toPrecision(2)}%
                                    </div>
                                        </div>
                                    </div>
                                <div className='col-sm-6 col-lg-3'>
                                <div className='row mx-auto' style={{color:'gray'}}>24 High</div>
                                    <div className='row' style={{fontSize:'1.5rem'}}>{this.state.h_high.substring(0,9)}</div>
                                </div>
                                <div className='col-sm-6 col-lg-3'>
                                <div className='row mx-auto' style={{color:'gray'}}>24 Low</div>
                                    <div className='row' style={{fontSize:'1.5rem'}}>{this.state.h_low.substring(0,9)}</div>
                                </div>
                                <div className='col-sm-6 col-lg-3'>
                                    <div className='row mx-auto' style={{color:'gray'}}>24 Volume</div>
                                    <div className='row' style={{fontSize:'1.5rem'}}>{this.state.bs_volume.substring(0,12)}</div></div>
                            </div>
                            <div className='row' style={{overflow:'auto',display:'grid'}}>
                        <LightweightChart coinpair={`${this.state.selectedValue}`} ref={this.childRefChart} />
                        </div>
                        <div className='row' style={{paddingRight:'20px'}}>
                        <Button color="primary" size='md' className='ml-auto' style={{width:'7rem',fontSize:'1.2rem'}}>Predict</Button>{' '}
                        </div>
                        <div className="row">
                            <MyTabs qa={`${currencies[this.state.selectedValue].qa}`} ba={`${currencies[this.state.selectedValue].ba}`}/>
                        </div>
                        </div>
                        </div>
                    <div className='col col-md-3 col-lg-3' >
                        <div className='container'>
                        <div className='row' style={{fontSize:'1.5rem',paddingTop:'10px'}}>News</div>
                        <div className='row'><CryptoNewsFeed category={`${currencies[this.state.selectedValue].qa}`} /></div>
                        <div className='row' style={{paddingRight:'20px'}}>
                        <Button color="primary" size='md' className='ml-auto' style={{fontSize:'1.2rem'}}>View More</Button>{' '}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
           
        );
    }
}

export default DashboardComponent;