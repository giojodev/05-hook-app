

export const PokemonMainCard = ({id,name}) => {
  return (
    <div className="MainCardP">
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`} alt={name} className='imgPokemon'/> 
      <h2 className="text-capitalize">#{id} - {name}</h2>
    </div>
  )
}


