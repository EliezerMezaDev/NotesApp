import { useContext } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { NotesContext } from "../../context/NotesContext";

export const Navbar = () => {
  const { handleOpenCreateNote } = useContext(NotesContext);

  return (
    <nav className="container navbar">
      <span className="logo">Notes App</span>

      <div className="options">
        <button className="option" onClick={() => handleOpenCreateNote()}>
          <MdAddToPhotos className="icon" />
        </button>
      </div>
    </nav>
  );
};
