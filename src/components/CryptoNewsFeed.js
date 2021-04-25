import React, { Component } from 'react'
import ShowMoreText from 'react-show-more-text'
// global.fetch = require('node-fetch')
const cc = require('cryptocompare') 
// cc.setApiKey(process.env.REACT_APP_Crypto_Compare_API)


class CryptoNewsFeed extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             newsList: [],
             /*category: this.props.category,*/
             count: 10
        }
    }
    
    componentDidMount(){
        cc.newsList('EN')
    .then(newsList => {
    // console.log(newsList)
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

        const {newsList}=this.state;
        const {category}=this.props  ;
        /*console.log(category);*/
        var MyC=0;

        return (
            <>
                {
                   newsList.map( news=>{
                      
                       if (MyC<this.state.count){
                           
                        
                            if (news.categories.includes(category, 0) && news.body.length>0) {
                                MyC=MyC+1;
                                
                                return(
                        
                            <div className="container" style={{marginTop:'20px',display:'flex'}}>
                                <img src={news.imageurl} style={{maxHeight:'25px',maxWidth:'25px'}}/>
                                
                                <a href = {news.url} target="_blank" style={{color:'black',paddingLeft:'1.5%'}}><p >{news.title}</p></a>       
                                                                    
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
                   {
                        newsList.map( news=>{
                      
                            if (MyC<this.state.count){
                                
                             
                                 if (news.categories.includes(category, 0)) {
                                    return null;
                                 
                                 }
                                 
                                 else{
                                    MyC=MyC+1;
                                    /*console.log('2nd Try',MyC)*/
                                    return(
                           
                                    <div className="container" style={{marginTop:'20px',display:'flex'}}>
                                        <img src={news.imageurl} style={{maxHeight:'25px',maxWidth:'25px'}} />
                                        <a href = {news.url} target="_blank" style={{color:'black',paddingLeft:'1.5%'}}><p>{news.title}</p> </a>                                            
                                    </div>
                                    
                                    )
                                     
                                 }
                                
                            }
                         }
                        )
                   }                         
            </>
        )
    }
}

export default CryptoNewsFeed
