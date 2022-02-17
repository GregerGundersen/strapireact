import { HeaderStyled } from "./HeaderStyled";
import React from "react";
import logo from "../media/TFT.png";

function Header() {
  return (
    <HeaderStyled>
      <img src={logo} alt="logo"></img>
    </HeaderStyled>
  );
}

export default Header;
