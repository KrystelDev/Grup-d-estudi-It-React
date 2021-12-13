import React, { Fragment, useState } from "react";
import "./App.css";
import Routes from "./application/routes";
import Header from "./components/Header";

function App() {
  //Variable donde guardaremos que apuntes quiere visaulizar el usuario:
  let [visualizar, setVisualizar] = useState("");

  //Acciones para cambiar la visualización de los apuntes
  function newRepositorio() {
    setVisualizar("newRepositorio");
  }
  function remote() {
    setVisualizar("remote");
  }
  function acceso() {
    setVisualizar("acceso");
  }
  function pullRequest() {
    setVisualizar("pullRequest");
  }

  return (
    <Fragment className="App">
      {/* <!-- Header begins --> */}
      <header>
        <Header />
      </header>

      {/* <!-- Main begins --> */}
      <main>
        <Routes />
      </main>

      {/* <!-- Footer begins --> */}
      <footer>
        <p>Footer</p>
      </footer>
    </Fragment>
  );
}

export default App;
