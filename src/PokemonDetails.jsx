import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


export default function PokemonDetails() {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const { name } = useParams()


  useEffect(() => {
    // const pokemon = pokemonList.find( p=>p ===params.name);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => {
      setPokemonDetails(res.data)
    })

  }, [])


  if (!pokemonDetails) return <div>loading...</div>


  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>{pokemonDetails.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Pokemon Ability: </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
      </Modal.Footer>
    </Modal.Dialog>
  )
}
