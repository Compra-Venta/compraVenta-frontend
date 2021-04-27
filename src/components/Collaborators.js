import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardFooter, Container, Row, Col
  } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelopeSquare,
    faEnvelope
  } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer'
import CollabDash from './CollabDash';

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
                <Col sm='6' >
                    <div >
                    <Card style={{ margin: 'auto ', marginBlockEnd:'30px', marginBlockStart:'10px', width: "300px" }} >
                    <CardImg top style={{ margin: "auto", width: "300px", height: "250px" }} src={`assets/images/collaborators/${person.name}.png`} alt={person.name}/>
                    <CardBody style={{ margin: "auto", width: "100%"}}>
                        <CardTitle tag='h5' >{person.name}</CardTitle>
                        <CardSubtitle>Connect with me on</CardSubtitle>
                    </CardBody>
                    <CardFooter >
                        <a href={person.github} target='_blank' ><img src='https://github.githubassets.com/favicons/favicon.png' style={{ marginTop:'8px'}} alt="git-hub icon"/></a>
                        <a href={`mailto:${person.mail}`} target='_blank' ><img src='https://cdn.worldvectorlogo.com/logos/official-gmail-icon-2020-.svg' style={{ marginTop:'8px', paddingLeft:'30%', height:'38px'}} alt="mail icon" /></a>
                        <a href={person.linkedln} target='_blank' ><img style={{float: "right" }} src='https://img.icons8.com/fluent/50/000000/linkedin.png' alt="linked-in icon" /></a>
                    </CardFooter>
                    </Card>
                    </div>
                </Col>
            )
        } )
        return (
            <div>
                <div>
                    <CollabDash/>
                </div>
                <div style={{marginBlockStart:'10px', fontFamily:'Roboto' ,textAlign:'center'}}><h1>Meet the Team</h1></div>
                <Container>
                    <Row>
                        {collaboratorsData}
                    </Row>
                </Container>
                <Footer/>
            </div>
        )
    }
}

export default Collaborators
