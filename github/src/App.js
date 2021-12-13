import React, { Fragment } from "react";
import "./styled/App.css";
import Routes from "./application/routes";
import Header from "./components/Header";

function App() {
  return (
    <Fragment>
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
