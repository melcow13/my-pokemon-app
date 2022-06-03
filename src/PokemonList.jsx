import React, { useState } from 'react'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import PokemonCard from './PokemonCard'
import Pagination from './Pagination'
import Menubar from './Navbar'

export default function PokemonList({ pokemonList, gotoNextPage, gotoPrevPage }) {
  //the value of the search field
  const [searchName, setSearchName] = useState('');
  //the search result
  const [foundPokemon, setFoundPokemon] = useState(pokemonList);
  console.log(pokemonList)
  const filter = (e) => {
    const keyword = e.target.value;


    if (keyword !== '') {
      const results = pokemonList.filter((p) => {
        return p.toLowerCase().includes(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundPokemon(results);
    } else {
      setFoundPokemon(pokemonList);
      // If the text field is empty, show all pokemons
    }

    setSearchName(keyword);
  };

  return (
    <Container>
      <Menubar />
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search Pokemon"
          className="me-2"
          aria-label="Search"
          onChange={filter}
          value={searchName}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Row>
        {foundPokemon && foundPokemon.length > 0 ? (
          foundPokemon.map((p) => (
            <Col key={p} xs={6} md={3} >
              <PokemonCard pokemonList={p} />
            </Col>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </Row>
      <Pagination
        gotoNextPage={gotoNextPage}
        gotoPrevPage={gotoPrevPage}
      />
    </Container>
  )
}
