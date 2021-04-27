import React, { Component } from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
    FormFeedback,
    Spinner, Alert, UncontrolledAlert
  } from 'reactstrap';

export class Sell_Market extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             coin_pair: 'BTCUSDT',
             price: '5555.55',
             amount: '0.0',
             total: '0.0',
             status: {},
             showmsg: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
  dismissAlert = () =>{
      this.setState({
        showmsg:false
      })
    }
    
    handleChange =(event) =>{
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    handleSubmit = async (event) => {
      event.preventDefault()
      const state = this.state
      await this.props.placeMarketOrder(
        {email: '', base: this.props.ba, quote: this.props.qa, b_amount: state.amount, 
        date: new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate(), time: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() ,
        side: 'SELL'})

      const status = this.props.marketOrder
      if (status.errMess){
        if (status.errMess.message=="Cannot read property 'json' of undefined"){
          status.errMess.message='successful'}
          else{status.errMess.message=JSON.parse(status.errMess.message)}
        this.setState({
          status: status,
          showmsg: true
        }/*,() => console.log('see status err ', this.state.status,this.state.showmsg)*/)
        
      }
      else{this.setState({
        status: status,
        showmsg: true
      }/*,() => console.log('see status no err ', this.state.status,this.state.showmsg)*/)}
  
    }

    render() {
      const view= this.state.showmsg?
              this.state.status.isLoading ?
              <div style={{textAlign:'center'}}><Spinner color='primary' /></div>:
              this.state.status.errMess == null ?
              <div style={{ textAlign:'center'}}>
               <Alert color='success'isOpen={this.state.showmsg} toggle={this.dismissAlert}>
              <h5> {this.state.status.orderStatus.status}</h5>
              </Alert>
              </div> : this.state.status.errMess.message!=="successful" ?
              <div style={{ textAlign:'center'}}>
             <Alert color='danger' isOpen={this.state.showmsg} toggle={this.dismissAlert}>
              <h5> {this.state.status.errMess.message.msg}</h5>
              </Alert>
              </div>:
              <div style={{ textAlign:'center'}}>
              <Alert color='success' isOpen={this.state.showmsg} toggle={this.dismissAlert}>
               <h5> {this.state.status.errMess.message}</h5>
               </Alert> </div>:null

        return (
            

            <Container >
            {/*<h2 style={{textAlign:'left'}} >{`Sell ${this.state.coin_pair.slice(0,3)}`} </h2>*/}
            <Form className="Sell-Market" onSubmit={this.handleSubmit} >
              
                <FormGroup>
                  <Label for='Coin-Price'>Price</Label>
                  <Input
                    type="text"
                    name="coinprice"
                    id="Coin-Price"
                    // value={this.state.price}
                    onChange={this.handleChange} 
                    disabled
                    // valid={errors.EmailId === ''} invalid={errors.EmailId !== ''}
                    placeholder={`Market | ${this.props.qa}`}
                    required
                  />
                  {/* <FormFeedback>{errors.EmailId}</FormFeedback> */}
                </FormGroup>
              
                <FormGroup>
                <label data-bn-type="text" for="Sell-Market-Amount" class="css-ef8yc4" style={{display: 'inline-block', textAlign: 'right' }}>
                    Amount
                </label>
                <Input
                    type="number"
                    name="amount"
                    // value={this.state.amount}
                    onChange={this.handleChange}
                    // valid={errors.Password === ''} invalid={errors.Password !== ''}
                    id="Sell-Market-Amount"
                    min={this.props.bp} step={this.props.bp}
                    placeholder={`${this.props.ba}`}
                    required
                  />
                
                </FormGroup>
              
              <Button type="submit" color="danger" block >Sell</Button> 
              <Col>
              {view}
              </Col>
            </Form>
          
          </Container>
            
        )
    }
}

export default Sell_Market
