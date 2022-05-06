import React from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useContext } from "react";
import PokeCard from "../../Components/PokeCard/PokeCard"
import { useNavigate } from "react-router-dom";
import { CardContainer } from "./Styled";
import { goToPokeDetails } from "../../Router/Coordinator";


const Pokedex = () => {
  const { states } = useContext(GlobalStateContext);
  const navigate = useNavigate();

  const pokedexList =
    states.pokedex &&
    states.pokedex.sort((a, b) => {
      return a.id - b.id
    })
      .map((pokemon, index) => {
        return (
          <PokeCard
            key={pokemon.name}
            name={pokemon.name}
            onClickCard={() => goToPokeDetails (navigate, pokemon.name)}
            onClickCardBtnDetails={() => goToPokeDetails (navigate, pokemon.name)}
            index={index}
          />
        );
      });
  return (
    <div>
      <CardContainer>
        {states.pokedex && pokedexList}
        {states.pokedex.length === 0}
      </CardContainer>
    </div>
  );
};

export default Pokedex;









