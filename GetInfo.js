import React, {useState, useEffect, useContext} from 'react';
// import { useNavigate } from "react-router-dom";
import './App.css';
import detailsInfo from './Details.js'

function GetInfo ({pokemonList, index}) {
  const[render, setRender] = useState(0);
  const [sprites, setSprites] = useState('');
  const [facts, setFacts] = useState({});
  const [moves, setMoves] = useState(null);
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [types, setTypes] = useState(null);
  const[abilities, setAbilities] = useState(null)

  const {setDetails, details} = useContext(detailsInfo)

   useEffect(() => {
      fetch(pokemonList.url)
      .then(response => response.json())
      .then(data => {setFacts(data)
          setSprites(data.sprites.other.dream_world.front_default)
          setTypes(data.types)
          })
     }, [])

  const MoreInfo = () => {
    setRender(1);
    setWeight(facts.weight);
    setHeight(facts.height);
    setMoves(facts.moves);
    setAbilities(facts.abilities)
  }

  const GetDetails = () => {
    setDetails(facts)
  }

  const PlayCry = () => {
    var cry = new Audio(facts.cries.latest)
    return cry.play()
  }

  const PlayCry2 = () => {
    var cry2 = new Audio(facts.cries.legacy)
    return cry2.play()
  }

  const Reset = () => {
    setRender(0);
  }

  // const Filter = () =>{

  // }

let renderComponent;

//Type List
  if (facts.sprites === undefined){
    renderComponent = <h1>Loading...</h1>
  }
  else if (render === 0){
    renderComponent = <div> <img className= 'image' onClick={() => {MoreInfo() ; PlayCry()}} src={sprites} alt='Not Found' loading='lazy'/>
                         <p className= 'title' key={index} onClick={() => {GetDetails() ; PlayCry()}}>{facts.forms[0].name}</p></div>
  }
  else{
    renderComponent = <div className = 'Facts' onClick={() => {Reset() ; PlayCry2()}}>
                        <h1>{facts.forms[0].name}</h1>

                        {types.map((element) => {
                          return <p>Type: {element.type.name}</p>
                        })}

                        <p>Height: {height} in</p>
                        <p>Weight: {weight} lb</p>

                      </div>
  }

   return (
    <>
    <div className = 'Box'>
      {renderComponent}
    </div>
    </>
    )

  }

export default GetInfo

      {/* {facts.sprites === undefined ?
         <></> :
         <>
         <img className= 'image' onClick={MoreInfo} src={sprites} alt='Not Found' loading='lazy'/>
         <p className= 'title' key={index}>{facts.forms[0].name}</p>
         </>
      } */}

      // https://pokeapi.co/api/v2/type/