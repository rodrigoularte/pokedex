import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Coluna1Container, Coluna2Container, DetailsContainer, PokeImg, PokeImgContainer, TipoContainer, AtaquesContainer } from "../PokemonsDetails/Styled"
import { pokeURL } from '../../Constants/pokeURL'
import { useParams } from 'react-router-dom'


export const PokemonsDetails = () => {

  const [pokemon, setPokemon] = useState([])

  const pathParams = useParams()

  const getPokemons = () => {

    axios
      .get(`${pokeURL}/pokemon/${pathParams.pokemon}`)
      .then((response) => {
        setPokemon(response.data)
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <>
     
      {pokemon && pokemon.sprites && (
      <DetailsContainer>
        <PokeImgContainer>
          <PokeImg src={pokemon.sprites.front_default} />
          <PokeImg src={pokemon.sprites.back_default}/>
        </PokeImgContainer>

        <Coluna1Container>
          <h2>Poderes</h2>
          {pokemon && (
            pokemon.stats.map((poder) => {
              return(
                <p key={poder.stat.name}>{poder.stat.name}: {poder.base_stat}</p>
              )
            })
          )}
        </Coluna1Container>

        <Coluna2Container>
          <TipoContainer>
            {pokemon && pokemon.types.map((tipo) => {
              return(
                <p key={tipo.type.name}>{tipo.type.name}</p>
              )
            })}
          </TipoContainer>

          <AtaquesContainer>
            <h2>Principais Ataques</h2>
            {pokemon && pokemon.moves.map((ataque, i) => {
              return(
                i < 5 &&
                <p key={ataque.move.name}>{ataque.move.name}</p>
              )
            })}
          </AtaquesContainer>
        </Coluna2Container>

      </DetailsContainer>
      )}
    </>
  )
}


export default PokemonsDetails