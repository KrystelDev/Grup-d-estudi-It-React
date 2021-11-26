import React, { Fragment, useState } from "react";
import "./App.css";
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
      <Header />
      {/* <!-- Main begins --> */}
      <main>
        {/* /* <!-- Speaker: Estela F. -->  
        <!-- redirected content list -->
        <!-- buttons direcciton contenido--> *idea* */}
        <h1>Apuntes GitHub</h1>
        <section>
          <button onClick={newRepositorio}>Crear Repositorio</button>
          <button onClick={remote}>
            Unir una carpeta local a un repositorio
          </button>
          <button onClick={acceso}>Añadir colaborades en un repositorio</button>
          <button onClick={pullRequest}>
            Pull request. Solicitar un añadir un cambio
          </button>
        </section>
        <div>
          <ol>
            Pull request:
            <ol>
              Ir al a la carpeta que deseas subir a git con la terminal (usando
              cd nombreCarpeta...)
            </ol>
            <ol>
              Crear una rama independiente de main o master (git checkout -b
              nombreRama)
            </ol>
            <ol>
              git status (verás que justo una linea más a bajo de lo escrito
              sale la rama que has creado, así que todo lo que pongas ahora será
              para esa rama)
            </ol>
            <ol>git add .</ol>
            <ol>
              git commit -m "xxx" 6- git push -u origin nombreRama (cerás que
              pone que esta rama esta lista para seguimiento){" "}
            </ol>
            <ol>
              Vas a la pàgina web de tu git para abrir el repositorio en
              cuestión.
            </ol>
            <ol>Clicas a pull request. 9- Clicas a new pull request.</ol>
            <ol>
              Clicas aun boton verde que sale algo de comparate. (verás que hay
              la rama principal y la rama que has creado antes)
            </ol>
          </ol>
          Fuente: https://styde.net/pull-request-en-github/
        </div>
      </main>

      {/* <!-- Footer begins --> */}
      <footer>
        <p>Footer</p>
      </footer>
    </Fragment>
  );
}

export default App;
