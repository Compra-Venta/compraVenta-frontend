import React from 'react'
import { Card, CardBody, CardImg, CardTitle, PopoverBody, PopoverHeader, UncontrolledPopover, Toast,ToastHeader,ToastBody } from 'reactstrap'
import AboutDash from './AboutDash'
import Footer from './Footer'

function AboutUs() {
    return (
        <>
            <div>
                <AboutDash />
            </div>
            <div className='container-fluid' style={{fontFamily:'Roboto' , marginBlockStart:'20px'}}>
               <span><h1  style={{fontSize:50}}> Welcome to Compra Venta </h1></span>
               <hr/>
               <div className='container-fluid'>
            

                   <h1>About CompraVenta</h1>
                   
                   <div className='container-fluid'>
                   <p>
                   <img src="assets/images/aboutus/desktop.png" style={{float:'right',maxHeight:'100%',width:"58%" ,height:'70%'}}/>
                   
                   <div style={{height:'100%',fontSize:'1.7rem',padding:15}}>
                   Today’s world has advanced a lot in terms of cryptocurrency exchange or digital
                    currency exchange and the main reason that these digital currencies are overtaking
                    physical currency is that it is not governed by any one single authority and is totally
                    secure since it uses the blockchain technology. It is becoming investors' choice to
                    trade into crypto currencies.  But since this concept is relatively new and many
                    people fear to adapt to invest in cryptocurrency, it has still not reached its potential.
                    Many people who trade into this market without any prior knowledge face severe
                    losses and fear using it again.<br/><br/>
                    So our project is a website based on a virtual trading platform which will provide
                    budding investors a platform to dive into the trading of cryptocurrencies without
                    having any fear of losing anything.
                    
                    </div>
                    </p>
                    </div>
                    
                   
               </div>
               <div className='container-fluid'>
               {/* <div style={{margin:'1.5%'}}>
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
                    </div>*/}
                    <div className='container-fluid' style={{padding:10}}>
                        <hr/>
                        <h1>Features:-</h1>
                        <div className='row justify-content-md-center' style={{padding:10}}>
                        <div className='col-md-4 offset-md-1'>
                        <Toast style={{width:'100%',height:'100%'}}>
          <ToastHeader icon='info'>
           <h3> Virtual Trading</h3>
          </ToastHeader>
          <ToastBody>
              <p style={{fontSize:20}}>
            <img src='assets/images/aboutus/candles.jpg' style={{height:'170px', width:'170px', float:'left'}}/>
            Each user will be provided with virtual money of $50,000 with
the help of which a user can trade into the choice of his own cryptocurrency
which will help a user well versed with cryptocurrency trading gradually.
</p>
          </ToastBody>
        </Toast >
                            </div>
                    <div className='col-md-4'>
                        <Toast style={{width:'100%',height:'100%'}}>
          <ToastHeader icon='warning'>
          <h4> Market and Stoploss Orders</h4>
          </ToastHeader>
          <ToastBody >
          <p style={{fontSize:20}}>
            <img src='assets/images/aboutus/trade.jpg' style={{height:'170px', width:'170px', float:'left'}}/>
            Our platform tries to resemble the working of market and stop orders.Market orders do not require the price at which you need to sell/buy.
            Stop Orders are traded when a certain price value hits.Compra Venta provides user a feature to cancel any open order if the order is not placed yet.
            </p>
          </ToastBody>
        </Toast>
                            </div>
                            </div>
                    <div className='row justify-content-md-center' style={{padding:10}}>
                    <div className='col-md-4 offset-md-1'>
                        <Toast style={{width:'100%',height:'100%'}}>
          <ToastHeader icon='warning'>
          <h3> Prediction</h3>
          </ToastHeader>
          <ToastBody>
          <p style={{fontSize:20}}>
            <img src='assets/images/aboutus/prediction.png' style={{height:'170px', width:'170px', float:'left'}}/>
            Our platform predicts the prices after 1 day, 3 days and 1 week for every symbol.
            The predictions are made using exponentially weighted averages and are based on the recent trends
            With the help of machine learning
model, we will be able to predict the price of cryptocurrency and trends in the
market.
            </p>
          </ToastBody>
        </Toast>
                            </div>
                    <div className='col-md-4'>
                        <Toast style={{width:'100%',height:'100%'}}>
          <ToastHeader icon='info'>
          <h3> Rating System</h3>
          </ToastHeader>
          <ToastBody>
          <p style={{fontSize:20}}>
            <img src='assets/images/aboutus/rating.jpg' style={{height:'170px', width:'170px', float:'left'}}/>
            Our platform is providing user with a rating system feature which is based on the profit earned by the user to keep them motivated.This will motivate them to trade by analysing more even without any risk! 
            </p>
          </ToastBody>
        </Toast>
                            </div>
                    </div>
                    <div className='row justify-content-md-center' style={{padding:10}}>
                    <div className='col-md-4 offset-md-1'>
                        <Toast style={{width:'100%',height:'100%'}}>
          <ToastHeader icon='info'>
            <h3>Live News</h3>
          </ToastHeader>
          <ToastBody>
          <p style={{fontSize:20}}>
            <img src='assets/images/aboutus/news.jpg' style={{height:'170px', width:'170px', float:'left'}}/>Related news regarding cryptocurrencies and cryptocurrency
trading is refreshed on our platform in order to make users familiar with the
environment.</p>
          </ToastBody>
        </Toast>
                            </div>
                            <div className='col-md-4'>
                            <Toast style={{width:'100%',height:'100%'}}>
          <ToastHeader icon='warning'>
              <h3>Watchlist</h3>
            
          </ToastHeader>
          <ToastBody>
          <p style={{fontSize:20}}>
            <img src='assets/images/aboutus/watchlist.png' style={{height:'170px', width:'170px', float:'left'}}/>
            An investor or trader may create a watchlist of several CryptoCurrencies to make more informed and opportune investment decisions. A watchlist can help an investor track various currencies in a single view.
            Investors track the list to analyze price movements and spot trading opportunities.
            </p>
          </ToastBody>
        </Toast>
        </div>
                            </div>
                    </div>
                    </div>
                    
            </div>
            <Footer/>
        </>
    )
}
export default AboutUs
