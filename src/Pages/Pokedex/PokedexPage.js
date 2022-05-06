import React, { useContext } from "react";
import PokeCard from "../../Components/PokeCard/PokeCard"
import GlobalStateContext from "../../global/GlobalStateContext";
import { PokedexContainer } from "./Styled";
import { useNavigate } from "react-router-dom";

const Pokedex = () => {
  const data = useContext(GlobalStateContext);
  const navigate = useNavigate();

  // ANCHOR Envia pokemon para página de detalhes
  const detailsPokemon = (pokemon) => {
  data.setters.setPokemonDetails(pokemon)
  navigate("/Pokedetails");
  }
 
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
