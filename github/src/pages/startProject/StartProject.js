import React, { Fragment } from "react";
import "../../styled/StartProject.css";
import { Link } from "react-router-dom";

const StartProject = () => {
  return (
    <Fragment>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
      </ul>
      <ol>
        Empezar un proyecto:
        <li>
          <Link to="/startProject/createRepository">
            Crear un repositorio nuevo
          </Link>
        </li>
        <li>
          Abir esta carpeta con tu terminal, donde quieres guardar la carpeta
          del proyeto
        </li>
        <li>
          Nombre carpeta % git clone
          https://github.com/TuUsuarioGit/NombreRepositorio.git
        </li>
        <p>
          Aparecerá instantaneamente dentro de la carpeta que hayamos
          seleccionado, una carpeta con el nombre del repositorio creado. Si has
          seleccionado, en la fse de crear respositorio, Add README.md, verás
          ese archivo dentro de la carpeta. Incluso si escogido Add gitignore
          (por ejemplo tyoe: Node, para que no suba toda esa carpeta, desde VSC
          la verás creada.)
        </p>
        <ol>... listo para trabajar ...</ol>
      </ol>
    </Fragment>
  );
};

export default StartProject;
