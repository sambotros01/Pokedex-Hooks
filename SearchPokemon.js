import React, {useState, useEffect} from 'react'
import './App.js'

function SearchPokemon({pokemonList}) {
  const [entry, setEntry] = useState('');
  const [result, setResult] = useState(-1);
  const [data, setData] = useState({});
  const [search, setSearch] = useState(false);
  const [sprites, setSprites] = useState('');
  let renderContent;

  useEffect(() => {
    console.log(`Search input is ${entry}`)
  }, [entry])

  const textChange = (e) => {
    setEntry(e.target.value)
  }

  const SearchByName = () => {
    setResult(-1)
    pokemonList.map((poke, index) => {
      if (entry === poke.name){
        setResult(index)
        fetch(`https://pokeapi.co/api/v2/pokemon/${index+1}`)
          .then(response => response.json())
          .then(facts => {setData(facts)
                          setSprites(facts.sprites.other.dream_world.front_default)
      })
  }})
    setSearch(true)
  }

  if (result !== -1){
    renderContent =  <>
    <img className= 'image' src={sprites} alt='Not Found'/>
    <p className= 'title'>{data.name}</p>
    </>}
    // renderContent = <p className= 'title'>Pokemon Was Found </p>

  else{
    renderContent = <p className= 'title'>No Pokemon Found. Please Try Again.</p>
  }


  return(
  <div>
    <div className= "Search">
      <input className='SearchInput' onChange={textChange} type='textbox' placeholder = "Search for Pokemon by name"></input>
      <button className='SearchButton' onClick={SearchByName}>Search</button>
    </div>
    <div className = 'Box'>
      {search === false ?
        <></>
        :
        <>{renderContent}</>
      }
    </div>
  </div>
  )
}

export default SearchPokemon