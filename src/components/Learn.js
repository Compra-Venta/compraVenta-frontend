import React, { Component } from 'react';
import LearnDash from './LearnDash';


class Learn extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <>
                <div>
                    <LearnDash />
                </div>

                <div className='container-fluid' style={{marginTop:80}}>
                    <div className='row'>
                        <div className='col-3 border-right border-dark'>
                            <div className="sidenav border-right " style={{ lineHeight: 2.1, paddingLeft: '20px' }}>
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
                    <div className='col-8 learnC'>
                        <div id='crypto' style={{ paddingBottom: 30 }}>
                            <h2 style={{ fontSize: 40 }}>What is Crypto Currency?</h2>
                            <div style={{ fontSize: 22, lineHeight: '1.6', paddingLeft: 10 }}>
                                <br />
                        A cryptocurrency is just like a digital form of cash. You can use it to pay friends for your share of the bar tab, buy that new pair of socks you've been eyeing up 👀, or book flights ✈️ and hotels 🏨 for your next holiday. Because cryptocurrency is digital, it can also be sent to friends and family anywhere in the world.
                        Just like PayTm or bank transfers, right?
                        Well, not really. It's way more interesting!<br /><br />

                        You see, traditional online payment gateways are owned by organizations. They hold your money for you, and you need to ask them to transfer it on your behalf when you want to spend it.<br /><br />
                        In cryptocurrencies, there isn't an organization. You, your friends, and thousands of others can act as your own banks by running free software. Your computer connects with other people's computers, meaning you communicate directly – no middlemen required!
                        So, this magical internet money isn't owned by anyone and uses cryptography to secure the system. But you've already got apps for paying people – why should you care?
                        </div>
                        </div>
                        <div id='blockchain' style={{ paddingBottom: 30 }}>
                            <h2 style={{ fontSize: 40 }}>What is BlockChain?</h2>
                            <div style={{ fontSize: 22, lineHeight: '1.6', paddingLeft: 10 }}>
                                <br />
                        Blockchain is a specific type of database.<br />
                        It differs from a typical database in the way it stores information; blockchains store data in blocks that are then chained together.
                        As new data comes in it is entered into a fresh block. Once the block is filled with data it is chained onto the previous block, which makes the data chained together in chronological order.
                        Different types of information can be stored on a blockchain but the most common use so far has been as a ledger for transactions. <br /><br />
                        In Bitcoin’s case, blockchain is used in a decentralized way so that no single person or group has control—rather, all users collectively retain control.
                        Decentralized blockchains are immutable, which means that the data entered is irreversible. For Bitcoin, this means that transactions are permanently recorded and viewable to anyone.<br /><br />
                        In Bitcoin’s case, blockchain is used in a decentralized way so that no single person or group has control—rather, all users collectively retain control.
                        Decentralized blockchains are immutable, which means that the data entered is irreversible. For Bitcoin, this means that transactions are permanently recorded and viewable to anyone.

                         </div>
                        </div>
                        <div id='compraventa' style={{ paddingBottom: 30 }}>
                            <h2 style={{ fontSize: 40 }}>Our Platform</h2>
                            <br /><br />
                            <div id='assets' style={{ paddingLeft: 50,paddingBottom:50 }}>
                                <h3 style={{ fontSize: 30 }}>Assets</h3>
                                <div style={{ fontSize: 22, lineHeight: '1.6' }}>

                                    An <strong>asset</strong> is something containing economic value and/or future benefit.
                                On our platform we provide assets like Bitcoin, Litecoin, Etheruem, Ripple etc. You trade by buying and selling these assets.<br /><br />

                                Assets always exists in pairs. A pair defines that what assets will be involved in a transaction. For example if you buy LTCBTC, you are buying LTC (Litecoin) in exchange of BTC (Bitcoin).<br /><br />

                                Base asset vs Quote asset - <br /><br />

                                Base currency represents how much of the quote currency is needed for you to get one unit of the base currency. For example, if you were looking at the CAD/USD currency pair, the Canadian dollar would be the base currency and the U.S. dollar would be the quote currency.

                            </div></div>
                            <div  id='charts' style={{ paddingLeft: 50,paddingBottom:50 }}>
                                <h3 style={{ fontSize: 30 }}>Charts</h3>
                                <br/>
                                <img src='assets/images/learnPage/candlestick.jpeg' style={{height:'30vh', width:'40%', borderStyle:'groove' }}/>
                                <div style={{ fontSize: 22, lineHeight: '1.6' }}>

                                Candlesticks charts are mostly used to analyze the trading trend.<br/>
Each candle corresponds to a time interval. The endpoints of the box in the candle represents the price of the symbol at starting and end of the interval. If the closing price (price at the end) is more than opening price (price at the starting) then the candle is coloured green, otherwise it is colored red. The endpoints of the line, shows the highest and lowest price in the particular interval. 
                                    </div></div>
                                    <div id='orders' style={{ paddingLeft: 50,paddingBottom:50 }}>
                                <h3 style={{ fontSize: 30 }}>Orders</h3>
                                <br/><br/>
                               
                                <div style={{ fontSize: 22, lineHeight: '1.6' }}>

                                There are many different types of orders in the world of trading, each having different  behavior. Market Orders, Stop Orders and Limit Orders are different types of orders.
                                Our platform tries to resemble the working of market and stop orders.<br/>

                                Market orders do not require the price at which you need to sell/buy.<br/><br/> 
                                The price value is filled by the exchange. For famous cryptocurrencies (like on our platform), the orders are traded almost instantly. <br/><br/>

                                Stop Orders are traded when a certain price value hits. For example you want to buy BTC in exchange to USD, when its price hits 50,000 USD. In this case you can add the stop value to 50,000 and your order will be traded whenever the BTC hits 50,000 mark. For name sake, Stop orders are of 2 types explained below.<br/><br/>

                                </div>
                                <img src='assets/images/learnPage/buysell.jpeg' style={{height:'30vh', width:'55vw', borderStyle:'groove' }}/>
                                </div>
                                <div id='predictions' style={{ paddingLeft: 50,paddingBottom:50 }}>
                                <h3 style={{ fontSize: 30 }}>Predictions</h3>
                                <br/><br/>
                               
                                <div style={{ fontSize: 22, lineHeight: '1.6' }}>

                                Our platform predicts the prices after 1 day, 3 days and 1 week for every symbol.<br/><br/>

                                The predictions are made using<span style={{color:'blue'}}> exponentially weighted averages </span>and are based on the recent trends. We do not provide any gaurantee about the predictions but present a expected trend only.
                                </div>
                               
                                </div>
                                <div id='account' style={{ paddingLeft: 50,paddingBottom:50 }}>
                                <h3 style={{ fontSize: 30 }}>Account</h3>
                                <br/><br/>
                               
                                <div style={{ fontSize: 22, lineHeight: '1.6' }}>

                                User can register to Compra Venta using their Email ID. At any point of time, user may feel free to change their passwords or reset the account details.<br/><br/>

                                By Reseting account, we mean that user can undo all the transactions, cancel ongoing transactions and bring wallet to initial state.
                                </div>
                               
                                </div>
                        </div>
                        <div id='demo' style={{ paddingBottom: 30 }}>
                            <h2 style={{ fontSize: 40 }}>Demo</h2>
                            <div style={{ fontSize: 22, lineHeight: '1.6', paddingLeft: 10 }}>
                                <br />
                       

                         </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}



export default Learn;