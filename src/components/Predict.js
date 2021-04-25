import React, { useEffect, useState } from 'react';
import { useStore } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Spinner, Alert } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const Predict = (props) => {
 /* const {
    buttonLabel,
    className
  } = props;*/
  
    const [modal, setModal] = useState(false);
    const [interval] =useState([ '1d', '3d', '1w' ]);
  
    const [showmsg, setShowMsg] = useState(true);
    const [selectedInterval, changeInterval] = useState('1d')
    const intervallist = interval.map( (time) =>{ 
        return(<option>{`${time}`}</option>

    ) } )
    
    const toggle = () =>{ 
      setModal(!modal);
      setShowMsg(true)
    };
  
  const GetPrediction = async ()=> {
    
    setShowMsg(false) 
    await props.getprediction({symbol: props.symbol, time: selectedInterval})
    
  }

  const prediction = props.prediction;
  // console.log(prediction)

  const currentPrice = props.currentPrice;
  const isHigh = prediction.prediction.prediction > currentPrice;

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
           null :
           prediction.isLoading ? 
           <Spinner color='primary' />:
           prediction.errmess == null ? 
           <div style={{color:'deepskyblue', textAlign:'center'}}>
              <Alert color={ isHigh ? 'success' : 'danger'} >
                <h4 className='col'>{`Predicted Price: ${parseFloat(prediction.prediction.prediction).toPrecision(8)}`}</h4>
                <FontAwesomeIcon size='2x' icon={isHigh ? faCaretUp : faCaretDown} />
                </Alert> </div> :
           <div style={{color:'red', textAlign:'center'}}>
             <Alert color='danger' ><h4>{prediction.errMess.message}</h4></Alert></div> 
           
         }
        </ModalBody>
        <ModalFooter>
          {!showmsg ? null : <Button color="primary" onClick={GetPrediction}>Predict</Button>}
          <Button color={showmsg?'warning':prediction.errMess == null ? 'success' : 'danger'} onClick={toggle}>{showmsg?'Cancel':prediction.errMess == null ? 'Ok, Thanks' : 'Oops! Try Again'}</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Predict;