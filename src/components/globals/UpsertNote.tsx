//? interfaces
import { NotesContext } from "../../context/NotesContext";
import { useContext, useState } from "react";

//? icons
import { FaEdit, FaTrashAlt, FaWindowClose } from "react-icons/fa";
import { GrClearOption } from "react-icons/gr";
import { MdSave } from "react-icons/md";

export const UpsertNote = () => {
  const { currentNote, handleCloseModal, handleDeleteNote, handleSaveNote } =
    useContext(NotesContext);

  const [title, setTitle] = useState(currentNote ? currentNote.title : "");
  const [text, setText] = useState(currentNote ? currentNote.text : "");

  const handleDelete = (event: any) => {
    event.preventDefault();

    handleDeleteNote(currentNote.id);
  };

  const handleClearForm = () => {};

  const handleSubmit = (event: any) => {
    event.preventDefault();

    handleSaveNote({
      title,
      text,
    });
  };

  return (
    <div className="modal upsert">
      <div className="modal__wrapper upsert__wrapper">
        <header className="upsert__header">
          <h2 className="upsert__header__title">
            {!currentNote ? "Registrar" : "Edit"} nota
          </h2>

          <button
            className="upsert__header__btn close"
            onClick={() => handleCloseModal(false)}
          >
            <FaWindowClose className="icon" />
          </button>
        </header>

        <form className="form" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Titulo..."
            className="form__input title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Nota..."
            rows={10}
            className="form__input desc"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>

          <div className="buttons">
            <button
              className={
                !currentNote ? "buttons__item" : "buttons__item danger"
              }
              onClick={!currentNote ? handleClearForm : handleDelete}
            >
              {!currentNote ? (
                <>
                  Limpiar <GrClearOption className="icon" />
                </>
              ) : (
                <>
                  Eliminar <FaTrashAlt className="icon" />
                </>
              )}
            </button>

            <button
              className={
                !currentNote ? "buttons__item success" : "buttons__item warning"
              }
              onClick={handleSubmit}
            >
              {!currentNote ? (
                <>
                  Guardar <MdSave className="icon" />
                </>
              ) : (
                <>
                  Editar <FaEdit className="icon" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
