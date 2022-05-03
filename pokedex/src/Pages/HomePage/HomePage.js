import React, { useEffect, useState } from "react";
import axios from "axios";
import PokeCard from "../../Components/PokeCard/PokeCard";
import { HomeContainer } from "../HomePage/Styled";
import { pokeURL } from "../../Constants/pokeURL";
import Header from "../../Components/Header/Header";
// import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const [pokemon, setPokemon] = useState([]);
  // Array.from({ length: 20 }, (_, index) => ++index),
  const getArrayPokemons = async () => {
    await axios
      .get(`${pokeURL}/pokemon/?limit=20`)
      .then((res) => {
        console.log("res", res.data.results);
        setPokemon(res.data.results);
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  // ANCHOR  GET Pokemon
  useEffect(() => {
    getArrayPokemons();
  }, []);

  return (
    <HomeContainer>
      <Header/>
      {pokemon &&
        pokemon.map((pokemon) => {
          return (
            <PokeCard id={pokemon.id} nome={pokemon.name} img={pokemon.url} />
          );
        })}
    </HomeContainer>
  );
};

/*const navigate = useNavigate()
    
 const goToPokedexPage = (navigate) => {
    navigate("/Pokedex")
    }*/
