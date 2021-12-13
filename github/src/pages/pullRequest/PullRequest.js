import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const PullRequest = () => {
  return (
    <Fragment>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
      </ul>
      <ol>
        Pull request:
        <ol>
          Ir al a la carpeta que deseas subir a git con la terminal (usando cd
          nombreCarpeta...)
        </ol>
        <ol>
          Crear una rama independiente de main o master (git checkout -b
          nombreRama)
        </ol>
        <ol>
          git status (verás que justo una linea más a bajo de lo escrito sale la
          rama que has creado, así que todo lo que pongas ahora será para esa
          rama)
        </ol>
        <ol>git add .</ol>
        <ol>git commit -m "xxx"</ol>
        <ol>
          git push -u origin nombreRama (Verás que pone que esta rama esta lista
          para seguimiento)
        </ol>
        <ol>
          Vas a la pàgina web de tu git para abrir el repositorio en cuestión.
        </ol>
        <ol>Clicas a pull request.</ol>
        <ol>Clicas a new pull request.</ol>
        <ol>
          Clicas aun boton verde que sale algo de comparate. (verás que hay la
          rama principal y la rama que has creado antes)
        </ol>
      </ol>
      <p>
        Fuente:
        <a href="https://styde.net/pull-request-en-github/">
          https://styde.net/pull-request-en-github/
        </a>
      </p>
    </Fragment>
  );
};

export default PullRequest;
