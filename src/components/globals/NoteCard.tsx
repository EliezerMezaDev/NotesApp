import { Note } from "../../assets/interfaces";

import { getFormatedDate } from "../../utils/functions";

import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

const NoteCard = (props: Note) => {
  const MAX_CHARS_TO_TEXT = 87;

  let { title, text, create_at } = props;


  return (
    <article className="note">
      <h2 className="note__title">{title}</h2>

      <div className="note__body">
        <p className="note__text">{text}</p>
        
          <i className="note__view">Ver mas</i>

        <span className="note__options">
          <div className="void">{getFormatedDate(create_at!)}</div>

          <div className="buttons">
            <button className="buttons__item edit">
              <FaEdit className="icon" />
            </button>

            <button className="buttons__item delete">
              <FaTrash className="icon" />
            </button>
          </div>
        </span>
      </div>
    </article>
  );
};

export default NoteCard;
