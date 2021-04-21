import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faChrome,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";
import NavDash from './NavDashboard'
import Footer from './Footer'

export class Collaborators extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[
                 {
                     name: 'Tanveer Sodhi',
                     mail: 'tanveersodhi.bt19cse@pec.edu.in',
                     linkedln: 'https://www.linkedin.com/in/tanveer-sodhi-89329b190',
                     github: 'https://github.com/TanveerSodhi',
                 },
                 {
                    name: 'Jaskaran Singh',
                    mail: 'jaskaransingh.bt19cse@pec.edu.in',
                    linkedln: 'https://www.linkedin.com/in/jaskaran-singh-351426192/',
                    github: 'https://github.com/jaskaran-23',
                },
                {
                    name: 'Daksh Verma',
                    mail: 'dakshverma.bt19cse@pec.edu.in',
                    linkedln: 'https://www.linkedin.com/in/daksh-verma/',
                    github: 'https://github.com/dakshverma2411/',
                },
                {
                    name: 'Aseem Mangla',
                    mail: 'aseemmangla.bt19ele@pec.edu.in',
                    linkedln: 'https://www.linkedin.com/in/aseemmangla',
                    github: 'https://github.com/manglaaseem28',
                }
             ]
        }
    }
    
    render() {
        const collaboratorsData = this.state.data.map( person => {
            return(
                    <div className='column' id='collaborator'>
                    <div className='card'>
                        <img className='collaborator-pic' src={`assets/images/collaborators/${person.name}.png`} />
                        <div className='handlebox'>
                        <div className='socialhandles' >
                            <a href={`mailto:${person.mail}`} target="_blank">
                                <FontAwesomeIcon icon={faChrome} size="3x" />
                            </a>
                            <a href={`${person.linkedln}`} target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} size="3x" />
                            </a>
                            <a href={`${person.github}`} target="_blank">
                                <FontAwesomeIcon icon={faGithub} size="3x" />
                            </a>
                        </div>
                        </div>
                        <div className='colab-name'>
                            <h2>{`${person.name}`}</h2>
                        </div>
                    </div>
                    </div>
            )
        } )
        return (
            <div>
                <div>
                    <NavDash/>
                </div>
                <div style={{textAlign:'center', margin:'5%',fontFamily:'wonderbar', background: '#ffa529', padding: '2%'}}>
                    <h2>Meet the Team</h2>
                </div>
                <div className='row' style={{background: 'rgb(0, 191, 255, 0.85)', margin:'3%'}}>
                    {collaboratorsData}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Collaborators
