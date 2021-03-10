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
          <Container className="SignIn">
            <h2>Sign In</h2>
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
              <Button color="primary">Submit</Button>
              <div>
              <div><a href='#'>Forget Password?</a></div>
              <div>New to Compra Venta?<a href='#'>Sign In</a></div>
              </div>
            </Form>
          </Container>
        )
      }
}

export default SignIn
