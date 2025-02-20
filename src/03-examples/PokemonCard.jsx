import  { useLayoutEffect, useRef } from 'react'
import { PokemonMainCard } from "./PokemonMainCard"

export const PokemonCard = ({id,name,sprites =[]}) => {
      const hwRef = useRef();
      
      useLayoutEffect(() => {
        const {height,width} =  hwRef.current.getBoundingClientRect();
        console.log({height,width})
      
        
      }, [name])
  return (
    <section style={{height:200,display:'flex',flexDirection:'row'}}>
      ,<PokemonMainCard id={id} name={name} />
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

