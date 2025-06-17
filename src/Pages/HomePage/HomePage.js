import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import PokeCard from "../../Components/PokeCard/PokeCard";

import { HomeContainer } from "../HomePage/Styled";

export const HomePage = () => {
  const data = useContext(GlobalStateContext);
  const navigate = useNavigate();

  //ANCHOR Adiciona os pokemons na Pokedex através do estado global
  const addPokemonPokedex = (pokemon) => {
    const newListPokemon = data.states.pokemonList.filter((poke) => {
      return poke !== pokemon;
    });
    //ANCHOR Envia o pokemon para a pokedex
    data.setters.setPokedex([pokemon, ...data.states.pokedex]);
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
              key={pokemon.id}
              id={pokemon.id}
              nome={pokemon.name}
              img={pokemon.sprites.front_default}
              adicionar={() => {
                addPokemonPokedex(pokemon);
              }}
              detalhes={() => {
                addPokemonDetailsPage(pokemon);
              }}
            />
          );
        })}
    </HomeContainer>
  );
};
