import { FaSearch } from "react-icons/fa";
import { Note } from "../../assets/interfaces";
import NoteCard from "../globals/NoteCard";

const notes: Note[] = [
  {
    id: 0,
    title: "Nota 1",
    text: "Lorem ipsum dolor sit a ipsum dolor sit a ipsum dolor sit a",
    create_at: 1712956071075,
    update_at: 1722956071075,
  },
  {
    id: 1,
    title: "Nota 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam ipsum possimus fuga fugit architecto. Saepe cupiditate natus quasi debitis recusandae ut, aut rerum nostrum, repudiandae obcaecati perferendis dolorem, architecto distinctio.",
    create_at: 1722926071075,
    update_at: 1721952071075,
  },
];

export const Board = () => {
  return (
    <main className="section board">
      <div className="board__filters filter searchbar">
        <span className="inputWrapper">
          <input type="text" className="input search" placeholder="buscar..." />
        </span>

        <button className="iconWrapper">
          <FaSearch className="icon" />
        </button>
      </div>

      <div className="notes">
        {notes &&
          notes.map((n: Note, index) => (
            <NoteCard
              key={`note_${index}`}
              title={n.title}
              text={n.text}
              create_at={n.create_at}
            />
          ))}
      </div>
    </main>
  );
};
