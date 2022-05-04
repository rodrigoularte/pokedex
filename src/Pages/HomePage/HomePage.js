import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import PokeCard from "../../Components/PokeCard/PokeCard";
import { useNavigate } from "react-router-dom";

import { HomeContainer } from "../HomePage/Styled";
import { goToPokedexPage } from "../../Router/Coordinator";

export const HomePage = () => {
  const data = useContext(GlobalStateContext);
  const navigate = useNavigate();

  //NOTE REQUISIÇÃO POKEDEX
  //ANCHOR Adiciona os pokemons na Pokedex através do estado global
  const addPokemonPokedex = (pokemon) => {
    const newListPokemon = data.pokemonList.filter((poke) => {
      return poke !== pokemon;
    });
    //ANCHOR Envia o pokemon para a pokedex
    data.setters.setPokedex([pokemon, ...data.pokedex]);
    //ANCHOR Retira da lista na home
    data.setters.setPokemonList(newListPokemon);
  };

  //NOTE REQUISIÇÃO DETALHES
  const addPokemonDetailsPage = (pokemon) => {
    //ANCHOR Envia o pokemon para página de detalhes
    data.setters.setPokemonDetails(pokemon);
    //ANCHOR Muda para página de detalhes
    navigate("/Pokedetails");
  };

  return (
    <HomeContainer>
      {data.states.pokemonList &&
        data.states.pokemonList.map((pokemon) => {
          return (
            <PokeCard
              id={pokemon.id}
              nome={pokemon.name}
              img={pokemon.sprites.front_default}

              addPokemon = {()=> {addPokemonPokedex(pokemon)}}
              details = {()=> {addPokemonDetailsPage(pokemon)}}
            />
          );
        })}
    </HomeContainer>
  );
};
