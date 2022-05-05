import React from "react"
import * as S from "./styledPokeCard"
import pokebola from "../../Assets/pokeball.png"
import { useNavigate } from "react-router-dom"
import { goToPokeDetails } from "../../Router/Coordinator"

export default function PokeCard(props) {

  const navigate = useNavigate()
  
  return (
    <S.CardContainer id={props.id}>
      <S.CardImage>
        <S.PokeImage src={props.img} alt={props.nome}></S.PokeImage>
      </S.CardImage>
      <S.CardFooter>
        <S.TakeButton>
          <S.PokebolaImg src={pokebola} />
          Pegar!
        </S.TakeButton>
        <S.DetailsButton onClick={() => goToPokeDetails(navigate, props.nome)}>Detalhes</S.DetailsButton>
      </S.CardFooter>
    </S.CardContainer>
  );
}
