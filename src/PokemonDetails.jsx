import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { Card, CardGroup} from 'react-bootstrap';
import { useParams } from 'react-router-dom';


export default function PokemonDetails() {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const {name} = useParams()
 

  useEffect(() => {
    // const pokemon = pokemonList.find( p=>p ===params.name);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res=>{
      setPokemonDetails(res.data)
    })
      
  }, [])
  
   
if (!pokemonDetails) return <div>loading...</div>
  
    
  return (
    <CardGroup>
      <Card>
      <Card.Title>
            Pokemon Ability
      </Card.Title>
        
        <Card.Body>
          <div>{pokemonDetails.base_experience}</div>
        </Card.Body>
      </Card>
    </CardGroup>  
  )
}
