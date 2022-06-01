import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails';
import WelcomePage from './WelcomePage';
import { Container, Row } from 'react-bootstrap';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  const[pokemon, setPokemon]= useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  //loading-by default our application is loading
  const [loading, setLoading]= useState(true)

  //every single time when the currentpageurl changes, rerun the code in useEffect
  useEffect(()=>{
    
    setLoading(true)
    axios.get(currentPageUrl).then(res=>{
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p=>p.name))
      console.log(pokemon)
      
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
            <Route path='/' element={<WelcomePage/>} />
            <Route path='/pokemon' element={<PokemonList pokemon={pokemon} gotoNextPage={gotoNextPage} gotoPrevPage={gotoPrevPage}/>} /> 
            <Route path='/pokemon/:name' element={<PokemonDetails pokemon={pokemon}/>} />
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
      
  );
}

export default App;
