import React, { Component } from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
    FormFeedback,
    Spinner, Alert,UncontrolledAlert
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

    /*dismissAlert = () =>{
      this.setState({
        showmsg:false
      })
    }*/
    
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
      await this.props.placeMarketOrder({email: '', base: this.props.ba, quote: this.props.qa, b_amount: state.amount, date: '2021-04-24', time: '23:48:15', side: 'BUY'})
      
      const status = this.props.marketOrder
      this.setState({
        status: status,
        showmsg: true
      })
      console.log('see status ', this.state.status)
  
    }

    render() {

         const view= this.state.showmsg?
              this.state.status.isLoading ?
              <div style={{textAlign:'center'}}><Spinner color='primary' /></div>:
              this.state.status.errMess == null ?
              <div style={{ textAlign:'center'}}>
               <UncontrolledAlert color='success'>
              <h5> {this.state.status.orderStatus.status}</h5>
              </UncontrolledAlert>
              </div> :
              <div style={{ textAlign:'center'}}>
             <UncontrolledAlert color='danger'>
              <h5> {this.state.status.errMess.message}</h5>
              </UncontrolledAlert>
              </div>:
              null

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
              <Col>
              {view}
              </Col>
            </Form>
            
          </Container>
            
        )
    }
}

export default Buy_Market
