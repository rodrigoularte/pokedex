import React, { useContext } from "react";
import * as S from './Styled'

import {  useNavigate, useLocation, useParams } from "react-router-dom";
import icon from '../../Assets/pokedex.png'
import pokedexLogo from "../../Assets/pokedex-logo.png";

import GlobalStateContext from "../../global/GlobalStateContext";

import { goBack, goToHome, goToPokeDetails, goToPokedexPage } from "../../Router/Coordinator";

const Header = () => {
  const data = useContext(GlobalStateContext);
  const pokemon = data.states.pokemonDetails;
  const navigate = useNavigate();
const location = useLocation()
const pathParams = useParams()
console.log(pathParams.pokemon);

  return (
    <>
    <S.HeaderContainer>
      <S.LogoPokeDev src={pokedexLogo} />

      {/*ANCHOR Condição para mostrar os botões de acordo com a página do site */}
     {/* {location.pathname  === '/' && <S.Titulo>Lista de Pokemons</S.Titulo>}
      { location.pathname === "/" &&<div> <S.PokedexButton onClick={() => goToPokedexPage(navigate)}> <S.Icon src={icon}/>  Ver Pokedex</S.PokedexButton></div> }  */}

     {/* {location.pathname  === '/Pokedex' && <S.Titulo>Pokedex</S.Titulo>}
     {location.pathname   === '/Pokedex' && <S.HomeButton onClick={() => goToHome(navigate)}>Voltar para lista de pokemons</S.HomeButton>}  */}

     {location.pathname   === `/Pokedetails/${pathParams.pokemon}`  && <S.HomeButton onClick={() => goToPokeDetails(navigate)}>Lista de Pokemos</S.HomeButton>} 
     {location.pathname  === `/Pokedetails/${pathParams.pokemon}` && <S.Titulo>{pokemon.name}</S.Titulo>}
     {location.pathname  === `/Pokedetails/${pathParams.pokemon}`  && <S.RemovePokemonButton onClick={() => goBack(navigate) }>Remover da Pokedex</S.RemovePokemonButton>} 


    </S.HeaderContainer>
    </>
  );
};

export default Header;
