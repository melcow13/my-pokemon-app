import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button, Card } from 'react-bootstrap'

export default function WelcomePage() {
  return (
    <Container>
        <Card>
            <Card.Title>
            Welcome to Pokemon App
            </Card.Title>
            <Link to={`/pokemon`}>
                <Button>
                    View Pokemon
                </Button>
            </Link>
        </Card>
    </Container>
  )
}
