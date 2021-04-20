import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Container, Col, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

function ChangePassword() {
  const [modal, setModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [showmsg, setShowMsg] = useState(true);
  const toggle = () =>{ 
    setModal(!modal);
    setShowMsg(true)
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setShowMsg(!showmsg)
    // alert(email)
}
  return (
    <div>
     <div>
        <Button color="primary" size='md' onClick={toggle} style={{marginLeft:'30px'}}>Change Password</Button>{' '}
     </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Enter Registered Email ID</ModalHeader>
        { showmsg?
          <ModalBody className='text-center'>
            <Form className="Sign-In-Form" onSubmit={handleSubmit} >
              <Col>
                <FormGroup>
                  <Label for="examplePassword">Current Password</Label>
                  <Input
                    type="password"
                    name="Password"
                    value={currentPassword}
                    onChange={ event => {setCurrentPassword(event.target.value)}}
                    // valid={errors.Password === ''} invalid={errors.Password !== ''}
                    id="Sign-In-Password"
                    placeholder="********"
                    required
                  />
                  {/* <FormFeedback>{errors.Password}</FormFeedback> */}
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="examplePassword">New Password</Label>
                  <Input
                    type="password"
                    name="Password"
                    value={newPassword}
                    onChange={ event => {setNewPassword(event.target.value)}}
                    // valid={errors.Password === ''} invalid={errors.Password !== ''}
                    id="Sign-In-Password"
                    placeholder="********"
                    required
                  />
                  {/* <FormFeedback>{errors.Password}</FormFeedback> */}
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="examplePassword">Confirm New Password</Label>
                  <Input
                    type="password"
                    name="Password"
                    value={confirmNewPassword}
                    onChange={ event => {setConfirmNewPassword(event.target.value)}}
                    // valid={errors.Password === ''} invalid={errors.Password !== ''}
                    id="Sign-In-Password"
                    placeholder="********"
                    required
                  />
                  {/* <FormFeedback>{errors.Password}</FormFeedback> */}
                </FormGroup>
              </Col>
              <Button color="primary" >Submit</Button>{' '}
            </Form>
        </ModalBody>:
        <ModalBody >
          <div style={{color:'deepskyblue', textAlign:'center'}}>
           <h5> Password Updated</h5>
          </div>
        </ModalBody>
        }
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>Submit</Button>{' '} */}
          <Button color="secondary" onClick={toggle}>{showmsg?'Cancel':'Ok, Thanks'}</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ChangePassword
