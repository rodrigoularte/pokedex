import React from "react";
import { HeaderContainer , LogoPokeDev} from "./Styled";
import {Pokedex} from "../../Assets/Pokedex.png"


const Header = () => {
    

    return (
        <HeaderContainer>
        <img src = {Pokedex}/>
        </HeaderContainer>
    )
}

export default Header;



