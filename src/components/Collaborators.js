import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardFooter, Container, Row, Col, UncontrolledCollapse
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
                     bio: "Tanveer Sodhi is CSE Undergraduate at PEC, Chandigarh. He is passionate about emerging technologies and how they are becoming vital part of everyone's life. He has a keen interest in Python, Web Development and Mathematics"
                 },
                 {
                    name: 'Jaskaran Singh',
                    mail: 'jaskaransingh.bt19cse@pec.edu.in',
                    linkedln: 'https://www.linkedin.com/in/jaskaran-singh-351426192/',
                    github: 'https://github.com/jaskaran-23',
                    bio: 'Jaskaran Singh is a CSE sophomore at PEC, Chandigarh. He is passionate about taking up new challenges and solving real life problems which drove him to have a huge interest in Competitive Programming.He is also keen in Blockchain Technology and is currently working on to improve his Machine Learning skills.'
                },
                {
                    name: 'Daksh Verma',
                    mail: 'dakshverma.bt19cse@pec.edu.in',
                    linkedln: 'https://www.linkedin.com/in/daksh-verma/',
                    github: 'https://github.com/dakshverma2411/',
                    bio: 'Daksh Verma is a Computer Science Undergraduate at PEC, Chandigarh. He is passionate about developing application that solves real life problems. He also has a keen interest in fields like Android Development, API development, Machine learning and Deep learning.'
                },
                {
                    name: 'Aseem Mangla',
                    mail: 'aseemmangla.bt19ele@pec.edu.in',
                    linkedln: 'https://www.linkedin.com/in/aseemmangla',
                    github: 'https://github.com/manglaaseem28',
                    bio: 'Aseem Mangla is a Computer Science Undergraduate at PEC, Chandigarh. He is always ready to do something which can serve to society well and enjoy organising events which helped him to work in a team effectively. He has a keen interest in Web Development, Machine Learning and Blockchain Technology.'
                }
             ]
        }
    }
    
    render() {
        var id = 1;
        const collaboratorsData = this.state.data.map( person => {
            return(
                <Col >
                    <div >
                    <Card style={{  width: "300px" }} >
                    <CardImg top style={{  width: "300px", height: "250px" }} src={`assets/images/collaborators/${person.name}.png`} alt={person.name}/>
                    <CardBody style={{width: "100%"}}>
                        <CardTitle tag='h5' >{person.name}</CardTitle>
                        <Button outline color="primary" id={`toogler_${id}`} style={{ marginBottom: '1rem' }}>
                         Bio
                        </Button>
                        <UncontrolledCollapse toggler={`toogler_${id++}`} >
                            <CardText style={{fontSize:'15px'}} >{person.bio}</CardText>
                        </UncontrolledCollapse>
                        <CardText><i>Connect with {person.name} on</i></CardText>

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
                    <CollabDash auth={this.props.auth}/>
                </div>
                <div style={{marginBlockStart:'10px', fontFamily:'Roboto' ,textAlign:'center'}}><h1>Meet the Team</h1></div>
                <div className='container-fluid' style={{paddingLeft:'40px'}}>
                <Row>
                {collaboratorsData}
                </Row>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Collaborators
