import React, { Component } from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
    FormFeedback,
  } from 'reactstrap';

export class Sell_Market extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             coin_pair: 'BTCUSDT',
             price: '5555.55',
             amount: '0.0',
             total: '0.0'
        }
    }
    

    render() {
        return (
            <div>

<Container className="SignIn border border-primary border-3" style={{backgroundColor:'white',width:'500px',borderRadius:'20px',border:'1px solid'}}>
            <h2 style={{textAlign:'left'}} >{`Sell ${this.state.coin_pair.slice(0,3)}`} </h2>
            <Form className="Sell-Market" onSubmit={this.handleSubmit} >
              <Col>
                <FormGroup>
                  <Label for='Coin-Price'>Price</Label>
                  <Input
                    type="text"
                    name="coinprice"
                    id="Coin-Price"
                    // value={this.state.price}
                    onChange={this.handleInputChange} 
                    disabled
                    // valid={errors.EmailId === ''} invalid={errors.EmailId !== ''}
                    placeholder={`Market | ${this.state.coin_pair.slice(3)}`}
                    required
                  />
                  {/* <FormFeedback>{errors.EmailId}</FormFeedback> */}
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                <label data-bn-type="text" for="Sell-Market-Amount" class="css-ef8yc4" style={{display: 'inline-block', textAlign: 'right' }}>
                    Amount
                </label>
                <Input
                    type="text"
                    name="amount"
                    // value={this.state.amount}
                    onChange={this.handleInputChange}
                    // valid={errors.Password === ''} invalid={errors.Password !== ''}
                    id="Sell-Market-Amount"
                    min="0.00000100" step="0.00000100"
                    placeholder={`${this.state.coin_pair.slice(0,3)}`}
                    required
                  />
                {/* <Input
                    type="text"
                    name="total"
                    value={this.state.total}
                    onChange={this.handleInputChange}
                    // valid={errors.Password === ''} invalid={errors.Password !== ''}
                    id="Sell-Market-Amount"
                    placeholder={`${this.state.coin_pair.slice(3)}`}
                    required
                  />  */}
                  {/* <FormFeedback>{errors.Password}</FormFeedback> */}
                </FormGroup>
              </Col>
              <Button type="submit" color="primary" className='offset-5' >Sell</Button>
              
            </Form>
          </Container>
            </div>
        )
    }
}

export default Sell_Market
