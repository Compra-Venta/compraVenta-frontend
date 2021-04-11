import React, {useState} from 'react'
import Modal from 'react-modal'
import { Button } from 'reactstrap'

function Predict() {
    const [modalIsOpen, setmodalIsOpen] =  useState(false);
    const [interval] =useState([ '1d', '7d', '15d' ]);
    const [selectedInterval, changeInterval] = useState('1d')
    const intervallist = interval.map( (time) =>{ 
        return(<option>{`${time}`}</option>

    ) } )

    return (
        <div>
            <div className='row' style={{paddingRight:'20px'}}>
                <Button color="primary" size='md' className='ml-auto' 
                style={{width:'7rem',fontSize:'1.2rem'}}
                onClick={() => setmodalIsOpen(true)}>
                Predict</Button>{' '}
            </div>
            <Modal 
            isOpen={modalIsOpen} 
            shouldCloseOnOverlayClick={false} 
            onRequestClose={() =>{setmodalIsOpen(false)}}
            style={{
                overlay: {
                    position: 'fixed',
                    top: '2%',
                    left: 0,
                    right: 0,
                    bottom: '55%',
                    backgroundColor: 'rgba(255, 255, 255, 0.75)',
                    backgroundColor: 'lavender'
                  },
                  content: {
                    position: 'absolute',
                    top: '40px',
                    left: '40px',
                    right: '40px',
                    bottom: '40px',
                    border: '1px solid #ccc',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px'
                  }
                
            }}
            >
            
                Predict Modal
                <select 
                    style={{height:'3rem',fontSize:'1.4rem'}}
                >
                    {intervallist}
                </select>
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
