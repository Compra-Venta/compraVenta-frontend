import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Container, Col, Form, FormGroup, Label, Input, FormFeedback, Spinner, Row } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function ChangePassword(props) {
  const [modal, setModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [showmsg, setShowMsg] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [submit, setSubmit] = useState(true);

  const toggle = () =>{ 
    setModal(!modal);
    setShowMsg(true)
  };
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    evt.target.reset()
    await props.changePassword({email: '',password:currentPassword, new_password:newPassword})
    // alert(email)
    setNewPassword('')
    setConfirmNewPassword('')
    setCurrentPassword('')
    setShowMsg(!showmsg)
  }

  const status = props.changePassword_status
  // console.log(status)

  const validate = (
       newPassword,
       ConfirmPassword,
  ) => {
    const errors = {
       newPassword: '',
       ConfirmPassword: '',
    }
    
    const reg_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (newPassword && !reg_password.test(newPassword) )
      errors.newPassword = 'Password must be a minimum of 8 characters including number, Upper, Lower And one special character.'
    if (newPassword && ConfirmPassword && newPassword !== ConfirmPassword)
      errors.ConfirmPassword = 'Password didn\'t matched! '
    
    return errors;
    }
    
    const errors = validate(newPassword, confirmNewPassword);
    const shouldSubmit = errors.ConfirmPassword || errors.newPassword ;

  return (
    <div>
     <div>
        <Button color="primary" size='md' onClick={toggle} style={{marginLeft:'30px'}}>Change Password</Button>{' '}
     </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Enter Registered Email ID</ModalHeader>
        <Container>
        { showmsg?
          <ModalBody className='text-center'>
            <Form className="changePassword" onSubmit={handleSubmit} >
              
              <Col>
                <FormGroup>
                  <Label for="examplePassword">Current Password</Label>
                  <Row>
                    <Col xs='10' style={{padding:0}}>
                  <Input
                    type={showPassword?'text':'password'}
                    name="Password"
                    value={currentPassword}
                    onChange={ event => {setCurrentPassword(event.target.value)}}
                    // valid={errors.Password === ''} invalid={errors.Password !== ''}
                    id="currentPassword"
                    placeholder="********"
                    required
                  />
                  </Col>
                  <Col xs='1' style={{padding:0}}>
                  <Button color='success' outline onClick={() => setShowPassword(!showPassword)} >
                    {
                      showPassword?
                      <FontAwesomeIcon icon={faEyeSlash} />:
                      <FontAwesomeIcon icon={faEye} /> 
                    }
                  </Button>
                  </Col>
                  </Row>
                  {/* <FormFeedback>{errors.Password}</FormFeedback> */}
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="examplePassword">New Password</Label>
                  <Row>
                  <Col xs="10" style={{padding:0}}>
                  <Input
                    type={showPassword?'text':'password'}
                    name="Password"
                    value={newPassword}
                    onChange={ event => {setNewPassword(event.target.value)}}
                    valid={errors.newPassword === ''} invalid={errors.newPassword !== ''}
                    id="newPassword"
                    placeholder="********"
                    required
                  />
                  <FormFeedback>{errors.newPassword}</FormFeedback>
                  </Col>
                  <Col xs='1' style={{padding:0}}>
                  <Button color='success' outline onClick={() => setShowPassword(!showPassword)} >
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
                  <Label for="examplePassword">Confirm New Password</Label>
                  
                 <Row>
                   <Col xs="10" style={{padding:0}}>
                  <Input
                    disabled={!newPassword}
                    type={showPassword?'text':'password'}
                    name="Password"
                    value={confirmNewPassword}
                    onChange={ event => {setConfirmNewPassword(event.target.value)}}
                    valid={errors.ConfirmPassword === ''} invalid={errors.ConfirmPassword !== ''}
                    id="confirmNewPassword"
                    placeholder="********"
                    required
                  />
                  <FormFeedback>{errors.ConfirmPassword}</FormFeedback>
                  </Col>
                  
                  <Col xs='1' style={{padding:0}}>
                  <Button color='success' outline onClick={() => setShowPassword(!showPassword)} >
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
              <Button disabled={shouldSubmit} color="primary" >Submit</Button>{' '}
            </Form>
        </ModalBody>:
        <ModalBody >
           {
             props.changePassword_status.isLoading ?
             <div style={{textAlign:'center'}}><Spinner color='primary' /></div>:
             props.changePassword_status.errMess == null ?
             <div style={{color:'deepskyblue', textAlign:'center'}}>
             <h5> {props.changePassword_status.Change_Passwordstatus.message}</h5>
            </div> :props.changePassword_status.errMess.message=="Cannot read property 'json' of undefined" ? null:
            <div style={{color:'red', textAlign:'center'}}>
            <h5> {props.changePassword_status.errMess.message}</h5>
           </div>
           }
        </ModalBody>
        }
        </Container>
        <ModalFooter>
          
          <Button color="secondary" onClick={toggle}>{showmsg?'Cancel':'Ok, Thanks'}</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ChangePassword
