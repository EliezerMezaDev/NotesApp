import "./styles/app.scss";

import { Navbar } from "./components/globals/Navbar";

//? sections
import { Board } from "./components/sections/Board";

function App() {
  return (
    <>
      <div id="container-all" className="container-all">
        <Navbar />
        <Board />
      </div>
    </>
  );
}

export default App;
