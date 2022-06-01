import React from 'react'
import { Col } from 'react-bootstrap'
import PokemonCard from './PokemonCard'
import Pagination from './Pagination'

export default function PokemonList({pokemon, gotoNextPage, gotoPrevPage}) {
  return (
    <div>
      {pokemon.map(p=>(
        <Col key={p}>
          <PokemonCard pokemon={p}/>
        </Col>
      ))}
      <Pagination 
      gotoNextPage={gotoNextPage}
      gotoPrevPage={gotoPrevPage}
      />
    </div>
  )
}
