import React from "react"
import * as S from "./styledPokeCard"
import pokebola from "../../Assets/pokeball.png"
import { useNavigate } from "react-router-dom"
import { goToPokeDetais } from "../../Router/Coordinator"

export default function PokeCard(props) {

  const navigate = useNavigate()
  
  return (
    <S.CardContainer id={props.id}>
      <S.CardImage>
        <S.PokeImage src={props.img} alt={props.nome}></S.PokeImage>
      </S.CardImage>
      <S.CardFooter>
        <S.Button1>
          <S.PokebolaImg src={pokebola} />
          Pegar!
        </S.Button1>
        <S.Button1 onClick={() => goToPokeDetais(navigate, props.nome)}>Detalhes</S.Button1>
      </S.CardFooter>
    </S.CardContainer>
  );
}
