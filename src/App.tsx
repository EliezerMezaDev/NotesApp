import { NotesContextProvider } from "./context/NotesContext";

import "./styles/app.scss";

import { Navbar } from "./components/globals/Navbar";

//? sections
import { Board } from "./components/sections/Board";

function App() {
  return (
    <>
      <div id="container-all" className="container-all">
        <NotesContextProvider>
          <>
            <Navbar />
            <Board />
          </>
        </NotesContextProvider>
      </div>
    </>
  );
}

export default App;
