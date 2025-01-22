import React from 'react'
import { useFetch } from '../hooks/useFetch'

const MultipleCustomHooks = () => {
const {data,hasError,isLoading} = useFetch("https://pokeapi.co/api/v2/pokemon/418");
let url=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data?.id}.gif`;

  return (
    <>
    
        <h1>PokeInfo</h1>
        <hr />
        {isLoading && <p>Cargando...</p>}
        <img src={url} alt={data?.name} className='imgPokemon'/>
        <pre>

            { data?.name}
            </pre>
    </>
  )
}

export default MultipleCustomHooks
