import React from "react"
import * as S from "./styledPokeCard"
import pokebola from "../../Assets/pokeball.png"
import { useNavigate, useLocation } from "react-router-dom"
import { goToPokeDetails } from "../../Router/Coordinator"

export default function PokeCard(props) {
  const navigate = useNavigate()

  const location = useLocation();
  
  return (
    <S.CardContainer id={props.id}>
      <S.CardImage>
        <S.PokeImage src={props.img} alt={props.nome}></S.PokeImage>
      </S.CardImage>
      <S.CardFooter>
        {location.pathname === `/` && (
          <S.TakeButton onClick={props.adicionar}>
            <S.PokebolaImg src={pokebola} />
            Pegar!
          </S.TakeButton>
        )}
        {location.pathname === `/Pokedex` && (
          <S.RemoveButton onClick={props.remover}>
            x Remover
          </S.RemoveButton>
        )}
        <S.DetailsButton onClick={() => goToPokeDetails(navigate, props.nome)}>Detalhes</S.DetailsButton>
      </S.CardFooter>
    </S.CardContainer>
  );
}
