import React, { Component } from 'react'
import {
  Container, Col, Row, Form,
  FormGroup, Label, Input,
  Button, FormFeedback,Spinner,Alert
} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from 'react-router';

class SignUp extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       FullName: '',
       EmailId: '',
       PhoneNo: '',
       DOB: '' ,
       Country: '',
       Password: '',
       showPassword: false,
       ConfirmPassword: '',
       touched: {
        FullName: false,
        EmailId: false,
        PhoneNo: false,
        DOB: false ,
        Country: false,
        Password: false,
        ConfirmPassword: false,
        showmsg:false
       }

    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);


  }
  
  handleInputChange =(event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }

  handleSubmit = async (event) => {
    event.preventDefault();
    /* alert(`
    UserData:
    Name: ${this.state.FullName}
    EmailId: ${this.state.EmailId}
    PhoneNo: ${this.state.PhoneNo}
    `) */
    var td= new Date().getFullYear()
    var dob= new Date(this.state.DOB).getFullYear()
    var age = td - dob
    await this.props.registerUser({ name: this.state.FullName, password: this.state.Password, email:this.state.EmailId ,age : age ,country: this.state.Country ,PhoneNo: this.state.PhoneNo });
    console.log(this.props.register)
    if( this.props.register.isRegistered){
      alert('Registered Successfully')
      this.props.onClick();
    }
     else{
      this.setState({
        showmsg:true
      })
    }
    
  }
  dismissAlert = () =>{
    this.setState({
      showmsg:false
    })
  }
  handleBlur = (field) => (event) => {
    this.setState({
      touched: {...this.state.touched, [field]: true}
    });
  }

  validate = (
       FullName,
       EmailId,
       PhoneNo,
       DOB ,
       Country,
       Password,
       ConfirmPassword,
  ) => {
    const errors = {
       FullName: '',
       EmailId: '',
       PhoneNo: '',
       DOB: '' ,
       Country: '',
       Password: '',
       ConfirmPassword: '',
    }
    
    const reg_num = /^[+][0-9]{2}\s*[0-9]{5}\s*[0-9]{5}/ ;
    const reg_dob = /^[0-9]{2}[-][0-9]{2}[-][0-9]{4}/ ;
    const reg_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (this.state.touched.FullName && FullName.length < 2)
       errors.FullName = 'Name should be greater than 2 characters';
    if (this.state.touched.EmailId && EmailId.split('').filter(x => x === '@').length !== 1)
       errors.EmailId = 'Name should be greater than 2 characters';
    if (this.state.touched.PhoneNo && !reg_num.test(PhoneNo) )
       errors.PhoneNo = 'Number not Valid';
    
    
    if (this.state.touched.Country && Country.length < 4)
      errors.Country = 'Enter Valid Country Name';
    if (this.state.touched.Password && !reg_password.test(Password) )
      errors.Password = 'Password must be a minimum of 8 characters including number, Upper, Lower And one special character.'
    if(this.state.touched.Password && this.state.touched.ConfirmPassword && Password !== ConfirmPassword)
      errors.ConfirmPassword = 'Password didn\'t matched! '
        

    
    return errors;
    }

  render() {

    const errors = this.validate(
       this.state.FullName,
       this.state.EmailId,
       this.state.PhoneNo,
       this.state.DOB ,
       this.state.Country,
       this.state.Password,
       this.state.ConfirmPassword,
    );
    const shouldSubmit = errors.ConfirmPassword || errors.Country || errors.DOB || errors.EmailId || errors.FullName || errors.Password || errors.Password || errors.PhoneNo  ;
   const showPassword = this.state.showPassword;
   const view= !(this.props.register.isRegistered)?
              this.props.register.isLoading ?
              <div style={{textAlign:'center'}}><Spinner color='primary' /></div>:
              this.props.register.errMess ?
              <div style={{ textAlign:'center'}}>
              <Alert color='danger' isOpen={this.state.showmsg} toggle={this.dismissAlert}>
              <h5>{this.props.register.errMess.message}</h5>
              </Alert>
              </div>:
              null:null

    return (
      
        <Container className="SignUp border border-primary me border-3" style={{backgroundColor:'white',width:'500px',maxWidth:'100%',borderRadius:'20px',borderWidth:'200px'}}>
            <h2 style={{textAlign:'center'}}>Register</h2>
            <Form className="Sign-Up-Form" onSubmit={this.handleSubmit} >
            <Col>
                <FormGroup>
                  <Label >Name</Label>
                  <Input type="text" name="FullName" id="User-FullName"
                    value={this.state.FullName}
                    onChange={this.handleInputChange} valid={errors.FullName === ''} invalid={errors.FullName !==''} onBlur={this.handleBlur('FullName')}
                    placeholder="Full Name"
                    required
                  />
                  <FormFeedback>{errors.FullName}</FormFeedback>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label >Email</Label>
                  <Input 
                    type="email"
                    name="EmailId"
                    id="User-Email"
                    value={this.state.EmailId}
                    onChange={this.handleInputChange} valid={errors.EmailId === ''} invalid={errors.EmailId !==''} onBlur={this.handleBlur('EmailId')}
                    placeholder="youremail@email.com"
                    required
                  />
                  <FormFeedback>{errors.EmailId}</FormFeedback>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Phone Number</Label>
                  <Input
                    type="text"
                    name="PhoneNo"
                    id="User-Phone"
                    value={this.state.PhoneNo}
                    onChange={this.handleInputChange} valid={errors.PhoneNo === ''} invalid={errors.PhoneNo !==''} onBlur={this.handleBlur('PhoneNo')}
                    placeholder="+91 9999999999"
                    // pattern="[+][0-9]{2}(| )[0-9]{10}"
                    required
                  />
                  <FormFeedback>{errors.PhoneNo}</FormFeedback>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>DOB</Label>
                  <Input
                    type="date"
                    name="DOB"
                    id="User-DOB"
                    value={this.state.DOB}
                    onChange={this.handleInputChange} valid={errors.DOB === ''} invalid={errors.DOB !==''}  onBlur={this.handleBlur('DOB')}
                    placeholder="DD/MM/YYYY"
                    required
                  />
                  <FormFeedback>{errors.DOB}</FormFeedback>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Country</Label>
                  <Input
                    type="text"
                    name="Country"
                    id="User-Country"
                    value={this.state.Country}
                    onChange={this.handleInputChange} valid={errors.Country=== ''} invalid={errors.Country !==''} onBlur={this.handleBlur('Country')}
                    placeholder="India"
                    required
                  />
                  <FormFeedback>{errors.Country}</FormFeedback>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label >Password</Label>
                  <Row>
                   <Col xs="10" style={{paddingRight:'0px'}}>
                  <Input
                    type={showPassword ?'text':'password'}
                    name="Password"
                    id="Sign-Up-Password"
                    value={this.state.Password}
                    onChange={this.handleInputChange} valid={errors.Password === ''} invalid={errors.Password} onBlur={this.handleBlur('Password')}
                    placeholder="********"
                    required 
                  />
                  <FormFeedback>{errors.Password}</FormFeedback>
                  </Col>

                  <Col xs='1' style={{padding:0}}>
                  <Button type='button' color='success' outline onClick={()=>{this.setState({showPassword: !showPassword})}} >
                    {
                      showPassword?
                      <FontAwesomeIcon icon={faEyeSlash} />:
                      <FontAwesomeIcon icon={faEye} /> 
                    }
                  </Button>  
                  </Col>
                  </Row>
                  
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label >Confirm Password</Label>
                  
                  <Row>
                   <Col xs="10" style={{paddingRight:'0px'}}>
                  <Input
                    type={showPassword?'text':'password'}
                    name="ConfirmPassword"
                    id="Confirm-Password"
                    value={this.state.ConfirmPassword}
                    onChange={this.handleInputChange} valid={errors.ConfirmPassword === ''} invalid={errors.ConfirmPassword !==''} onBlur={this.handleBlur('ConfirmPassword')}
                    placeholder="********"
                    required
                  />
                  <FormFeedback>{errors.ConfirmPassword}</FormFeedback>
                  </Col>

                  <Col xs='1' style={{padding:0}}>
                  <Button type='button' color='success' outline onClick={()=>{this.setState({showPassword: !showPassword})}} >
                    {
                      showPassword?
                      <FontAwesomeIcon icon={faEyeSlash} />:
                      <FontAwesomeIcon icon={faEye} /> 
                    }
                  </Button>
                  </Col>
                  </Row>
                  
                </FormGroup>
              </Col>
              <Button disabled={shouldSubmit} type="submit" color="primary" >Submit</Button>
              <div style={{textAlign:'center'}}>Already Registered?&nbsp;&nbsp;&nbsp; <button className='regB' type='button' onClick={this.props.onClick}  style={{color:'blue',borderColor:'transparent',backgroundColor:'transparent'}}>Sign In </button></div>
              <Col>{view}</Col>
            </Form>
          </Container>
      
    )
  }
}

export default SignUp;

