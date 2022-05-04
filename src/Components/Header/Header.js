import React from "react";
import { HeaderContainer } from "./Styled";
// @ts-ignore
import logo from "../../Assets/pokeball.png";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <img src={logo} alt={"teste"} style={{ width: "30px" }} />
      </HeaderContainer>
    </>
  );
};

export default Header;
import React from "react"
import { HeaderContainer, LogoPokeDev } from "./Styled"
import pokedexLogo from "../../Assets/pokedex-logo.png"


const Header = () => {


  return (
    <HeaderContainer>
      <img src={pokedexLogo} />
    </HeaderContainer>
  )
}

export default Header