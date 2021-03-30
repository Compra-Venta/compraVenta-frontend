import React, { Component } from 'react';
import NavDash from './NavDashboard';
import {LightweightChart} from './Chart';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import MarketTrades from './MarketTrades';
import CryptoNewsFeed from './CryptoNewsFeed';
class DashboardComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedValue: 'BTCUSDT'
        }
        this.selectValue=this.selectValue.bind(this)
    }
    selectValue = (event) => {
        this.setState({
            selectedValue: event.target.value
        })
    }
    render() {
        const currencies={BTCUSDT:{qa:'BTC',ba:'USDT',qp:'',bp:''},
                          ETHUSDT:{qa:'ETH',ba:'USDT',qp:'',bp:''},
                          ETHBTC:{qa:'ETH',ba:'BTC',qp:'',bp:''},
                          LTCBTC:{qa:'LTC',ba:'BTC',qp:'',bp:''},
                          LTCUSDT:{qa:'LTC',ba:'USDT',qp:'',bp:''},
                          ADABTC:{qa:'ADA',ba:'BTC',qp:'',bp:''},
                          ADAETH:{qa:'ADA',ba:'ETH',qp:'',bp:''},
                          ADAUSDT:{qa:'ADA',ba:'USDT',qp:'',bp:''},
                          DOGEBTC:{qa:'DOGE',ba:'BTC',qp:'',bp:''},
                          XRPBTC:{qa:'XRP',ba:'BTC',qp:'',bp:''},
                          XRPUSDC:{qa:'XRP',ba:'USDC',qp:'',bp:''},
                          XRPETH:{qa:'XRP',ba:'ETH',qp:'',bp:''}}
                            
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
                    <div className='col col-md-3 offset-1'>{watchListArray[c].price}</div>
                </div>
            )
        },this);
              
        return (
            
            <div>
                <div>
                <NavDash/>
                </div>
                <div className='container-fluid'>
                    <div className='row mx-auto'>
                    <div className='col-12 col-lg-3 col-md-2 border-right'>
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
                                <div className='col-6 col-md-7 text-right ml-auto' style={{margin:'0px',fontSize:'2rem',verticalAlign:'center',padding:'0px',color:'blue',objectFit:'fill'}}>
                                0.0003514 
                                </div>
                                <div className='col-1 col-md-1 my-auto mx-auto text-right' style={{margin:'0px'}}>
                                <FontAwesomeIcon icon={faChevronUp} color='green' size='md'/>
                                </div>
                            </div>
                                
                                <div className='row mx-auto'>
                                <Button color="primary" size='md' className='mx-auto' >Add to Watchlist</Button>{' '}
                                </div>
                            </div>  
                            <div className='row' style={{paddingTop:'10px'}} >
                                <p style={{color:'blue',fontSize:'1.5rem'}}>Watch List</p>
                                <div className='container'>
                                    {watchList}
                                </div>
                            </div>
                         
                            <div className='row' style={{paddingTop:'10px'}} >
                                <p style={{color:'blue',fontSize:'1.5rem',marginBottom:'1px'}}>Market Trades</p>
                                <div className='container'><MarketTrades/></div>
                                
                        
                            </div>
                    
                    </div>
                    <div className='col col-md-6 col-lg-6 border-right'>
                        <div className='container' style={{padding:'10px'}}>
                            <div className='row'>
                                <div className='col-3'>
                                    <div className='row mx-auto' style={{color:'gray'}}>24 Change</div>
                                    <div className='row ' style={{color:'#E40000'}}>
                                        <div className='col' style={{fontSize:'1.5rem'}}>
                                        -0.000121
                                        </div>
                                        <div className='col'>
                                            1.45%
                                    </div>
                                        </div>
                                    </div>
                                <div className='col-3'>
                                <div className='row mx-auto' style={{color:'gray'}}>24 High</div>
                                    <div className='row' style={{fontSize:'1.5rem'}}>0.003692</div>
                                </div>
                                <div className='col-3'>
                                <div className='row mx-auto' style={{color:'gray'}}>24 Low</div>
                                    <div className='row' style={{fontSize:'1.5rem'}}>0.003528</div>
                                </div>
                                <div className='col-3'>
                                    <div className='row mx-auto' style={{color:'gray'}}>24 Volume</div>
                                    <div className='row' style={{fontSize:'1.5rem'}}>229006.23</div></div>
                            </div>
                            <div className='row' style={{overflow:'hidden'}}>
                        <LightweightChart/>
                        </div>
                        <div className='row' style={{paddingRight:'20px'}}>
                        <Button color="primary" size='md' className='ml-auto' style={{width:'7rem',fontSize:'1.2rem'}}>Predict</Button>{' '}
                        </div>
                        </div>
                        </div>
                    <div className='col col-md-4 col-lg-3' >
                        <div className='container'>
                        <div className='row' style={{fontSize:'1.5rem',paddingTop:'10px'}}>News</div>
                        <div className='row'><CryptoNewsFeed/></div>
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