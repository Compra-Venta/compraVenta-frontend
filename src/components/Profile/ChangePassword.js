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
  const [showPassword, setShowPassword] = useState(false)

  const toggle = () =>{ 
    setModal(!modal);
    setShowMsg(true)
  };
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await props.changePassword({email: '',password:currentPassword, new_password:newPassword})
    // alert(email)
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

  return (
    <div>
     <div>
        <Button color="primary" size='md' onClick={toggle} style={{marginLeft:'30px'}}>Change Password</Button>{' '}
     </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Enter Registered Email ID</ModalHeader>
        { showmsg?
          <ModalBody className='text-center'>
            <Form className="changePassword" onSubmit={handleSubmit} >
              <Col>
                <FormGroup>
                  <Label for="examplePassword">Current Password</Label>
                  <div style={{display:'flex'}}>
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
                  <Button color='success' outline onClick={() => setShowPassword(!showPassword)} >
                    {
                      showPassword?
                      <FontAwesomeIcon icon={faEyeSlash} />:
                      <FontAwesomeIcon icon={faEye} /> 
                    }
                  </Button>
                  </div>
                  {/* <FormFeedback>{errors.Password}</FormFeedback> */}
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="examplePassword">New Password</Label>
                  <div style={{display:'flex'}}>
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
                  <Button color='success' outline onClick={() => setShowPassword(!showPassword)} >
                    {
                      showPassword?
                      <FontAwesomeIcon icon={faEyeSlash} />:
                      <FontAwesomeIcon icon={faEye} /> 
                    }
                  </Button>
                  </div>
                  <FormFeedback>{errors.newPassword}</FormFeedback>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="examplePassword">Confirm New Password</Label>
                  <Container>
                  <div style={{display:'flex'}}>
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
                  <Button color='success' outline onClick={() => setShowPassword(!showPassword)} >
                    {
                      showPassword?
                      <FontAwesomeIcon icon={faEyeSlash} />:
                      <FontAwesomeIcon icon={faEye} /> 
                    }
                  </Button>
                  
                  </div>
                  <FormFeedback>{errors.ConfirmPassword}</FormFeedback>
                  </Container>
                </FormGroup>
              </Col>
              <Button color="primary" >Submit</Button>{' '}
            </Form>
        </ModalBody>:
        <ModalBody >
           {
             status.isLoading ?
             <div style={{textAlign:'center'}}><Spinner color='primary' /></div>:
             status.errMess == null ?
             <div style={{color:'deepskyblue', textAlign:'center'}}>
             <h5> {status.Change_Passwordstatus.message}</h5>
            </div> :
            <div style={{color:'red', textAlign:'center'}}>
            <h5> {status.errMess.message}</h5>
           </div>
           }
        </ModalBody>
        }
        <ModalFooter>
          
          <Button color="secondary" onClick={toggle}>{showmsg?'Cancel':'Ok, Thanks'}</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ChangePassword
