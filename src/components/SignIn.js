import React, { Component } from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
    FormFeedback,
  } from 'reactstrap';
import ForgetPassword from './ForgetPassword';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

class SignIn extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
             EmailId: '',
             Password: '',
             showPassword: false,
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

    validate = ( EmailId, Password, ) => {

      const errors = {
        EmailId: '',
        Password: '',
      }

      
       // validation need to be done

      return errors;

    }

    render() {

        const errors = this.validate(
          this.state.EmailId,
          this.state.Password,
        );
        const showPassword = this.state.showPassword

        return (
          <Container className="SignIn border border-primary border-3" style={{backgroundColor:'white',width:'500px',borderRadius:'20px',border:'1px solid'}}>
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
                    value={this.state.Password}
                    onChange={this.handleInputChange}
                    valid={errors.Password === ''} invalid={errors.Password !== ''}
                    id="Sign-In-Password"
                    placeholder="********"
                    required
                  />
                  <Button color='success' outline onClick={()=>{this.setState({showPassword: !showPassword})}} >
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
              <div><ForgetPassword/></div>
              <div>New to Compra Venta?&nbsp;&nbsp;&nbsp;<button className='regB' onClick={this.props.onClick} style={{color:'blue',borderColor:'transparent',backgroundColor:'transparent'}}>&nbsp;Register Here</button></div>
              </div>
            </Form>
          </Container>
        )
      }
}

export default SignIn
