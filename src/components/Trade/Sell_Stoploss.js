import React, { Component } from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
    FormFeedback,
    Spinner, Alert,UncontrolledAlert
  } from 'reactstrap';

export class Sell_Stoploss extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             coin_pair: '',
             stop: '0.0',
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

    handleSubmit = (event) => {
      event.preventDefault()
      event.target.reset()
      const state = this.state
      this.props.placeStopOrder(
        {email: '', base: this.props.ba, quote: this.props.qa, b_amount: state.amount, stop: state.stop, 
        date: new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate(), time: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() ,
        side: 'SELL'})
        this.setState({
          showmsg:true
        })
        setTimeout(() => this.setState({showmsg:false}),30000)
      /*const status = this.props.stopOrder
      if (status.errMess){
        if (status.errMess.message=="Cannot read property 'json' of undefined"){
          status.errMess.message='successful'}
          else{status.errMess.message=JSON.parse(status.errMess.message)}
        this.setState({
          status: status,
          showmsg: true
        }/*,() => console.log('see status err ', this.state.status,this.state.showmsg))
        
      }
      else{this.setState({
        status: status,
        showmsg: true
      }/*,() => console.log('see status no err ', this.state.status,this.state.showmsg))}*/
    }

    render() {
      const view= this.state.showmsg?
      this.props.stopOrder.isLoading ?
      <div style={{textAlign:'center'}}><Spinner color='primary' /></div>:
      this.props.stopOrder.errMess == null ?
      <div style={{ textAlign:'center'}}>
       <Alert color='success'isOpen={this.state.showmsg} toggle={this.dismissAlert}>
      <h5> {this.props.stopOrder.orderStatus.status}</h5>
      </Alert>
      </div> : /* this.props.stopOrder.errMess.message!=="successful" ?
      <div style={{ textAlign:'center'}}>
     <Alert color='danger' isOpen={this.state.showmsg} toggle={this.dismissAlert}>
      <h5> {this.props.stopOrder.errMess.message.msg}</h5>
      </Alert>
      </div> :*/this.props.stopOrder.errMess.message?
      <div style={{ textAlign:'center'}}>
      <Alert color='danger' isOpen={this.state.showmsg} toggle={this.dismissAlert}>
       <h5> {JSON.parse(this.props.stopOrder.errMess.message).message}</h5>
       </Alert> </div>:null:null
        return (
            <div>

<Container >
            {/*<h2 style={{textAlign:'left'}} >{`Sell ${this.state.coin_pair.slice(0,3)}`} </h2>*/}
            <Form className="Sell-Stoploss" onSubmit={this.handleSubmit} >
              
                <FormGroup>
                  <Label for='Stop-Price'>Stop</Label>
                  <Input
                    type="number"
                    name="stop"
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
              
                <FormGroup>
                <label data-bn-type="text" for="Sell-Stoploss-Amount" class="css-ef8yc4" style={{display: 'inline-block', textAlign: 'right' }}>
                    Amount
                </label>
                <Input
                    type="number"
                    name="amount"
                    // value={this.state.amount}
                    onChange={this.handleChange}
                    // valid={errors.Password === ''} invalid={errors.Password !== ''}
                    id="Sell-Stoploss-Amount"
                    min={this.props.bp} step={this.props.bp}
                    placeholder={`${this.props.ba}`}
                    required
                  />
                  {/* <FormFeedback>{errors.Password}</FormFeedback> */}
                </FormGroup>
             
              {/* <Col>
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
                {/* </FormGroup>
              </Col>
               */} 
              <Button type="submit" color="danger" block >{`Sell ${this.props.ba}`}</Button>
              <Col>
              {view}
              </Col>

            </Form>
          </Container>
            </div>
        )
    }
}

export default Sell_Stoploss
