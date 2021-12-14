import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../styled/StartProject.css";
import repositorio from "../../components/img/Respositores.png";
import crearRepositorio from "../../components/img/crearRepositorio.png";

const CreateRepository = () => {
  return (
    <Fragment>
      <ul>
        <li>
          <Link to="/startProject">Empezar un proyecto</Link>
        </li>
      </ul>
      <ol>
        Crear un repositorio nuevo:
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

export default CreateRepository;
