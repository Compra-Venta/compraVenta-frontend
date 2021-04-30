# Compra-Venta

A Virtual Crypto Currency Trading Platform (frontend)

# Motivation

Our project is a website based on a virtual trading platform which will provide
budding investors a platform to dive into the trading of cryptocurrencies without
having any fear of losing anything.

# Screenshots
![alt text](https://github.com/Compra-Venta/compraVenta-frontend/blob/master/public/assets/images/learnPage/dashboard.png?raw=true)

# Tech/Framework Used
  * [Reactjs](https://reactjs.org/)
  * [React Redux](https://react-redux.js.org/)
  
# Features
* **User authentication**- Each user will be provided its own username and
password and details of the user will be stored in the database along with its
activities.
* **Virtual Trading**- Each user will be provided with some virtual money with
the help of which a user can trade into the choice of his own cryptocurrency
which will help a user well versed with cryptocurrency trading gradually.
* **Real-time price updation**- The actual price of each cryptocurrency will be
updated regularly without a long delay with the help of API’s.
* **Price Prediction of Cryptocurrency**- With the help of machine learning
model, we will be able to predict the price of cryptocurrency and trends in the
market.
* **Latest News**- Related news regarding cryptocurrencies and cryptocurrency
trading is refreshed on our platform in order to make users familiar with the
environment.
* **User Support**- If users need some assistance/clarification regarding
cryptocurrency trading, the model will help them accordingly.
* **Learn** - If users are not familiar about cryptotrading and other features
or want to furnish their knowledge, we have a provided a platform to learn

# API Reference
* **CandleStick Historical Data** - https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=15m
                    *(startdate and enddate also to be added in key parameter)*
* **News Feed**- https://min-api.cryptocompare.com/                    
   
# Web Sockets
* **24h ticker**- wss://stream.binance.com:9443/ws/{symbol}@ticker
* **kline CandleStick Data**- wss://stream.binance.com:9443/ws/BTCUSDT@kline_15m
* **Market Trades**- wss://stream.binance.com:9443/ws/{symbol}@trade
* **WatchList**- wss://stream.binance.com:9443/ws/!miniTicker@arr
## Installation

### Clone to your local repo

```
    git clone https://github.com/Compra-Venta/compraVenta-frontend.git
```

### Install dependencies

```
    npm install
```
# Contributors
* [**Tanveer Sodhi** ](https://github.com/TanveerSodhi "Connect on Github")
* [**Aseem Mangla** ](https://github.com/manglaaseem28 "Connect on Github")
* [**Jaskaran Singh** ](https://github.com/jaskaran-23 "Connect on Github")
* [**Daksh Verma** ](https://github.com/dakshverma2411/ "Connect on Github")


