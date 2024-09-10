import { useContext } from "react";
import { NotesContext } from "../../context/NotesContext";

import { Note } from "../../assets/interfaces";

//? icons
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

//? functions
import { getFormatedDate } from "../../utils/functions";

const NoteCard = (props: { noteSource: Note }) => {
  const { handleOpenDetailsNote, handleOpenUpsertNote, handleDeleteNote } =
    useContext(NotesContext);

  let { noteSource } = props;

  return (
    <article className="note">
      <h2
        className="note__title"
        onClick={() => handleOpenDetailsNote(noteSource)}
      >
        {noteSource.title}
      </h2>

      <div className="note__body">
        <p className="note__text">{noteSource.text}</p>

        <i
          className="note__view"
          onClick={() => handleOpenDetailsNote(noteSource)}
        >
          Ver mas
        </i>

        <span className="note__options">
          <div className="void">{getFormatedDate(noteSource.create_at!)}</div>

          <div className="buttons">
            <button
              className="buttons__item edit"
              onClick={() => handleOpenUpsertNote(noteSource)}
            >
              <FaEdit className="icon" />
            </button>

            <button
              className="buttons__item delete"
              onClick={() => handleDeleteNote(noteSource.id)}
            >
              <FaTrash className="icon" />
            </button>
          </div>
        </span>
      </div>
    </article>
  );
};

export default NoteCard;
