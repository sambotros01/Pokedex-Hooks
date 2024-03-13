import React from 'react'
import detailsInfo from './Details'

export default function PokeDetails(){
  const {details, setDetails} = React.useContext(detailsInfo);

  return (
    <>
    <div className = 'Top'>
    <h1 className>Pokedex Generation 1</h1>
    <button onClick={() => setDetails({})}>GO HOME</button>
    <h3 className = 'topName'>{details.name}</h3>
    </div>

    <div className = 'Middle'>
    <img className = 'gif' src={details.sprites.other.showdown.front_default} alt='Not Found'/>
      <div className = 'dataBox'>

          <div className = 'facts'>
            <h3>Type:</h3>
            {details.types.map(type => <ul> {type.type.name} </ul>)}
          </div>
          <div className = 'facts'>
            <h3>Height:</h3> <p>{details.height} inches</p>
          </div>
          <div className = 'facts'>
            <h3>Weight:</h3> <p>{details.weight} grams</p>
          </div>
        <div className = 'facts'>
            <h3>Abilities:</h3>
            {details.abilities.map(element => <ul> {element.ability.name} </ul>)}
        </div>
        <div className = 'facts'>
            <h3>Base Stats:</h3>
            {details.stats.map(element => <ul> {element.stat.name}: {element.base_stat} </ul>)}
        </div>



      </div>
    </div>

    <div className = 'Bottom'>
    <h3>Moves</h3>
      <div className = 'Moves'>
        {details.moves.map(move => <li>{move.move.name}</li>)}
      </div>
    </div>
  </>
  )

}

