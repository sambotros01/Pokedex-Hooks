import React, {useState, useEffect} from 'react';
import './App.css';
import GetInfo from './GetInfo.js'
import SearchPokemon from './SearchPokemon.js'
import detailsInfo from './Details.js'
import PokeDetails from './PokeDetails.js'

export default function App() {

  let [pokemonList, setPokemonList] = useState([]);
  let [details, setDetails] = useState({});
  const value = {details, setDetails};
  let renderComponent;


  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then(response => response.json())
      .then(pokeData => {
        let allData = pokeData.results.map(poke => {
          return {
            name: poke.name,
            url: poke.url
          }
        })
        setPokemonList(allData);
      })
  }, [pokemonList])

if (Object.keys(details).length === 0 ){
  if(pokemonList.length < 150){
    renderComponent = <h1>Loading...</h1>
  }
  else{
    renderComponent = <>
                        <h1 className='title2'>Pokedex Generation 1</h1>
                        <div className='FilterBar'>
                        <select name="select" id="topics">
                          <option value="all">All Types</option>
                          <option value="normal">Normal</option>
                          <option value="fighting">Fighting</option>
                          <option value="flying">Flying</option>
                          <option value="poison">Poison</option>
                          <option value="ground">Ground</option>
                          <option value="rock">Rock</option>
                          <option value="bug">Bug</option>
                          <option value="steel">Steel</option>
                          <option value="fire">Fire</option>
                          <option value="water">Water</option>
                          <option value="grass">Grass</option>
                          <option value="electric">Electric</option>
                          <option value="psychic">Psychic</option>
                          <option value="ice">Ice</option>
                          <option value="dragon">Dragon</option>
                          <option value="dark">Dark</option>
                          <option value="fairy">Fairy</option>
                          <option value="unknown">Unknown</option>
                          <option value="shadow">Shadow</option>
                        </select>
                        <SearchPokemon pokemonList = {pokemonList} />
                        </div>
                            <div className = 'Outter'>
                              {pokemonList.map((pokemon, index) => (
                               <GetInfo pokemonList={pokemon} index={index}/>
                               ))}
                              </div>
                     </>
  }
}
else{
  renderComponent = <PokeDetails details={details}/>
}


  return(
    <div>
      <detailsInfo.Provider value={value}>
      {renderComponent}
      </detailsInfo.Provider>
    </div>
    )

}

{/* <h1 className='title2'>Pokedex Generation 1</h1> */}
{/* <SearchPokemon pokemonList = {pokemonList} />
  <div className = 'Outter'>
    {pokemonList.map((pokemon, index) => (
    <GetInfo pokemonList={pokemon} index={index}/>
    ))}
  </div> */}