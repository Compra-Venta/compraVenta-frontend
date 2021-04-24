import React, { Component } from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
    FormFeedback,
    Spinner, Alert
  } from 'reactstrap';

export class Buy_Market extends Component {

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
    
    handleChange =(event) =>{
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    handleSubmit = async (event) => {
      
      const state = this.state
      await this.props.placeMarketOrder({email: '', base:state.coin_pair.slice(0,3), quote: state.coin_pair.slice(3), b_amount: state.amount, date: '2021-04-24', time: '23:48:15', side: 'BUY'})
      event.preventDefault()
      const status = this.props.marketOrder
      this.setState({
        status: status,
        showmsg: true
      })
      console.log('see status ', this.state.status)
  
    }

    render() {

        return (
            

            <Container className="SignIn /*border border-primary border-3*/" /*style={{backgroundColor:'white',borderRadius:'20px',border:'1px solid'}}*/>
            {/*<h2 style={{textAlign:'left'}} >{`Buy ${this.state.coin_pair.slice(0,3)}`} </h2>*/}
            <Form className="Buy-Market" onSubmit={this.handleSubmit} >
              <Col>
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
              </Col>
              <Col>
                <FormGroup>
                <label data-bn-type="text" for="Buy-Market-Amount" class="css-ef8yc4" style={{display: 'inline-block', textAlign: 'right' }}>
                    Amount
                </label>
                <Input
                    type="number"
                    name="amount"
                    // value={this.state.amount}
                    onChange={this.handleChange}
                    // valid={errors.Password === ''} invalid={errors.Password !== ''}
                    id="Buy-Market-Amount"
                    min={this.props.bp} step={this.props.bp}
                    placeholder={`${this.props.ba}`}
                    required
                  />
                
                </FormGroup>
              </Col>
              <Button type="submit" color="success" className='offset-5' >Buy</Button> 
            </Form>
            {
              this.state.showmsg?
              this.status.isLoading ?
              <div style={{textAlign:'center'}}><Spinner color='primary' /></div>:
              this.status.errMess == null ?
              <div style={{color:'deepskyblue', textAlign:'center'}}>
              <h5> {this.status.orderStatus.message}</h5>
              </div> :
              <div style={{color:'red', textAlign:'center'}}>
              <h5> {this.status.errMess.message}</h5>
              </div>:
              null
            }
          </Container>
            
        )
    }
}

export default Buy_Market
