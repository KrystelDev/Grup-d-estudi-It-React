import { Link } from "react-router-dom";
import { Fragment } from "react";

function Home() {
  return (
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
}
export default Home;
