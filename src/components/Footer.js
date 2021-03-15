import React from 'react'

function Footer() {
    return (
        <footer className="container-fluid mt-auto wrapper flex-grow-1" id="footer"style={{backgroundColor:'#192b39'}} >
            <div className="row contactF">
                <div className="row mr-auto ml-auto " style={{display:'flex',flexDirection:'column'}}>

                    <a href="#" style={{color:'white'}} target="_blank" rel="noopener noreferrer">Contact Us</a>

                    <a href="#" style={{color:'white'}} target="_blank" rel="noopener noreferrer">Meet the Collaborators</a>

                </div>
            </div>
            <p className="col-12 copyright" style={{color:'white'}}>Copyright © 2021</p>
        </footer>
    )
}

export default Footer;