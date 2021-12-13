import React, { Fragment } from "react";
import "../../styled/StartProject.css";
import { Link } from "react-router-dom";
import repositorio from "../../components/img/Respositores.png";
import crearRepositorio from "../../components/img/crearRepositorio.png";

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
        <ol>
          Acudir a tus repositorios de git
          <br />
          <img
            className="imgRepositorio"
            src={repositorio}
            alt="fragmento inicial de las opciones de git dentro de repositorio"
          />
        </ol>
        <ol>Clicar al button azul "New"</ol>
        <ol>Poner un nombre al repositorio</ol>
        <ol>Poner una descripcion (opcional)</ol>
        <ol>Seleccionar si quieres que sea público o no.</ol>
        <ol>
          Seleccionar si quieres añadir un README, un gitignore y/o una licencia
          donde diga que puden o no copiar.
        </ol>
        <ol>
          Clicar en "Create Repository"
          <br />
          <img
            className="imgRepositorio"
            src={crearRepositorio}
            alt="fragmento final de las opciones de git dentro de repositorio"
          />
        </ol>
      </ol>
    </Fragment>
  );
};

export default StartProject;
