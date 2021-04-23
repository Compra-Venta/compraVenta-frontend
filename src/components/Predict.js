import React, { useEffect, useState } from 'react';
import { useStore } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap';

const Predict = (props) => {
 /* const {
    buttonLabel,
    className
  } = props;*/
  
  const [modal, setModal] = useState(false);
  const [interval] =useState([ '1d', '3d', '1w' ]);
  const [resultState, setState] = useState({
      isLoading: true,
      errmess: null,
      prediction : {price:0,
                    isHigh:true}
  })

    const [selectedInterval, changeInterval] = useState('1d')
    const intervallist = interval.map( (time) =>{ 
        return(<option>{`${time}`}</option>

    ) } )
    const [showmsg, setShowMsg] = useState(true);
    const toggle = () =>{ 
      setModal(!modal);
      setShowMsg(true)
    };

  const GetPrediction = ()=> {
    
     props.getprediction({symbol: props.symbol, time: selectedInterval})
    // //  console.log(prediction.prediction.prediciton)
    // //  var state = initialState;
    // //  state.price = prediction.prediction.prediciton
    // //  setState(prediction)
    // //  prediction = props.prediction
    const prediction = props.prediction
    var state = resultState
    resultState.isLoading = prediction.isLoading
    resultState.errmess = prediction.errmess
    resultState.prediction = prediction.prediction
    setShowMsg(!showmsg)
    // // setState(prediction)
    //  console.log(resultState)
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
         </select> <br/>
         {
           showmsg ? 
           resultState.isLoading ? 
           null:
           <Spinner color='primary' />:
           resultState.errmess === null ? 
           <div style={{color:'deepskyblue', textAlign:'center'}}>{resultState.prediction.prediction}</div> :
           <div style={{color:'red', textAlign:'center'}}>{resultState.errMess}</div> 
           
         }
        </ModalBody>
        <ModalFooter>
          {!showmsg ? null : <Button color="primary" onClick={GetPrediction}>Predict</Button>}
          <Button color={showmsg?'warning':resultState.errMess == null ? 'success' : 'danger'} onClick={toggle}>{showmsg?'Cancel':resultState.errMess == null ? 'Ok, Thanks' : 'Oops! Try Again'}</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Predict;