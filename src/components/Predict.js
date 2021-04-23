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
  const [resultState, setState] = useState({
      
  })
  // const [res]
    const [selectedInterval, changeInterval] = useState('1d')
    const intervallist = interval.map( (time) =>{ 
        return(<option>{`${time}`}</option>

    ) } )
  const toggle = () => setModal(!modal);
  // {isLoading: false, errMess: Error: Failed to fetch
    // at http://localhost:3000/static/js/main.chunk.js:11380:19, prediction: {…}}
//     errMess: Error: Failed to fetch at http://localhost:3000/static/js/main.chunk.js:11380:19
// message: "Failed to fetch"
// stack: "Error: Failed to fetch\n    at http://localhost:3000/static/js/main.chunk.js:11380:19"
// __proto__: Object
// isLoading: false
// prediction: {}
  const setData = () => {
    const prediction = props.prediction
    // setState(prediction)
    // console.log(resultState.error)
  }

  const GetPrediction = async ()=> {
    
     props.getprediction({symbol: props.symbol, time: selectedInterval})
    //  console.log(prediction.prediction.prediciton)
    //  var state = initialState;
    //  state.price = prediction.prediction.prediciton
    //  setState(prediction)
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
         {
           
         }
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