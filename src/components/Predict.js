import React, {useState} from 'react'
import Modal from 'react-modal'
import { Button } from 'reactstrap'

function Predict() {
    const [modalIsOpen, setmodalIsOpen] =  useState(false)
    
    return (
        <div>
            <div className='row' style={{paddingRight:'20px'}}>
                <Button color="primary" size='md' className='ml-auto' 
                style={{width:'7rem',fontSize:'1.2rem'}}
                onClick={() => setmodalIsOpen(true)}>
                Predict</Button>{' '}
            </div>
            <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={() =>{setmodalIsOpen(false)}}>
            
                Predict Modal
                <div className='row' style={{paddingRight:'20px'}}>
                    <Button color="primary" size='md' className='ml-auto' 
                        style={{width:'7rem',fontSize:'1.2rem'}}
                        onClick={() => setmodalIsOpen(false)}>
                    Close</Button>{' '}
                </div>
            </Modal>
        </div>
    )
}

export default Predict
