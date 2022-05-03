import React from "react";
<<<<<<< HEAD
// import {HeaderContainer} from ""
import logo from "../../Assets/pokeball.png";

const Header = () => {
  return (
    <>
      {/* <HeaderContainer> */}
      <img src={logo} alt={"teste"} style={{ width: "30px" }} />
      {/* </HeaderContainer> */}
    </>
  );
};

export default Header;
=======
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



>>>>>>> master
