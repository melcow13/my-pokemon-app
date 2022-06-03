import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Image, Container, Row, Col } from 'react-bootstrap'
import logo from './img/pokemon-logo.png';

export default function WelcomePage() {
  return (
    <Container className='welcomecontainer'>
      <Row>
        <Image variant="center" src={logo} />
        <Col as="h1">
          WELCOME TO POKEMON APP
        </Col>
        <Link to={`/pokemon`}>
          <Button>
            View Pokemon
          </Button>
        </Link>
      </Row>
    </Container>

  )
}
