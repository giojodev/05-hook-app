import React from 'react'

export const PokemonCard = ({id,name,sprites =[]}) => {
  return (
    <section>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`} alt={name} className='imgPokemon'/> 
      <h2 className="text-capitalize">#{id} - {name}</h2>
      <br />
          <div>

              {
              sprites.map((sprite) => (

                  <img key={sprite} src={sprite} alt={name} className='imgPokemon2' />
              )
              )}
          </div>
    </section>
  )
}

