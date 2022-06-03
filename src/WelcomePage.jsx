import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Image, Container, Row, Col } from 'react-bootstrap'
import logo from './img/pokemon-logo.png';
import "./WelcomePage.css";

export default function WelcomePage() {
  return (
    <Container className='welcomecontainer'>
      <Row>
        <Col>
        <Image variant="center" width="900" height="400" src={logo} />
        </Col>
        <Col as="h1">
          WELCOME TO POKEDEX
        </Col>
        <Col>
        <Link to={`/pokemon`}>
          <Button>
            View Pokemon
          </Button>
        </Link>
        </Col>
      </Row>
    </Container>

  )
}
