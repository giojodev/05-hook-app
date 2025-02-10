import { PokemonMainCard } from "./PokemonMainCard"

export const PokemonCard = ({id,name,sprites =[]}) => {
  return (
    <section>
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

