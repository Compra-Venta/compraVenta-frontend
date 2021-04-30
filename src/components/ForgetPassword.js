import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Container, Col, Form, FormGroup, Label, Input, FormFeedback, Spinner } from 'reactstrap';

const ForgetPassword = (props) => {

  const [modal, setModal] = useState(false);
  const [email, setEmail] =useState('');
  const [showmsg, setShowMsg] = useState(true);
  const toggle = () =>{ 
    setModal(!modal);
    setShowMsg(true)
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    evt.target.reset()
    setShowMsg(!showmsg)
    // alert(email)
  }
  const NewPassword = () => {
    // newPassword={this.props.newPassword} newPassword_status={this.props.newPassword_status}
    props.newPassword(email)
    // const status = props.newPassword_status;
    // console.log('Status',status)
    setShowMsg(!showmsg)
    
  }
    var resultState = props.newPassword_status;
    // console.log('Status',resultState)
  

  return (
    <div>
     <div  style={{color:'blue', fontFamily:'cursive'}} onClick={toggle}>
        <a href='#'>Forget Password</a>
     </div>
      <Modal id='get_newPassword' isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Enter Registered Email ID</ModalHeader>
        { showmsg?
          <ModalBody className='text-center'>
            <Form className="Sign-In-Form" onSubmit={handleSubmit} >
              <Col>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="EmailId"
                    id="Sign-In-Email"
                    value = {email}
                    onChange={ event => {setEmail(event.target.value)} } 
                    // valid={errors.EmailId === ''} invalid={errors.EmailId !== ''}
                    placeholder="Registered Email Id"
                    required
                  />
                  {/* <FormFeedback>{errors.EmailId}</FormFeedback> */}
                </FormGroup>
              </Col>
              <Button onClick={NewPassword} color="primary" >Submit</Button>{' '}
            </Form>
        </ModalBody>:
        <ModalBody >
          {
           resultState.isLoading ? 
            <div style={{textAlign:'center'}}><Spinner color='primary' /></div>:
            resultState.errMess == null ? 
            <div style={{color:'deepskyblue', textAlign:'center'}} >{resultState.new_Passwordstatus.message}</div> :
            <div style={{color:'red', textAlign:'center'}} >{resultState.errMess.message}</div>
         }
        </ModalBody>
        }
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>Submit</Button>{' '} */}
          <Button color={showmsg?'warning':resultState.errMess == null ? 'success' : 'danger'} onClick={toggle}>{showmsg?'Cancel':resultState.errMess == null ? 'Ok, Thanks' : 'Oops! Try Again'}</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ForgetPassword;