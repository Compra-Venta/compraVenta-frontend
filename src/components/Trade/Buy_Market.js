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

    handleSubmit =  (event) => {
      event.preventDefault()
      event.target.reset()
      const state = this.state
       this.props.placeMarketOrder(
        {email: '', base: this.props.ba, quote: this.props.qa, b_amount: state.amount, 
        date: new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate(), time: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() ,
        side: 'BUY'})
        this.setState({
          showmsg:true,
        })
        setTimeout(() => this.setState({showmsg:false}),30000)

     /*  const status = this.props.marketOrder
      //console.log('bs',status)
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
    }/*,() => console.log('see status no err ', this.state.status,this.state.showmsg))} */
    }

    render() {

         const view= this.state.showmsg?
              this.props.marketOrder.isLoading ?
              <div style={{textAlign:'center'}}><Spinner color='primary' /></div>:
              this.props.marketOrder.errMess == null ?
              <div style={{ textAlign:'center'}}>
               <Alert color='success'isOpen={this.state.showmsg} toggle={this.dismissAlert}>
              <h5> {this.props.marketOrder.orderStatus.status}</h5>
              </Alert>
              </div> : /* this.props.marketOrder.errMess.message!=="successful" ?
              <div style={{ textAlign:'center'}}>
             <Alert color='danger' isOpen={this.state.showmsg} toggle={this.dismissAlert}>
              <h5> {this.props.marketOrder.errMess.message.msg}</h5>
              </Alert>
              </div> :*/this.props.marketOrder.errMess.message?
              <div style={{ textAlign:'center'}}>
              <Alert color='danger' isOpen={this.state.showmsg} toggle={this.dismissAlert}>
               <h5> {JSON.parse(this.props.marketOrder.errMess.message).msg}</h5>
               </Alert> </div>:null:null

        return (
            

            <Container className="themed-container" fluid={true} /*style={{backgroundColor:'white',borderRadius:'20px',border:'1px solid'}}*/>
            {/* <h4 style={{textAlign:'left'}} >{`Buy ${this.state.coin_pair.slice(0,3)}`} </h4> */}
            <Form className="Buy-Market" onSubmit={this.handleSubmit} >
              
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
            
              <Button block type="submit" color="success" >{`Buy ${this.props.ba}`}</Button> 
              <Col>
              {view}
              </Col>
            </Form>
            
          </Container>
            
        )
    }
}

export default Buy_Market
