import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import PullRequest from "../pages/pullRequest/PullRequest";
import StartProject from "../pages/startProject/StartProject";
import CreateRepository from "../pages/createRepository/CreateRepository";

function Path() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pullRequest" element={<PullRequest />} />
        <Route path="/startProject" element={<StartProject />} />
        <Route
          path="/startProject/createRepository"
          element={<CreateRepository />}
        />
        {/* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
        <Route path="*" element={() => <div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}
export default Path;
