import React, { useContext } from "react";
import PokeCard from "../../Components/PokeCard/PokeCard"
import GlobalStateContext from "../../global/GlobalStateContext";
import { PokedexContainer } from "./Styled";
// import { useContext } from "react";
// import { goToPokeDetails } from "../../Router/Coordinator";
import { useNavigate } from "react-router-dom";

const Pokedex = () => {
  const data = useContext(GlobalStateContext);
  const navigate = useNavigate();

 

  // ANCHOR Envia pokemon para página de detalhes
  const detailsPokemon = (pokemon) => {
  data.setters.setPokemonDetails(pokemon)
  navigate("/Pokedetails");
  }

 

  // const removePokemon = (pokemon) => {
  //     const newListPokemon = data.states.pokedex.filter((poke) => {
  //       return poke !== pokemon;
  //     });
  //     //ANCHOR envia o pokemon para a Pokedex
  //     data.setters.setPokemonList([pokemon, ...data.states.pokemonList]);
  //     // ANCHOR Retira da pokedex
  //     data.setters.setPokedex(newListPokemon);
  //   };



  return (
    <PokedexContainer>
      {data.states.pokedex && data.states.pokedex.map((pokemon)=>{
        return <PokeCard 
        id={pokemon.id}
        nome={pokemon.name}
        img={pokemon.sprites.front_default}
        remover = {() => {data.event.removePokemon(pokemon)}}
        detalhes={()=> {detailsPokemon(pokemon)}}
        />
      })}
   
    </PokedexContainer>
  );
};

export default Pokedex;
