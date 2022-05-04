import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styledPokeCard";
import pokebola from "../../Assets/pokeball.png"


export default function PokeCard(props) {
  // navigate = useNavigate()
  return (
    <S.CardContainer id={props.id}>
      <S.PokeName>{props.nome}</S.PokeName>
      <S.CardImage src={props.img} alt={props.nome}></S.CardImage>
      <S.CardFooter>
        {/* {navigate.location.pathname === "/pokedex"? <S.ButtonLeft onClick={props.remover}>Remover</S.ButtonLeft> : <S.ButtonLeft onClick={props.adicionar}>adicionar..</S.ButtonLeft>} */}
        <S.Button1 onClick={props.detalhes}><S.PokebolaImg src={pokebola}/>Pegar!</S.Button1>
        <S.Button1 onClick={props.detalhes}>Detalhes</S.Button1>
      </S.CardFooter>

    </S.CardContainer>
  )
}