import React, { useState,useEffect } from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
    FormFeedback,Spinner,UncontrolledAlert,Alert
  } from 'reactstrap';
import { Link, useHistory, withRouter } from "react-router-dom";  
import ForgetPassword from './ForgetPassword';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function SignIn(props) {

  const [initialState, setState] = useState({
        EmailId: '',
        Password: '',
        touched: {
        EmailId: false,
        Password: false,
 }
})
  const [showPassword, setShowPassword] = useState(false)
  const [showmsg, setShowMsg] = useState(true);
   
   const history = useHistory();
  useEffect(() => {
    //console.log('auth',props.auth.isAuthenticated)
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
      setShowMsg(true)
    }
    const dismissAlert = () =>{
      setShowMsg(false)
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
        var err
        if(props.auth.errMess){
            err =JSON.parse(props.auth.errMess.message)}
            else{
              err={error:''}
            }
        const view= !(props.auth.isAuthenticated)?
              props.auth.isLoading ?
              <div style={{textAlign:'center'}}><Spinner color='primary' /></div>:
              props.auth.errMess ?
              <div style={{ textAlign:'center'}}>
              <Alert color='danger' isOpen={showmsg} toggle={dismissAlert}>
              <h5>{err.error}</h5>
              </Alert>
              </div>:
              null:null
       
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
                  <div style={{display:'flex'}}>
                  <Input
                    type={showPassword?'text':'password'}
                    name="Password"
                    value={initialState.Password}
                    onChange={handleInputChange}
                    valid={errors.Password === ''} invalid={errors.Password !== ''}
                    id="Sign-In-Password"
                    placeholder="********"
                    required
                  />
                  <Button color='success' outline onClick={()=>{setShowPassword(!showPassword)}} >
                    {
                      showPassword?
                      <FontAwesomeIcon icon={faEyeSlash} />:
                      <FontAwesomeIcon icon={faEye} /> 
                    }
                  </Button>
                  </div>
                  <FormFeedback>{errors.Password}</FormFeedback>
                </FormGroup>
              </Col>
              <Button type="submit" color="primary" >Submit</Button>
              <div style={{textAlign:'center'}}>
              <div>
                <ForgetPassword newPassword={props.newPassword} newPassword_status={props.newPassword_status}/>
              </div>
              <div>New to Compra Venta?&nbsp;&nbsp;&nbsp;<button className='regB' onClick={props.onClick} style={{color:'dodgerblue',borderColor:'transparent',backgroundColor:'transparent', fontFamily:'cursive'}}>&nbsp;Register Here</button></div>
              </div>
              <Col>
              {view}
              </Col>
            </Form>
          </Container>
        )
      }


export default withRouter(SignIn)
