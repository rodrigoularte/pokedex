import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./stylePokeCard";


export default function PokeCard(props) {
  // navigate = useNavigate()
  return (
    <>
      <S.CardContainer id={props.id}>
        <S.PokeName>{props.nome}</S.PokeName>
        <S.PokeImage src={props.img}></S.PokeImage>
        <S.DivButtons>
          {/* {navigate.location.pathname === "/pokedex"? <S.ButtonLeft onClick={props.remover}>Remover</S.ButtonLeft> : <S.ButtonLeft onClick={props.adicionar}>adicionar..</S.ButtonLeft>} */}
          <S.ButtonLeft onClick={props.detalhes}>Remover</S.ButtonLeft>
          <S.ButtonRight onClick={props.detalhes}>Detalhes</S.ButtonRight>
        </S.DivButtons>

      </S.CardContainer>

    </>

  )
}