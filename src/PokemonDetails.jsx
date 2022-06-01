import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Card, CardGroup} from 'react-bootstrap';
import { useParams } from 'react-router-dom';


export default function PokemonDetails({pokemon}) {
  const [pokemonName, setPokemonName] = useState()
  const params= useParams()

  useEffect(() => {
    const pokemonName = pokemon.find(p=>p.name === params.name)
    setPokemonName(pokemonName)
    console.log(pokemonName)
  
    
  }, [])
  
   

  
    
  return (
    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title>
            {pokemonName}
          </Card.Title>
          
        </Card.Body>
      </Card>
    </CardGroup>  
  )
}
