import React, { useState } from 'react';
import { useStore } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Predict = (props) => {
 /* const {
    buttonLabel,
    className
  } = props;*/
  
  const [modal, setModal] = useState(false);
  const [interval] =useState([ '1d', '7d', '15d' ]);
  const [initialState, setState] = useState({
      price:'',
      isHigh: true
  })
    const [selectedInterval, changeInterval] = useState('1d')
    const intervallist = interval.map( (time) =>{ 
        return(<option>{`${time}`}</option>

    ) } )
  const toggle = () => setModal(!modal);

  return (
    <div>
     <div className='row' style={{paddingRight:'20px'}}>
                <Button color="primary" size='md' className='ml-auto' 
                style={{width:'7rem',fontSize:'1.2rem'}}
                onClick={toggle}>
                Predict</Button>{' '}
            </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>CompraVenta Prediction System</ModalHeader>
        <ModalBody className='text-center'>
            Select the time:-
        <select style={{height:'3rem',fontSize:'1.4rem'}}>
            {intervallist}
         </select>           
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Predict</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Predict;