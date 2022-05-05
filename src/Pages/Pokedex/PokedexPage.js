import React from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useContext } from "react";
import {PokeCard} from "Users/Luiz Maecelo/Desktop/projeto-pokedex/Shaw-pokedex7/src/Components/PokeCard/PokeCard"
import { useNavigate } from "react-router-dom";
import { goToPokeDetais } from "../../routes/coordinator";
import { CardContainer } from "./styled";




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
            onClickCard={() => goToPokeDetais (navigate, pokemon.name)}
            onClickCardBtnDetails={() => goToPokeDetais (navigate, pokemon.name)}
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









