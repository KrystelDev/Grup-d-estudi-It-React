import { Link } from "react-router-dom";
import { Fragment } from "react";

export default () => (
  <Fragment>
    <ul>
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="/pullRequest">Pull Request</Link>
      </li>
      <li>
        <Link to="/startProject">Empezar un proyecto</Link>
      </li>
    </ul>
  </Fragment>
);
