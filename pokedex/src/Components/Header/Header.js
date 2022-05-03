import React from "react";
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
