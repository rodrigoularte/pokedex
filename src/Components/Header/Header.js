import React from "react";
import { HeaderContainer, LogoPokeDev } from "./Styled";
import pokedexLogo from "../../Assets/pokedex-logo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={pokedexLogo} />
    </HeaderContainer>
  );
};

export default Header;
