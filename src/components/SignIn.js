import React, { useState,useEffect } from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
    FormFeedback,
  } from 'reactstrap';
import { Link, useHistory, withRouter } from "react-router-dom";  
import ForgetPassword from './ForgetPassword';

function SignIn(props) {

  const [initialState, setState] = useState({
        EmailId: '',
        Password: '',
        touched: {
        EmailId: false,
        Password: false,
 }
})
   
 const history = useHistory();
 useEffect(() => {
   console.log('auth',props.auth.isAuthenticated)
     if (props.auth.isAuthenticated) history.push('/dashboard');
     
 })
    
   const handleInputChange =(event) =>{
      const target = event.target;
      const value = target.value;
      const name = target.name;

      setState({
        ...initialState,
        [name]: value
      });
    }

   const handleSubmit = (event) => {
      event.preventDefault();
      props.loginUser({email : initialState.EmailId, password: initialState.Password})
    }

    const validate = ( EmailId, Password, ) => {

      const errors = {
        EmailId: '',
        Password: '',
      }

      
       // validation need to be done

      return errors;

    }

    

        const errors = validate(
          initialState.EmailId,
          initialState.Password,
        );

        return (
          <Container className="SignIn border border-primary border-3" style={{backgroundColor:'white',width:'500px',borderRadius:'20px',border:'1px solid'}}>
            <h2 style={{textAlign:'center'}} >Sign In</h2>
            <Form className="Sign-In-Form" onSubmit={handleSubmit} >
              <Col>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="EmailId"
                    id="Sign-In-Email"
                    value={initialState.EmailId}
                    onChange={handleInputChange} 
                    valid={errors.EmailId === ''} invalid={errors.EmailId !== ''}
                    placeholder="youremail@email.com"
                    required
                  />
                  <FormFeedback>{errors.EmailId}</FormFeedback>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="Password"
                    value={initialState.Password}
                    onChange={handleInputChange}
                    valid={errors.Password === ''} invalid={errors.Password !== ''}
                    id="Sign-In-Password"
                    placeholder="********"
                    required
                  />
                  <FormFeedback>{errors.Password}</FormFeedback>
                </FormGroup>
              </Col>
              <Button type="submit" color="primary" >Submit</Button>
              <div style={{textAlign:'center'}}>
              <div><ForgetPassword/></div>
              <div>New to Compra Venta?&nbsp;&nbsp;&nbsp;<button className='regB' onClick={props.onClick} style={{color:'blue',borderColor:'transparent',backgroundColor:'transparent'}}>&nbsp;Register Here</button></div>
              </div>
            </Form>
          </Container>
        )
      }


export default withRouter(SignIn)
