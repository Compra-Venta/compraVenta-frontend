import React, { Component } from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
    FormFeedback,
  } from 'reactstrap';

export class Buy_Stoploss extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             coin_pair: 'BTCUSDT',
             stop: '',
             limit: '',
             amount: '0.0',
             total: '0.0'
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange =(event) =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;
  
        this.setState({
          [name]: value
        });
      }

    render() {
        return (
            <div>

<Container className="Buy_Stoploss border border-primary border-3" style={{backgroundColor:'white',width:'500px',borderRadius:'20px',border:'1px solid'}}>
            <h2 style={{textAlign:'left'}} >{`Buy ${this.state.coin_pair.slice(0,3)}`} </h2>
            <Form className="Buy-Stoploss" onSubmit={this.handleSubmit} >
              <Col>
                <FormGroup>
                  <Label for='Stop-Price'>Stop</Label>
                  <Input
                    type="text"
                    name="stopprice"
                    id="Stop-Price"
                    // value={this.state.stop}
                    onChange={this.handleChange} 
                    // valid={errors.EmailId === ''} invalid={errors.EmailId !== ''}
                    placeholder={`Stop | ${this.state.coin_pair.slice(3)}`}
                    required
                  />
                  {/* <FormFeedback>{errors.EmailId}</FormFeedback> */}
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for='Limit-Price'>Limit</Label>
                  <Input
                    type="text"
                    name="limitprice"
                    id="Limit-Price"
                    // value={this.state.limit}
                    onChange={this.handleChange} 
                    // valid={errors.EmailId === ''} invalid={errors.EmailId !== ''}
                    placeholder={`Limit | ${this.state.coin_pair.slice(3)}`}
                    required
                  />
                  {/* <FormFeedback>{errors.EmailId}</FormFeedback> */}
                </FormGroup>
              </Col>
              
              <Col>
                <FormGroup>
                <label data-bn-type="text" for="Buy-Stoploss-Amount" class="css-ef8yc4" style={{display: 'inline-block', textAlign: 'right' }}>
                    Amount
                </label>
                <Input
                    type="text"
                    name="amount"
                    // value={this.state.amount}
                    onChange={this.handleChange}
                    // valid={errors.Password === ''} invalid={errors.Password !== ''}
                    id="Buy-Stoploss-Amount"
                    min="0.00000100" step="0.00000100"
                    placeholder={`${this.state.coin_pair.slice(0,3)}`}
                    required
                  />
                  {/* <FormFeedback>{errors.Password}</FormFeedback> */}
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for='Total'>Total</Label>
                  <Input
                    type="text"
                    name="total"
                    id="Total"
                    // value={this.state.total}
                    onChange={this.handleChange} 
                    // valid={errors.EmailId === ''} invalid={errors.EmailId !== ''}
                    placeholder={`${this.state.coin_pair.slice(3)}`}
                    required
                  />
                  {/* <FormFeedback>{errors.EmailId}</FormFeedback> */}
                </FormGroup>
              </Col>
              
              <Button type="submit" color="primary" className='offset-5' >Buy</Button>
              
            </Form>
          </Container>
            </div>
        )
    }
}

export default Buy_Stoploss
