import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './About.css'

export default function About() {
  return (
    <>

      <h2 className='hi-title'>Hi there!</h2>
      <h1 className='fouzia-title'>I'm Fouzia BENADIDA</h1>
      <Container fluid>
        <Row>
          <Col >
            <img className='logo' src="https://pbs.twimg.com/profile_images/1500089172970905600/YvWrH_iO_400x400.jpg" alt="" />
          </Col>
          <Col> </Col>

          <Col sm={12} md={8}>

            <p className='fouzi-prensentation'>
              I am Fouzia, I currently live in Istanbul. I am a hydraulic engineer from an initial liscence + master's degree.
              After thinking about an alternative, I realized that for some years now I have had a particular interest in trying to understand how programs and applications work.
              For 3 months I have been digging into the subject and it fascinates me. Coding seems particularly fun to me, satisfies my permanent desire to learn and brings me a great feeling of achievement when the code works.
              

              
            </p>

          </Col>

          <Col></Col>
        </Row>

      </Container>

    </>
  )
}


