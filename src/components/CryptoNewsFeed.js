import React, { Component } from 'react'
// global.fetch = require('node-fetch')
const cc = require('cryptocompare') 
cc.setApiKey(process.env.loREACT_APP_Crypto_Compare_API)
// cc.setApiKey('b2eb473a23a76d4d420cf88bb8c580e5c34b39af7591808ad6fa612796e95bcd')

class CryptoNewsFeed extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             newsList: [],
             category: 'BTC',
             count: 3
        }
    }
    
    componentDidMount(){
        cc.newsList('EN')
    .then(newsList => {
    console.log(newsList)
    this.setState({
        newsList: newsList
    })
  //[ 
  //  {
  //    id:  "708235"
  //    guid: "https://www.cryptoglobe.com/latest/2018/11/china-cryptocurrency-mining-machines-are-reportedly-being-sold-according-to-their-weight/"
  //    published_on: 1542886256
  //    imageurl: "https://images.cryptocompare.com/news/cryptoglobe/fwMg0080000.jpeg"
  //    title: "China: Cryptocurrency Mining Machines Reportedly Being Sold According to Their Weight"
  //    url: "https://www.cryptoglobe.com/latest/2018/11/china-cryptocurrency-mining-machines-are-reportedly-being-sold-according-to-their-weight/"
  //    source:  "cryptoglobe"
  //    body: "Cryptocurrency mining machines are reportedly being sold in China according to their weight as miners who haven’t been able to make a profit are seemingly getting rid of their old models to get some of their investment back."
  //    tags:  ""
  //    categories:  "Mining|Asia|Business"
  //    upvotes:  "0"
  //    downvotes:  "0"
  //    lang:  "EN"
  //    source_info: {
  //      name:  "CryptoGlobe"
  //      lang:  "EN"
  //      img: "https://images.cryptocompare.com/news/default/cryptoglobe.png"
  //    }
  //  }
  //  ....
  //]
})
    .catch(console.error)
}

    render() {

        const {newsList, category} =this.state;
        var MyC=0;

        return (
            <div>
                {
                   newsList.map( news=>{
                      
                       if (MyC<this.state.count){
                           
                        
                            if (news.categories.includes(category, 0)) {
                                MyC=MyC+1;
                                return(
                        
                            <div>
                                {/*<img src={news.imageurl} />*/}
                                <a href = {news.url} > <p style={{color:'gray'}}>{news.body}</p> </a>               
                            </div>
                            )
                            }
                            
                            else{
                                return null;
                            }
                           
                       }
                    }
                   )
                   }
                   
                
            </div>
        )
    }
}

export default CryptoNewsFeed
