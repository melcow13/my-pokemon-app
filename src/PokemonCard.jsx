import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PokemonCard.scss';



export default function PokemonCard({ pokemonList }) {

  const [pokemon, setPokemon] = useState(null)
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonList}`).then(res => {
      setPokemon(res.data)
    })

  }, [])

  if (!pokemon) return <div>loading...</div>
  console.log(pokemon)
  return (
    <CardGroup >
      <Card style={{ width: '18rem' }} md={12}>
        <Card.Header as="h2">{pokemon.name}</Card.Header>
        <Card.Body>
          <Card.Img variant="top" width={250} height={250} src={pokemon.sprites.other.dream_world.front_default} />
        </Card.Body>
        <Card.Footer>
          <Link to={`/pokemon/${pokemonList}`}>
            <Button variant="primary">
              View More
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </CardGroup>
  )
}
