import React from "react";
import itLogo from "./img/itLogo.png";

const Header = () => {
  return (
    <header>
      <h1 className={"H1prova"}>Team React-loper</h1>
      <img src={itLogo} alt="Logo de IT academy, la unión del equipo"></img>
    </header>
  );
};

export default Header;
