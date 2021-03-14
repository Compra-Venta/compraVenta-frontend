import React, { Component } from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
  } from 'reactstrap';

class SignIn extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
             EmailId: '',
             Password: '',
             touched: {
              EmailId: false,
              Password: false,
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange =(event) =>{
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    handleSubmit = (event) => {
      event.preventDefault();
    }

    render() {
        return (
          <Container className="SignIn" style={{backgroundColor:'whitesmoke',borderRadius:`50px 20px`,width:'500px'}}>
            <h2 style={{textAlign:'center'}} >Sign In</h2>
            <Form className="Sign-In-Form" onSubmit={this.handleSubmit} >
              <Col>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="EmailId"
                    id="Sign-In-Email"
                    value={this.state.EmailId}
                    onChange={this.handleInputChange} 
                    placeholder="youremail@email.com"
                    required
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="Password"
                    value={this.state.Password}
                    onChange={this.handleInputChange}
                    id="Sign-In-Password"
                    placeholder="********"
                    required
                  />
                </FormGroup>
              </Col>
              <Button color="primary" className='offset-5' >Submit</Button>
              <div style={{textAlign:'center'}}>
              <div><a href='#'>Forget Password?</a></div>
              <div>New to Compra Venta?&nbsp;&nbsp;&nbsp;<button className='regB' onClick={this.props.onClick} style={{color:'blue',borderColor:'transparent',backgroundColor:'transparent'}}>&nbsp;Register Here</button></div>
              </div>
            </Form>
          </Container>
        )
      }
}

export default SignIn
