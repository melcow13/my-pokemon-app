import React from 'react'
import {Button , Card, CardGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';



export default function PokemonCard({pokemon}) {
    
  return (
    <CardGroup>
      <Card> 
          <Card.Body>
          <Link to={`/pokemon/${pokemon}`}>
            <Button variant="link">
              {pokemon}
            </Button>
          </Link>    
          </Card.Body>
      </Card>
      </CardGroup>
  )
}
