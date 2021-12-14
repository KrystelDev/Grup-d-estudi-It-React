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
        <li>Crear una carpeta local donde guardaremos el proyecto</li>
        <li>Abir esta carpeta con tu terminal</li>
        <li>Nombre carpeta % "git init"</li>
        <li>Nombre carpeta % "git remote add origin https://git..."</li>
        <li>Nombre carpeta % "git pull origin main"</li>
        <li>Nombre carpeta % "git branch main"</li>
        <li>Nombre carpeta % "git checkout main"</li>
        <ol>... listo para trabajar ...</ol>
      </ol>
    </Fragment>
  );
};

export default StartProject;
