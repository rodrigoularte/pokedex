import React from "react";
// import { useNavigate } from "react-router-dom";
import * as S from "./styledPokeCard";
import pokebola from "../../Assets/pokeball.png";
import { useNavigate } from "react-router-dom";
import { goToPokeDetais } from "../../Router/Coordinator";

export default function PokeCard(props) {
  const navigate = useNavigate();
  return (
    <S.CardContainer id={props.id}>
      <S.PokeName>{props.nome}</S.PokeName>
      <S.CardImage src={props.img} alt={props.nome}></S.CardImage>
      <S.CardFooter>
        {/* {navigate.location.pathname === "/pokedex"? <S.ButtonLeft onClick={props.remover}>Remover</S.ButtonLeft> : <S.ButtonLeft onClick={props.adicionar}>adicionar..</S.ButtonLeft>} */}
        <S.Button1>
          <S.PokebolaImg src={pokebola} />
          Pegar!
        </S.Button1>
        <S.Button1 onClick={() => goToPokeDetais(navigate)}>Detalhes</S.Button1>
      </S.CardFooter>
    </S.CardContainer>
  );
}
