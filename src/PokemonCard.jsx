import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Card, CardGroup, Container, Modal, Image } from 'react-bootstrap';
import './PokemonCard.scss';



export default function PokemonCard({ pokemonList }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [pokemon, setPokemon] = useState(null);
  const [pokemonAbilities, setPokemonAbilities] = useState(null);
  const [pokemonTypes, setPokemonTypes] = useState(null);
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonList}`).then(res => {
      setPokemon(res.data)
      setPokemonAbilities(res.data.abilities)
      setPokemonTypes(res.data.types)
    })

  }, [])





  if (!pokemon) return <div>loading...</div>
  console.log(pokemon)
  return (
    <>
      <CardGroup >
        <Card style={{ width: '18rem' }} md={12}>
          <Card.Header as="h2">{pokemon.name}</Card.Header>
          <Card.Body>
            <Card.Img variant="top" width={250} height={250} src={pokemon.sprites.other.dream_world.front_default} />
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={handleShow}>
              View More
            </Button>
          </Card.Footer>
        </Card>
      </CardGroup>

      <Modal show={show} onHide={handleClose} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header>
          <Modal.Title>{pokemon.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container >
            <Image width={200} height={200} src={pokemon.sprites.front_shiny} />
            <Image width={200} height={200} src={pokemon.sprites.back_shiny} />
            <br />
            <h4>Weight: </h4> <p>{pokemon.weight} </p>
            <h4>Abilities: </h4> {pokemonAbilities.map(a => <li key={a}>{a.ability.name}</li>)}
            <h4>Type: </h4>{pokemonTypes.map(t => <li key={t}>{t.type.name}</li>)}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
