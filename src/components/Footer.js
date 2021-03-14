import React from 'react'

function Footer() {
    return (
        <footer className="container-fluid mt-auto wrapper flex-grow-1" id="footer"style={{backgroundImage:`url('/assets/images/bg3.jpg')`}} >
            <div className="row contactF">
                <div className="row mr-auto ml-auto " style={{display:'flex',flexDirection:'column'}}>

                    <a href="#" className='links' target="_blank" rel="noopener noreferrer">Contact Us</a>

                    <a href="#" className='links' target="_blank" rel="noopener noreferrer">Meet the Collaborators</a>

                </div>
            </div>
            <p className="col-12 copyright">Copyright © 2021</p>
        </footer>
    )
}

export default Footer;