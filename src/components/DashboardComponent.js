import React, { Component } from 'react';
import NavDash from './NavDashboard';
import {LightweightChart} from './Chart';
import { Button, Nav, NavItem, NavLink, TabContent, TabPane, UncontrolledAlert } from 'reactstrap';
import MarketTrades from './MarketTrades';
import CryptoNewsFeed from './CryptoNewsFeed';
import Watchlist from './Watchlist';
import MyTabs from './Tab';
import Predict from './Predict';
import Footer from './Footer';
 import {  withRouter } from 'react-router';
import { connect } from "react-redux";
import * as Icon from 'react-cryptocoins'
import {  fetchWatchlist, addToWatchlist, removeFromWatchlist, loginUser, logoutUser, getPrediction, newPassword, changePassword, fetchProfile, fetchWallet, fetchOpenTransaction, fetchClosedTransaction, cancelOrder, placeMarketOrder, resetAccount, placeStopOrder } from "../redux/actionCreaters";

const mapDispatchToProps = (dispatch) => ({
    
    logoutUser: () => dispatch(logoutUser()),
    fetchWatchlist: () => dispatch(fetchWatchlist()),
    addToWatchlist: (symbol) => dispatch(addToWatchlist(symbol)),
    removeFromWatchlist: (symbol) => dispatch(removeFromWatchlist(symbol)),
    getPrediction: (info) => dispatch(getPrediction(info)),
    placeMarketOrder: (info) => dispatch(placeMarketOrder(info)),
    placeStopOrder: (info) => dispatch(placeStopOrder(info)),
   

})



const mapStateToProps = (state) => {
    return {
        watchlist: state.watchlist,
        auth: state.auth,
        prediction: state.prediction,
        marketOrder: state.marketOrder,
        stopOrder: state.stopOrder,
    }
}
class DashboardComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedValue: 'BTCUSDT',
            current_price: '0.00',
            price:'0.00',
            h_high: '0.001',
            h_low: '0.00001',
            color: 'green',
            bs_volume: '000',
            change: '0.00',
            change_color: 'red',
            prev_val : '3334',
            ws:new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker'),
            watchArray: (typeof this.props.watchlist !=='undefined') ? this.props.watchlist.watchlist : [],
            interval: ['15m', '1h', '12h', '1d', '1w'],
            activeTab: '1',
            selected_interval: '15m'
            // watchArray : ['ETHUSDT', 'BTCUSDT', 'ETHBTC', 'DOGEBTC', 'LTCBTC']
            
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
        this.props.addToWatchlist(this.state.selectedValue);
      //this.childRefWatchList.current.createwatchlist(this.props.watchlist.watchlist);
      this.clickChild(this.props.watchlist.watchlist);
      /*console.log('fetch Watchlist')
        const email = JSON.parse(localStorage.getItem('creds')).email
        const bearer = 'Bearer ' + localStorage.getItem('token');
        const data = {email:  email}
        console.log('watchlist',data)
        return fetch('http://127.0.0.1:5000' + '/watchlist'+`?email=${email}`, {
            
            
            headers: {
                
                'Authorization': bearer
            },
           /* body: /*JSON.stringify(data)
        })
            .then(response => {
                console.log('wres',response);
                if (response.ok) {
                    return response;
                }
                else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then(response => response.json())
            .then(watchlist => {console.log(' dash watchlist',watchlist);this.setState({
                watchArray :watchlist.watchlist
            }, this.childRefWatchList.current.createwatchlist(this.state.watchArray))})
            .catch(error => console.log(error.message));*/
       
    }
    removeFromWatcharray = () => {
        /*var array = this.state.watchArray
        var element = this.state.selectedValue
        var result = array.filter(el => el !== element)
        console.log('array',result)
        this.setState({
            watchArray: result
        }, () => */
        this.props.removeFromWatchlist(this.state.selectedValue)
       /*  this.childRefWatchList.current.createwatchlist(this.props.watchlist.watchlist) */
        this.clickChild(this.props.watchlist.watchlist);
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
        //console.log(socketUrl);
        var binanceSocket = new WebSocket(socketUrl);
        binanceSocket.onmessage = (event) => {
            //console.log('message')
            ob = JSON.parse(event.data) ;
            // console.log(ob.p);
            // console.log(ob);
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
           
            
        }
    }
    check = () => {
        const ws  = this.state.ws;
        if (ws || ws.readyState == WebSocket.OPEN) {
            //console.log('connection check',ws);

            ws.close();
        if(!ws|| ws.readyState == WebSocket.CLOSED){
            //console.log('connection close',ws);
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
        /*console.log('fetch Watchlist')
    const email = JSON.parse(localStorage.getItem('creds')).email
    const bearer = 'Bearer ' + localStorage.getItem('token');
    const data = {email:  email}
    console.log('watchlist',data)
    return fetch('http://127.0.0.1:5000' + '/watchlist'+`?email=${email}`, {
        
        
        headers: {
            
            'Authorization': bearer
        },
       /* body: /*JSON.stringify(data)
    })
        .then(response => {
            console.log('wres',response);
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(watchlist => {console.log(' dash watchlist',watchlist);this.setState({
            watchArray :watchlist.watchlist
        }, () => console.log(this.state.watchArray))})
        .catch(error => console.log(error.message));
       /* let watchA = [];
        if (typeof this.props.watchlist!=='undefined'){
        if (this.props.watchlist.watchlist !== null) {
        this.props.watchlist.watchlist.forEach(element => {
      watchA.push({element
        
      })
    });
}}
    const watchL = this.state.watchArray.concat(watchA);
    this.setState({
        watchArray: watchL
    },() => console.log('wachhh',this.state.watchArray))*/
    this.props.fetchWatchlist();

    }
    /*componentDidUpdate(){
        console.log('fetch Watchlist')
        const email = JSON.parse(localStorage.getItem('creds')).email
        const bearer = 'Bearer ' + localStorage.getItem('token');
        const data = {email:  email}
        console.log('watchlist',data)
        return fetch('http://127.0.0.1:5000' + '/watchlist'+`?email=${email}`, {
            
            
            headers: {
                
                'Authorization': bearer
            },
           /* body: /*JSON.stringify(data)
        })
            .then(response => {
                console.log('wres',response);
                if (response.ok) {
                    return response;
                }
                else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then(response => response.json())
            .then(watchlist => {console.log(' dash watchlist',watchlist);this.setState({
                watchArray :watchlist.watchlist
            }, this.childRefWatchList.current.createwatchlist(this.state.watchArray))})
            .catch(error => console.log(error.message));
        
            
          }*/
         
    
    selectValue = (event) => {

        
        this.setUpSocket(event.target.value);
        /**/
        this.setState({
            selectedValue: event.target.value
            
        })
        this.childRef.current.check(event.target.value);
        this.childRefChart.current.makeChart(event.target.value, this.state.selected_interval);
        
    }

    setActiveTab(newTab){
        let interval = this.state.interval
        this.setState({
            activeTab: newTab,
            selected_interval: interval[newTab - 1]
        },() => {this.childRefChart.current.makeChart(this.state.selectedValue, this.state.selected_interval)})
    }

    render() {
        //console.log('watch',this.state.watchArray)
        var addButton = <Button color="primary" size='md' className='mx-auto' onClick={this.addToWatcharray} >Add to Watchlist</Button>;
        var removeButton = <Button color="danger" size='md' className='mx-auto' onClick={this.removeFromWatcharray} >Remove from Watchlist</Button>;
        const currencies={BTCUSDT:{ba:'BTC',qa:'USDT',qp:'0.00000001',bp:'0.000001'},
                          ETHUSDT:{ba:'ETH',qa:'USDT',qp:'0.0000001',bp:'0.00001'},
                          ETHBTC:{ba:'ETH',qa:'BTC',qp:'0.00000001',bp:'0.001'},
                          LTCBTC:{ba:'LTC',qa:'BTC',qp:'0.00000001',bp:'0.01'},
                          LTCUSDT:{ba:'LTC',qa:'USDT',qp:'0.0000001',bp:'0.00001'},
                          LTCBNB:{ba:'LTC',qa:'BNB',qp:'0.000001',bp:'0.001'},
                          LTCETH:{ba:'LTC',qa:'ETH',qp:'0.00000001',bp:'0.001'},
                          XRPBTC:{ba:'XRP',qa:'BTC',qp:'0.00000001',bp:'1'},
                          XRPUSDT:{ba:'XRP',qa:'USDT',qp:'0.000001',bp:'0.1'},
                          XRPETH:{ba:'XRP',qa:'ETH',qp:'0.00000001',bp:'1'},
                          XRPBNB:{ba:'XRP',qa:'BNB',qp:'0.000001',bp:'0.1'},
                          BNBBTC:{ba:'BNB',qa:'BTC',qp:'0.00000001',bp:'0.01'},
                          BNBETH:{ba:'BNB',qa:'ETH',qp:'0.00000001',bp:'0.01'},
                          BNBUSDT:{ba:'BNB',qa:'USDT',qp:'0.0000001',bp:'0.001'},  
                        }
        
        const coinInfo = {
            'BTC': {name: 'BitCoin', icon: <Icon.BtcAlt/> },
            'USDT':{name: 'Tether', icon: <Icon.UsdtAlt/> },
            'ETH': {name: 'Ethereum', icon: <Icon.EthAlt/>},
            'LTC': {name: 'LiteCoin', icon: <Icon.LtcAlt/>},
            'XRP': {name: 'Ripple', icon:  <Icon.XrpAlt/> },
            'BNB': {name: 'Binance', icon: <img src='assets/images/binance-coin-logo.png' width='30px' height='30px' /> },
        }
                        
        let pairList = Object.keys(currencies).map((k) => {
            return (
                <option key={k} value={k}>{k}</option>
            )
        }, this);  
        
        // const watchListArray = {ETHBTC:{price: '0.003', color:'red'},
        //                         BTCUSDT:{price:'0.0022', color:'green'},
        //                         ETHUSDT:{price:'1.5326', color:'green'},
        //                         ADABTC:{price:'0.123', color:'red'},
        //                         DOGEBTC:{price:'0.786', color:'green'},
        //                         XRPBTC:{price:'0.0053', color:'red'}

        // };
        // let watchList = Object.keys(watchListArray).map((c) => {
        //     return(
        //         <div className='row' style={{color:watchListArray[c].color,fontSize:'1.2rem'}}>
        //             <div className='col col-md-3'>{c}</div>
        //             <div className='col col-md-3 offset-2'>{watchListArray[c].price}</div>
        //         </div>
        //     )
        // },this);
     
        
        return (
            
            <div>
                <div>
                <NavDash logoutUser={this.props.logoutUser}/>
                </div>
                <UncontrolledAlert color='info' >Welcome to Compra Venta. Having doubts? Go to our <a href='/learn' className='alert-link'>Learn</a> Page and clear you doubts! </UncontrolledAlert>
                <div className='container-fluid'>
                    <div className='row mx-auto'>
                    <div className='col-12 col-lg-3 col-md-4 border-right'>
                        <div className='row mx-auto' style={{margin:'10px'}} >
                            <div className="col-11">
                                    <select className="form-control " name="crypto" id="crypto" required onChange={this.selectValue} style={{height:'3rem',fontSize:'1.4rem'}}>                                        
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
                                {coinInfo[currencies[this.state.selectedValue].qa].icon}
                                {` ${currencies[this.state.selectedValue].qa}`}
                                <span style={{color:'gray', fontSize:'18px'}}> ({coinInfo[currencies[this.state.selectedValue].qa].name})</span>
                                </div>
                                </div>
                            <div className='row' style={{padding:'0px 10px 0px 10px'}}>
                                <div className='col-5 col-md-5 my-auto' style={{padding:'0px',fontSize:'1.1rem'}}>
                                    Base Asset : 
                                </div>
                                <div className='col-7 col-md-7 text-center my-auto' style={{margin:'0px',fontSize:'2rem',verticalAlign:'center',padding:'0px'}}>
                                {coinInfo[currencies[this.state.selectedValue].ba].icon}
                                {` ${currencies[this.state.selectedValue].ba}`} 

                                <span style={{color:'gray', fontSize:'18px'}}> ({coinInfo[currencies[this.state.selectedValue].ba].name})</span>
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
                                    {(this.props.watchlist.watchlist.indexOf(this.state.selectedValue)===-1)? addButton : removeButton}
                                
                                {' '}
                                </div>
                            </div>  
                            <div className='row' style={{paddingTop:'10px'}} >
                                <p style={{color:'#257CFF',fontSize:'1.5rem'}}>Watch List</p>
                                <div className='container'>
                                    <Watchlist array={this.props.watchlist.watchlist} /*ref={this.childRefWatchList}*/ watch={this.props.watchlist} setClick={click => this.clickChild = click} />
                                    {/* {watchList} */}
                                </div>
                            </div>
                         
                            <div className='row' style={{paddingTop:'10px'}} >
                                <p style={{color:'#257CFF',fontSize:'1.5rem',marginBottom:'1px'}}>Market Trades</p>
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
                                    <div className='row' style={{color:`${this.state.change_color}`, fontSize:'1.5rem'}}>{this.state.bs_volume.substring(0,12)}</div></div>
                            </div>
                           
                            <Nav tabs>
                            <NavItem>
                                <NavLink className={this.state.activeTab == '1' ? 'active' : ''} onClick={() => this.setActiveTab('1')}>
                                    15m
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={this.state.activeTab == '2' ? 'active' : ''} onClick={() =>this.setActiveTab('2')}>
                                    1h
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={this.state.activeTab == '3' ? 'active' : ''} onClick={() =>this.setActiveTab('3')}>
                                    12h
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={this.state.activeTab == '4' ? 'active' : ''} onClick={() =>this.setActiveTab('4')}>
                                    1d
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={this.state.activeTab == '5' ? 'active' : ''} onClick={() =>this.setActiveTab('5')}>
                                    1w
                                </NavLink>
                            </NavItem>
                            </Nav>
                            <div className='row' style={{overflow:'auto',display:'grid'}}>
                                <LightweightChart interval={`${this.state.selected_interval}`} coinpair={`${this.state.selectedValue}`}  ref={this.childRefChart}/>
                            </div>
                           
                        <Predict 
                        getprediction={this.props.getPrediction} prediction={this.props.prediction} 
                        symbol={this.state.selectedValue} currentPrice={this.state.current_price} />
                        <div className="row">
                            <MyTabs 
                            qa={`${currencies[this.state.selectedValue].qa}`} ba={`${currencies[this.state.selectedValue].ba}`} 
                            qp={`${currencies[this.state.selectedValue].qp}`} bp={`${currencies[this.state.selectedValue].bp}`}
                            placeMarketOrder={this.props.placeMarketOrder} marketOrder={this.props.marketOrder}
                            placeStopOrder={this.props.placeStopOrder} stopOrder={this.props.stopOrder} />
                        </div>
                        </div>
                        </div>
                    <div className='col col-md-3 col-lg-3' style={{marginLeft:'-1%'}} >
                        <div className='container'>
                        <div className='row' style={{fontSize:'1.5rem',paddingTop:'10px', marginLeft:'1%'}}>News</div>
                        <div className='row'><CryptoNewsFeed category={`${currencies[this.state.selectedValue].qa}`} /></div>
                        <div className='row' style={{paddingRight:'20px'}}>
                        {/* <Button color="primary" size='md' className='ml-auto' style={{fontSize:'1.2rem'}}>View More</Button>{' '} */}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Footer/>
                </div>
           
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DashboardComponent);