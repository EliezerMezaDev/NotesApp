import { useContext } from "react";
import { NotesContext } from "../../context/NotesContext";

//? interfaces

//? icons
import { FaArrowCircleLeft } from "react-icons/fa";

//? others
import { getFormatedDate } from "../../utils/functions";

export const DetailsNote = () => {
  const { toggleShowDetails, currentNote } = useContext(NotesContext);

  return (
    <div className="modal details">
      <div className="modal__wrapper details__wrapper">
        <div
          className="details__backbtn"
          onClick={() => toggleShowDetails(false)}
        >
          <FaArrowCircleLeft className="icon" />
        </div>

        <h2 className="details__title">{currentNote.title}</h2>
        <i className="details__timeline">
          {getFormatedDate(currentNote.create_at!)}
        </i>
        <p className="details__desc">{currentNote.text}</p>
      </div>
    </div>
  );
};
