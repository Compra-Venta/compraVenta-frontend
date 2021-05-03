import React from 'react'
import { Card, CardBody, CardImg, CardTitle, PopoverBody, PopoverHeader, UncontrolledPopover } from 'reactstrap'
import AboutDash from './AboutDash'

function AboutUs() {
    return (
        <>
            <div>
                <AboutDash />
            </div>
            <div className='container-fluid' style={{fontFamily:'Roboto' , marginBlockStart:'20px'}}>
               <span><h1> Welcome to Compra Venta </h1></span>
               <div style={{margin:'1.5%'}}>
                   <h3>About CompraVenta</h3>
                   <p>
                   Today’s world has advanced a lot in terms of cryptocurrency exchange or digital
                    currency exchange and the main reason that these digital currencies are overtaking
                    physical currency is that it is not governed by any one single authority and is totally
                    secure since it uses the blockchain technology. It is becoming investors' choice to
                    trade into crypto currencies.  But since this concept is relatively new and many
                    people fear to adapt to invest in cryptocurrency, it has still not reached its potential.
                    Many people who trade into this market without any prior knowledge face severe
                    losses and fear using it again.<br/>
                    So our project is a website based on a virtual trading platform which will provide
                    budding investors a platform to dive into the trading of cryptocurrencies without
                    having any fear of losing anything.
                   </p>
               </div>
               <div style={{margin:'1.5%'}}>
                    <h3>Key Features</h3>
                    <div style={{display:'flex', margin:'2%'}}>
                        <div>
                            <Card style={{height:'200px', width:'200px'}} type='button' id='CandlePopOver'>
                            <CardImg  top src='assets/images/aboutus/candles.jpg' alt='virtual trading'/>
                            <CardBody>
                                <CardTitle>
                                    Virtual Trading
                                </CardTitle>
                            </CardBody>
                            </Card>
                            <UncontrolledPopover placement='bottom' target='CandlePopOver'>
                            <PopoverHeader>Virtual Trading</PopoverHeader>
                            <PopoverBody>Body</PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        <div>
                            <Card style={{height:'200px', width:'200px'}} type='button' id='TradePopOver'>
                            <CardImg  top src='assets/images/aboutus/trade.jpg' alt='market-stoploss'/>
                            <CardBody>
                                <CardTitle>
                                    Market and Stoploss Orders
                                </CardTitle>
                            </CardBody>
                            </Card>
                            <UncontrolledPopover placement='bottom' target='TradePopOver'>
                            <PopoverHeader>Market and Stoploss Orders</PopoverHeader>
                            <PopoverBody>Body</PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        <div>
                            <Card style={{height:'200px', width:'200px'}} type='button' id='PredictPopOver'>
                            <CardImg  top src='assets/images/aboutus/prediction.png' alt='predict'/>
                            <CardBody>
                                <CardTitle>
                                    Prediction
                                </CardTitle>
                            </CardBody>
                            </Card>
                            <UncontrolledPopover placement='bottom' target='PredictPopOver'>
                            <PopoverHeader>Prediction</PopoverHeader>
                            <PopoverBody>Body</PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        <div>
                            <Card style={{height:'200px', width:'200px'}} type='button' id='RatingPopOver'>
                            <CardImg  top src='assets/images/aboutus/rating.jpg' alt='Rating'/>
                            <CardBody>
                                <CardTitle>
                                    Rating System
                                </CardTitle>
                            </CardBody>
                            </Card>
                            <UncontrolledPopover placement='bottom' target='RatingPopOver'>
                            <PopoverHeader>Virtual Trading</PopoverHeader>
                            <PopoverBody>Body</PopoverBody>
                            </UncontrolledPopover>
                        </div>
                        <div>
                            <Card style={{height:'200px', width:'200px'}} type='button' id='NewsPopOver'>
                            <CardImg  top src='assets/images/aboutus/news.jpg' alt='News'/>
                            <CardBody>
                                <CardTitle>
                                    Live News
                                </CardTitle>
                            </CardBody>
                            </Card>
                            <UncontrolledPopover placement='bottom' target='NewsPopOver'>
                            <PopoverHeader>Live News</PopoverHeader>
                            <PopoverBody>Related news regarding cryptocurrencies and cryptocurrency
                            trading is refreshed on our platform in order to make users familiar with the
                            environment.</PopoverBody>
                            </UncontrolledPopover>
                        </div>                       
                    </div>
               </div>
            </div>
        </>
    )
}
export default AboutUs
