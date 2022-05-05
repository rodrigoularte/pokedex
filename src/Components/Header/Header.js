import React, { useContext } from "react";
import { HeaderContainer, LogoPokeDev, Botao, Titulo } from "./Styled";
import {  useParams,useNavigate, useLocation } from "react-router-dom";
import pokedexLogo from "../../Assets/pokedex-logo.png";
import GlobalStateContext from "../../global/GlobalStateContext";

import { goBack, goToHome, goToPokeDetails, goToPokedexPage } from "../../Router/Coordinator";

const Header = () => {
  const data = useContext(GlobalStateContext);
  const pokemon = data.states.pokemonDetails;
  const navigate = useNavigate();
  const params = useParams();
const location = useLocation()
  // console.log("fewfew",location.pathname);
  return (
    <HeaderContainer>
      <LogoPokeDev src={pokedexLogo} />

      {/*ANCHOR Condição para mostrar os botões de acordo com a página do site */}
     {location.pathname  === '/' && <Titulo>Lista de Pokemons</Titulo>}
      { location.pathname === "/" &&  <Botao onClick={() => goToPokedexPage(navigate)}>Ver Pokedex</Botao>} 

     {location.pathname  === '/Pokedex' && <Titulo>Pokedex</Titulo>}
     {location.pathname   === '/Pokedex' && <Botao onClick={() => goToHome(navigate)}>Voltar para lista de pokemons</Botao>} 

     {location.pathname  === '/Pokedetails' && <Titulo>{pokemon.name}</Titulo>}
     {location.pathname   === "/Pokedetails" && <Botao onClick={() => goToPokeDetails(navigate)}>Nome do Pokemon</Botao>} 
     {location.pathname  === '/Pokedetails' && <Botao onClick={() => goBack(navigate) }>Voltar</Botao>} 


    </HeaderContainer>
  );
};

export default Header;
