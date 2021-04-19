import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faChrome,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";
import NavDash from './NavDashboard'

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
        const AseemMangla = 'Aseem Mangla'
        const imgUrl = `assets/images/collaborators/${AseemMangla}.png`
        const collaboratorsData = this.state.data.map( person => {
            return(
                    <div className='column' id='collaborator'>
                    <div className='card'>
                        <img className='collaborator-pic' src={`assets/images/collaborators/${person.name}.png`} />
                        <div className='handlebox'>
                        <div className='socialhandles' >
                            <a href={`mailto:${person.mail}`} target="_blank">
                                <FontAwesomeIcon icon={faChrome} size="4x" />
                            </a>
                            <a href={`${person.linkedln}`} target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} size="4x" />
                            </a>
                            <a href={`${person.github}`} target="_blank">
                                <FontAwesomeIcon icon={faGithub} size="4x" />
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className='colab-name'>
                        <h2>{`${person.name}`}</h2>
                    </div>
                    </div>
            )
        } )
        return (
            <div>
                <div>
                    <NavDash/>
                </div>
                <div className='row'>
                    {collaboratorsData}
                </div>
            </div>
        )
    }
}

export default Collaborators

/*
<h1>
  <img src="../../assets/website team/website-team.png" class="heading" />
</h1>
<div class="d-flex team-grid mx-5">
  <div
    *ngFor="let member of websiteTeam; index as i"
    class="image rounded card border-0 shadow"
  >
    <img
      *ngIf="member.event == true"
      src="..//..//assets/website team/{{ member.gif }}"
      class="card-img-top"
      alt="{{ member.name }}"
    />
    <img
      src="..//..//assets/website team/{{ member.image }}"
      class="card-img-top"
      alt="{{ member.name }}"
    />
    <div class="overlay d-flex">
      <a *ngIf="member.fb" class="fa fa-facebook" href="{{ member.fb }}"></a>
      <a
        *ngIf="member.linked"
        class="fa fa-linkedin"
        href="{{ member.linked }}"
      ></a>
      <a
        *ngIf="member.insta"
        class="fa fa-instagram"
        href="{{ member.insta }}"
      ></a>
    </div>
    <div class="card-body text-center">
      <h4>
        {{ member.name }}
      </h4>
      <p>
        <b>{{ member.post }}</b>
      </p>
    </div>
  </div>
</div>
*/