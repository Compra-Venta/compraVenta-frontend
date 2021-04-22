import React, { useEffect, useState } from 'react';
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
  
  const GetPrediction = ()=> {

     props.getprediction({symbol: props.symbol, time: selectedInterval})
     const prediction = props.prediction
     console.log(prediction.prediction.prediction)
     var state = initialState;
     state.price = prediction.prediction
     setState(state)

     

  }

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
            Select Interval:
         <select onChange={event => {changeInterval(event.target.value);}} style={{height:'3rem',fontSize:'1.4rem'}}>
            {intervallist}
         </select> 
        {/* {initialState.price} */}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={GetPrediction}>Predict</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Predict;