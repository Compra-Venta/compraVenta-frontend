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

<Container className="SignIn /*border border-primary border-3*/" /*style={{backgroundColor:'white',borderRadius:'20px',border:'1px solid'}}*/>
            {/*<h2 style={{textAlign:'left'}} >{`Buy ${this.state.coin_pair.slice(0,3)}`} </h2>*/}
            <Form className="Buy-Stoploss" onSubmit={this.handleSubmit} >
              <Col>
                <FormGroup>
                  <Label for='Stop-Price'>Stop</Label>
                  <Input
                    type="number"
                    name="stopprice"
                    id="Stop-Price"
                    // value={this.state.stop}
                    onChange={this.handleChange}
                    min={this.props.qp} step={this.props.qp}
                    // valid={errors.EmailId === ''} invalid={errors.EmailId !== ''}
                    placeholder={`Stop | ${this.props.qa}`}
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
                    type="number"
                    name="amount"
                    // value={this.state.amount}
                    onChange={this.handleChange}
                    // valid={errors.Password === ''} invalid={errors.Password !== ''}
                    id="Buy-Stoploss-Amount"
                    min={this.props.bp} step={this.props.bp}
                    placeholder={`${this.props.ba}`}
                    required
                  />
                  {/* <FormFeedback>{errors.Password}</FormFeedback> */}
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for='Total'>Total</Label>
                  <Input
                    type="number"
                    name="total"
                    id="Total"
                    // value={this.state.total}
                    onChange={this.handleChange} 
                    min={this.props.qp} step={this.props.qp}
                    // valid={errors.EmailId === ''} invalid={errors.EmailId !== ''}
                    placeholder={`${this.props.qa}`}
                    required
                  />
                  {/* <FormFeedback>{errors.EmailId}</FormFeedback> */}
                </FormGroup>
              </Col>
              
              <Button type="submit" color="success" className='offset-5' >Buy</Button>
              
            </Form>
          </Container>
            </div>
        )
    }
}

export default Buy_Stoploss
