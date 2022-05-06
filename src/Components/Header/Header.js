// import React, { useContext } from "react";
import * as S from "./Styled";

import { useNavigate, useLocation, useParams } from "react-router-dom";
import pokedexImg from "../../Assets/pokedex.png";
import pokedexLogo from "../../Assets/pokedex-logo.png";

// import GlobalStateContext from "../../global/GlobalStateContext"

import { goToHome, goToPokedexPage, goBack } from "../../Router/Coordinator";
// import { useContext } from "react";


const Header = () => {


  // const data = useContext(GlobalStateContext)
  const navigate = useNavigate();
  const location = useLocation();
  const pathParams = useParams();
  // const data = useContext(GlobalStateContext);

  

  return (
    <>
      <S.HeaderContainer>
        <S.LogoPokeDev src={pokedexLogo} />


        {/* ---------------- Header Home ---------------- */}
        {location.pathname === `/` && <S.Titulo>Lista de Pokemons</S.Titulo>}

        {location.pathname === `/` && (
          <S.PokedexButton onClick={() => goToPokedexPage(navigate)}>
            <S.PokedexImg src={pokedexImg} /> Ver Pokedex
          </S.PokedexButton>
        )}


        {/* ---------------- Header Pokedex ---------------- */}
        {location.pathname === `/Pokedex` && <S.Titulo>Minha Pokédex</S.Titulo>}

        {location.pathname === `/Pokedex` && (
          <S.HomeButton onClick={() => goToHome(navigate)}>
            Lista de Pokemons
          </S.HomeButton>
        )}

        {/* ---------------- Header Pokedetails ---------------- */}
        {location.pathname === `/Pokedetails/${pathParams.pokemon}` && (
          <S.Titulo>{pathParams.pokemon}</S.Titulo>
        )}

        {location.pathname === `/Pokedetails/${pathParams.pokemon}` && (
          <S.HomeButton onClick={() => goBack(navigate)}>
            Voltar
          </S.HomeButton>
        )}

         {/* {location.pathname === `/Pokedetails/${pathParams.pokemon}` && (
          vefiricaPokemon()
        )} */}

        {/* {location.pathname === `/Pokedetails/${pathParams.pokemon}` && (
          //  remover = {() => {data.event.removePokemon(pokemon)}}
          <S.RemovePokemonButton onClick={()=> {data.event.removePokemon ()}}>x Remover da Pokedex</S.RemovePokemonButton>
        )} */}
      </S.HeaderContainer>
    </>
  );
};

export default Header;
