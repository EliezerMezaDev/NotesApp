import { useContext, useEffect, useState } from "react";

import { NotesContext } from "../../context/NotesContext";

//? components
import NoteCard from "../globals/NoteCard";

//? interfaces
import { Note } from "../../assets/interfaces";

//? icons
import { FaSearch } from "react-icons/fa";
import { UpsertNote } from "../globals/UpsertNote";
import { DetailsNote } from "../globals/DetailsNote";

export const Board = () => {
  const {
    notes,

    showUpsert,
    showDetails,
  } = useContext(NotesContext);

  const [viewNotes, setViewNotes] = useState<Note[]>(notes);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleFilter = (event: any) => {
    event.preventDefault();

    if (!searchTerm || searchTerm === "") {
      setViewNotes(notes);

      return;
    }

    setViewNotes(
      notes.filter(
        (n: Note) => n.title.includes(searchTerm) || n.text.includes(searchTerm)
      )
    );
  };

  useEffect(() => {


    setViewNotes(notes);
  }, [0]);

  console.log(`<>>> notes <>>>`, notes);


  return (
    <main className="section board">
      <div className="board__filters filter searchbar">
        <span className="inputWrapper">
          <input
            type="text"
            className="input search"
            placeholder="buscar..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </span>

        <button className="iconWrapper" onClick={(e) => handleFilter(e)}>
          <FaSearch className="icon" />
        </button>
      </div>

      <div className="notes">
        {viewNotes &&
          viewNotes.map((n: Note, index: number) => (
            <NoteCard key={`note_${index}`} noteSource={n} />
          ))}
      </div>

      {showUpsert && <UpsertNote />}
      {showDetails && <DetailsNote />}
    </main>
  );
};
