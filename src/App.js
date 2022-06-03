import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList';
import WelcomePage from './WelcomePage';
import { Container, Row } from 'react-bootstrap';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [prevPageUrl, setPrevPageUrl] = useState("");



  //loading-by default our application is loading
  const [loading, setLoading] = useState(true)
  

  //every single time when the currentpageurl changes, rerun the code in useEffect
  useEffect(() => {

    setLoading(true)
    axios.get(currentPageUrl).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemonList(res.data.results.map(p => p.name))

    })


  }, [currentPageUrl])

  
  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  if (loading) return "Loading..."

  return (
    <BrowserRouter>
      <Container>
        <Row className='main-view justify-content-md-center'>
          <Routes>
            <Route path='/' element={<WelcomePage />} />
            <Route path='/pokemon' element={<PokemonList pokemonList={pokemonList} gotoNextPage={gotoNextPage} gotoPrevPage={gotoPrevPage}/>} />
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>

  );
}

export default App;
