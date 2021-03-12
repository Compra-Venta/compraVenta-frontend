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
        }
    }
    

    render() {
        return (
          <Container className="SignIn" style={{backgroundColor:'whitesmoke',borderRadius:`50px 20px`,width:'500px'}}>
            <h2 style={{textAlign:'center'}} >Sign In</h2>
            <Form className="Sign-In-Form">
              <Col>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="Sign-In-Email"
                    placeholder="myemail@email.com"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="Sign-In-Password"
                    placeholder="********"
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
