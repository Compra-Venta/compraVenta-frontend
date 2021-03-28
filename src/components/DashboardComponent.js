import React, { Component } from 'react';
import NavDash from './NavDashboard';
import {LightweightChart} from './Chart';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
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
              
        return (
            
            <div>
                <div>
                <NavDash/>
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                    <div className='col-12 col-md-2 border-right'>
                        <div className='row' style={{margin:'10px'}} >
                        <select className="form-control " name="crypto" id="crypto" required onChange={this.selectValue}>
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
                                    <div className='container'>
                                    <div className='row' style={{padding:'10px'}}>
                                <div className='col-5 col-md-5 my-auto' style={{padding:'0px'}}>
                                    Quote Asset : 
                                </div>
                                <div className='col-7 col-md-7 my-auto' style={{margin:'0px',fontSize:'1.7vw',verticalAlign:'center',padding:'0px'}}>
                                {`${currencies[this.state.selectedValue].qa}`} 
                                </div>
                                </div>
                            <div className='row' style={{padding:'10px'}}>
                                <div className='col-5 col-md-5 my-auto' style={{padding:'0px'}}>
                                    Base Asset : 
                                </div>
                                <div className='col-7 col-md-7 my-auto' style={{margin:'0px',fontSize:'1.7vw',verticalAlign:'center',padding:'0px'}}>
                                {`${currencies[this.state.selectedValue].ba}`} 
                                </div>
                           
                           </div>  
                           <div className='row' style={{padding:'10px'}}>
                                <div className='col-12 col-md-3 my-auto' style={{padding:'0px'}}>
                                    Price : 
                                </div>
                                <div className='col-12 col-md-9  ml-auto' style={{margin:'0px',fontSize:'1.7vw',verticalAlign:'center',padding:'0px',color:'blue'}}>
                                0.0003514 &nbsp;<FontAwesomeIcon icon={faChevronUp} color='green' size='sm'/>
                                </div>
                                </div>
                                <div className='row mx-auto'>
                                <Button color="primary" size='md' className='mx-auto' >Add to Watchlist</Button>{' '}
                                </div>
                            </div>  
                         
                        <div className='row' style={{verticalAlign:'bottom'}}>Market Trades</div>
                    
                    </div>
                    <div className='col col-md-6'>
                        <div className='container' style={{padding:'10px'}}>
                            <div className='row'>
                                <div className='col-3'>24 Change</div>
                                <div className='col-3'>24 High</div>
                                <div className='col-3'>24 Low</div>
                                <div className='col-3'>24 Volume</div>
                            </div>
                            <div className='row'>
                        <LightweightChart/>
                        </div>
                        <div className='row' style={{paddingRight:'20px'}}>
                        <Button color="primary" size='lg' className='ml-auto'>Predict</Button>{' '}
                        </div>
                        </div>
                        </div>
                    <div className='col col-md-4'>News</div>
                    </div>
                </div>
                </div>
           
        );
    }
}

export default DashboardComponent;