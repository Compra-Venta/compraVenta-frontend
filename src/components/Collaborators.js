import React, { Component } from 'react'
// import {
//     faYoutube,
//     faFacebook,
//     faInstagram
//   } from "@fortawesome/free-brands-svg-icons";
import NavDash from './NavDashboard'

export class Collaborators extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[
                 {
                     name: 'Tanveer Sodhi',
                     mail: 'aseemmangla.bt19ele@pec.edu.in',
                     linkedln: 'https://www.linkedin.com/in/aseemmangla',
                     insta: 'https://www.instagram.com/mangla_aseem/',
                 },
                 {
                    name: 'Jaskaran Singh',
                    mail: 'aseemmangla.bt19ele@pec.edu.in',
                    linkedln: 'https://www.linkedin.com/in/aseemmangla',
                    insta: 'https://www.instagram.com/mangla_aseem/',
                },
                {
                    name: 'Daksh Verma',
                    mail: 'aseemmangla.bt19ele@pec.edu.in',
                    linkedln: 'https://www.linkedin.com/in/aseemmangla',
                    insta: 'https://www.instagram.com/mangla_aseem/',
                },
                {
                    name: 'Aseem Mangla',
                    mail: 'aseemmangla.bt19ele@pec.edu.in',
                    linkedln: 'https://www.linkedin.com/in/aseemmangla',
                    insta: 'https://www.instagram.com/mangla_aseem/',
                }
             ]
        }
    }
    
    render() {
        const AseemMangla = 'Aseem Mangla'
        const imgUrl = `assets/images/collaborators/${AseemMangla}.png`
        return (
            <div>
                <div>
                    <NavDash/>
                </div>
                <div 
                style={{
                    
                    backgroundImage: `url("${imgUrl}")`,
                    width: '400px',
                    height: '500px'
                    }}>
                        hihh
                        
                </div>
                <img src={`assets/images/collaborators/` + `Aseem Mangla` + `.png`} width='250px'/>

            </div>
        )
    }
}

export default Collaborators
