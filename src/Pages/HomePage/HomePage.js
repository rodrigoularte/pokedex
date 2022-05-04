import React, { useEffect, useState } from "react";
import axios from "axios";
import PokeCard from "../../Components/PokeCard/PokeCard";
import { pokeURL } from "../../Constants/pokeURL";
import Header from "../../Components/Header/Header";
// import { useNavigate } from "react-router-dom";

import { HomeContainer } from "../HomePage/Styled";

export const HomePage = () => {
  const [pokemonList, setPokemonList] = useState([]);

  // ANCHOR  GET Pokemon
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const listPokemon = [];
    for (let i = 1; i < 21; i++) {
      await axios
        .get(`${pokeURL}/${i}/`)
        .then((response) => {
          listPokemon[i - 1] = {
            id:response.data.id,
            name:response.data.name,
            status:response.data.stats,
            moves:response.data.stats,
            types:response.data.types,
            sprites:response.data.sprites,
            // setPokemonList(res.data.results);
          };
        })
        .catch((error) => {
          alert(error.response);
        });
    }
  };

  return (
    <HomeContainer>
      <Header />
      {pokemonList &&
        pokemonList.map((pokemon) => {
          return (
            <PokeCard
              id={pokemon.id}
              nome={pokemon.name}
              img={pokemon.sprites.front_default}
              
            />
          );
        })}
    </HomeContainer>
  );
};

/*const navigate = useNavigate()
    
 const goToPokedexPage = (navigate) => {
    navigate("/Pokedex")
    }*/
