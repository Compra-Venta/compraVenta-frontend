import React, { Component } from 'react';
import LearnDash from './LearnDash';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
  

class Learn extends Component {
    constructor(props) {
        super(props);
        this.state={
            collapsed:true
        }

    }

toggleNavbar = () =>{
    this.setState({
        collapsed:!this.state.collapsed
    })
}

    render() {
        return (
            <>
                <div>
                    <LearnDash />
                </div>

                <div className='container-fluid' style={{marginTop:80}}>
                    <div className='row'>
                        <div className='col-3 border-right border-dark d-none d-md-block'>
                            <div className="sidenav border-right  " style={{ lineHeight: 2.1, paddingLeft: '20px' }}>
                                <h2>Quick Links</h2>
                                <ul>
                                    <li><a href="#crypto" className="Links">What is Crypto Currency?</a></li>
                                    <li><a href="#blockchain" className="Links">What is Block Chain?</a></li>
                                    <li><a href="#compraventa" className="Links">Our Platform</a></li>



                                    <ul>
                                        <li> <a href="#assets" className="Links">Assets</a></li>
                                        <li><a href="#charts" className="Links">Charts</a></li>
                                        <li><a href="#orders" className="Links">Orders</a></li>
                                        <li><a href="#predictions" className="Links">Predictions</a></li>
                                        <li><a href="#account" className="Links">Account</a></li>





                                    </ul>
                                    <li><a href="#demo" className="Links">Demo</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-8 learnC'>
                    <div className='d-block d-md-none'>
                        <Navbar color="faded" light>
                            <NavbarBrand className="mr-auto">Quick Links</NavbarBrand>
                            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                            <Collapse isOpen={!this.state.collapsed} navbar>
                            <Nav className="mr-auto" navbar>
                            <NavItem>
                            <NavLink href="#crypto">What is Crypto Currency?</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href="#blockchain">What is Block Chain?</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Our Platform
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                <NavLink href="#assets">Assets</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                <NavLink href="#charts">Charts</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                <NavLink href="#orders">Orders</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                <NavLink href="#predictions">Predictions</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                <NavLink href="#account">Account</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                            <NavLink href="#demo">Demo</NavLink>
                            </NavItem>
                        </Nav>
                            </Collapse>
                        </Navbar>
                        </div>

                        <div  style={{ paddingBottom: 30 }}>
                            <h2 id='crypto' style={{ fontSize: 40 }}>What is Crypto Currency?</h2>
                            <div className='hPad' style={{ fontSize: 22, lineHeight: '1.6' }}>
                                <br />
                        A cryptocurrency is just like a digital form of cash. You can use it to pay friends for your share of the bar tab, buy that new pair of socks you've been eyeing up 👀, or book flights ✈️ and hotels 🏨 for your next holiday. Because cryptocurrency is digital, it can also be sent to friends and family anywhere in the world.
                        Just like PayTm or bank transfers, right?
                        Well, not really. It's way more interesting!<br /><br />

                        You see, traditional online payment gateways are owned by organizations. They hold your money for you, and you need to ask them to transfer it on your behalf when you want to spend it.<br /><br />
                        In cryptocurrencies, there isn't an organization. You, your friends, and thousands of others can act as your own banks by running free software. Your computer connects with other people's computers, meaning you communicate directly – no middlemen required!
                        So, this magical internet money isn't owned by anyone and uses cryptography to secure the system. But you've already got apps for paying people – why should you care?
                        </div>
                        </div>
                        <div  style={{ paddingBottom: 30 }}>
                            <h2 id='blockchain' style={{ fontSize: 40 }}>What is BlockChain?</h2>
                            <div className='hPad' style={{ fontSize: 22, lineHeight: '1.6' }}>
                                <br />
                        Blockchain is a specific type of database.<br />
                        It differs from a typical database in the way it stores information; blockchains store data in blocks that are then chained together.
                        As new data comes in it is entered into a fresh block. Once the block is filled with data it is chained onto the previous block, which makes the data chained together in chronological order.
                        Different types of information can be stored on a blockchain but the most common use so far has been as a ledger for transactions. <br /><br />
                        In Bitcoin’s case, blockchain is used in a decentralized way so that no single person or group has control—rather, all users collectively retain control.
                        Decentralized blockchains are immutable, which means that the data entered is irreversible. For Bitcoin, this means that transactions are permanently recorded and viewable to anyone.<br /><br />
                        

                         </div>
                        </div>
                        <div  style={{ paddingBottom: 30 }}>
                            <h2 id='compraventa' style={{ fontSize: 40 }}>Our Platform</h2>
                            <img src='assets/images/learnPage/dashboard.png' style={{ width:'100%', borderStyle:'groove' }}/>
                            <br /><br />
                            <div className='cPad' style={{paddingBottom:50 }}>
                                <h3 id='assets' style={{ fontSize: 30 }}>Assets</h3>
                                <div style={{ fontSize: 22, lineHeight: '1.6' }}>

                                    An <strong>asset</strong> is something containing economic value and/or future benefit.
                                On our platform we provide assets like Bitcoin, Litecoin, Etheruem, Ripple etc. You trade by buying and selling these assets.<br /><br />

                                Assets always exists in pairs. A pair defines that what assets will be involved in a transaction. For example if you buy LTCBTC, you are buying LTC (Litecoin) in exchange of BTC (Bitcoin).<br /><br />
                                <img src='assets/images/learnPage/assets.png' style={{ height:'30vh', borderStyle:'groove',float:'none' }}/><br/>
                                Base asset vs Quote asset - <br /><br />

                                Base currency represents how much of the quote currency is needed for you to get one unit of the base currency. For example, if you were looking at the CAD/USD currency pair, the Canadian dollar would be the base currency and the U.S. dollar would be the quote currency.

                            </div></div>
                            <div className='cPad'  style={{ paddingBottom:50 }}>
                                <h3 id='charts' style={{ fontSize: 30 }}>Charts</h3>
                                <br/>
                                <img className='chartW' src='assets/images/learnPage/chart.png' style={{ borderStyle:'groove' }}/><br/><br/>
                                <div style={{ fontSize: 22, lineHeight: '1.6' }}>                                
                                A total of 4 graphs are used in this chart which are described as follows:-
                                <ol className='olist'>
                                    <li className='olist'>
                                        <h3>CandleSticks</h3><br/>
                                        Candlesticks charts are mostly used to analyze the trading trend.<br/>
                                        Each candle corresponds to a time interval. The endpoints of the box in the candle represents the price of the symbol at starting and end of the interval. If the closing price (price at the end) is more than opening price (price at the starting) then the candle is coloured green, otherwise it is colored red. The endpoints of the line, shows the highest and lowest price in the particular interval.<br/><br/>
                                        <img src='assets/images/learnPage/candlestick.jpeg' style={{height:'40vh', borderStyle:'groove',width:'300px' }}/>      
                                    </li>
                                    <li className='olist'>
                                        <h3>Moving Averages</h3><br/>
                                        We have used <i>2</i> moving averages for showing the trend of the market.
                                        <ul className='olist'>
                                            <li className='olist'>
                                            An <i>Exponential Moving Average</i> (EMA) is a type of moving average (MA) that places a greater weight and significance on the most recent data points. The exponential moving average is also referred to as the exponentially weighted moving average. An exponentially weighted moving average reacts more significantly to recent price changes than a simple moving average (SMA),
                                             which applies an equal weight to all observations in the period. Here Smoothing = 2.
                                            <br/><img className="maW" src='assets/images/learnPage/emaformula.png' style={{height:'41vh'}} />                                          
                                            </li>
                                            <li className='olist'>
                                             A <i>Simple Moving Average</i> (SMA) calculates the average of a selected range of prices, usually closing prices, by the number of periods in that range.Short-term averages respond quickly to changes in the price of the underlying security, while long-term averages are slower to react.
                                             <br/><img className="maW" src='assets/images/learnPage/smaformula.png' style={{height:'41vh'}} />                                          
                                            </li>
                                        </ul>
                                        <i> Here is the video will help you to predict different patterns using these averages.<br/>(Source: Binance)</i>
                                        <div className='video-responsive'>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/WYnKlC1AEV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>     
                                        </div>                                
                                    </li>
                                    <li className='olist'>
                                        <h3>Price by Volume</h3><br/>
                                        A price by volume (PBV) chart is a horizontal histogram plotted on a security's chart, showing the volume of shares traded at a specific price level. Often times, price by volume histograms are found on the Y-axis and are used by technical traders to predict areas of support and resistance.
                                    </li>
                                </ol>
                                
                                </div></div>
                                    <div className='cPad' style={{paddingBottom:50 }}>
                                <h3 id='orders' style={{ fontSize: 30 }}>Orders</h3>
                                <br/><br/>
                               
                                <div style={{ fontSize: 22, lineHeight: '1.6' }}>

                                There are many different types of orders in the world of trading, each having different  behavior. Market Orders, Stop Orders and Limit Orders are different types of orders.
                                Our platform tries to resemble the working of market and stop orders.<br/>

                                Market orders do not require the price at which you need to sell/buy.<br/><br/> 
                                The price value is filled by the exchange. For famous cryptocurrencies (like on our platform), the orders are traded almost instantly. <br/><br/>

                                Stop Orders are traded when a certain price value hits. For example you want to buy BTC in exchange to USD, when its price hits 50,000 USD. In this case you can add the stop value to 50,000 and your order will be traded whenever the BTC hits 50,000 mark. For name sake, Stop orders are of 2 types explained below.
                                <br/>Compra Venta provides user a feature to <span style={{color:'red'}}>cancel</span> any open order if the order is not placed yet.
                                <br/><br/>
                                </div>
                                <img src='assets/images/learnPage/buysell.jpeg' style={{height:'30vh', width:'95%', borderStyle:'groove' }}/>
                                </div>
                                <div className='cPad' style={{paddingBottom:50 }}>
                                <h3 id='predictions' style={{ fontSize: 30 }}>Predictions</h3>
                                <br/><br/>
                               
                                <div style={{ fontSize: 22, lineHeight: '1.6' }}>

                                Our platform predicts the prices after 1 day, 3 days and 1 week for every symbol.<br/><br/>
                                <div className='container-fluid'>
                                    <div className='row'>
                                <div className='col-lg-6'>
                                <img src='assets/images/learnPage/predictI.png' style={{height:'40vh', width:'100%', borderStyle:'groove' }}/>
                                </div>
                                <div className='col-lg-6'>
                                <img src='assets/images/learnPage/predict.png' style={{height:'40vh', width:'100%', borderStyle:'groove' }}/>
                                </div>
                                </div>
                                </div>
                                <br/>
                                The predictions are made using<span style={{color:'blue'}}> exponentially weighted averages </span>and are based on the recent trends. We do not provide any gaurantee about the predictions but present a expected trend only.
                                </div>
                               
                                </div>
                                <div className='cPad' style={{paddingBottom:50 }}>
                                <h3 id='account' style={{ fontSize: 30 }}>Account</h3>
                                <br/><br/>
                               
                                <div style={{ fontSize: 22, lineHeight: '1.6' }}>

                                User can register to Compra Venta using their Email ID. At any point of time, user may feel free to change their passwords or reset the account details.<br/><br/>

                                By Reseting account, we mean that user can undo all the transactions, cancel ongoing transactions and bring wallet to initial state.

                                A dedicated My Profile page is also designed where user can check their personal details, all their previous and ongoing transactions, cancel the open orders, reset their account and can also check wallet where balances of all coins are shown. 
                                <br/>Balances are of 2 types:
                                <ul>
                                    <li>
                                        Balance: All the transactions that happen using Market Order, the exchange value of coins is updated in Balance. 
                                    </li>
                                    <li>
                                        Fixed Balance: All the transactions that happen using Stop Order, the exchange value of coins is temporarily reserved in fixed balance and updated in Balance once the transaction is completed.
                                    </li>
                                </ul>
                                For getting if user is earning profit by doing transactions, user are provided the <span style={{color:'blue'}}>Assets Earned</span> and a <span style={{color:'blue'}}>Rating System</span> which will motivate them to trade by analysing more even without any risk! 
                                <br/> Assets Earned: Current Assets - Initial Assets
                                </div>
                               
                                </div>
                        </div>
                        <div  style={{ paddingBottom: 30 }}>
                            <h2 id='demo' style={{ fontSize: 40 }}>Demo</h2>
                            <br/><br/>
                            <div className='video-responsive'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/wV72CrYvtGQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div> 
                        </div>
                    </div>
                </div>
            </>
        );
    }
}



export default Learn;