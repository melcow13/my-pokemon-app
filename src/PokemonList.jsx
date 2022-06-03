import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import PokemonCard from './PokemonCard'
import Pagination from './Pagination'
import Menubar from './Navbar'

export default function PokemonList({pokemonList, gotoNextPage, gotoPrevPage}) {
  return (
    <Container>
      <Menubar />
      <Row>
      {pokemonList.map(p=>(
        <Col key={p} xs={6} md={3} >
          <PokemonCard pokemonList={p}/>
        </Col>
      ))}
      </Row>
      <Pagination 
      gotoNextPage={gotoNextPage}
      gotoPrevPage={gotoPrevPage}
      />
    </Container>
  )
}
