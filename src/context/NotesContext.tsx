import { createContext, useEffect, useState } from "react";
import { v4 as getID } from "uuid";

import { Note } from "../assets/interfaces";
import { useLocalStorage } from "../hooks/localStorage";
type NotesContextProviderProps = {
  children: React.ReactElement;
};

const NotesContext = createContext<any>(null);

const NotesContextProvider = ({ children }: NotesContextProviderProps) => {
  const [notes, setNotes] = useLocalStorage("NotesApp__notes", []);
  const [currentNote, setCurrentNote] = useState<any>(null);

  const [showUpsert, toggleShowUpsert] = useState<boolean>(false);
  const [showDetails, toggleShowDetails] = useState<boolean>(false);

  function handleCloseModal() {
    setCurrentNote(null);

    toggleShowUpsert(false);
    toggleShowDetails(false);
  }

  function handleOpenDetailsNote(note?: Note) {
    setCurrentNote(note);

    toggleShowDetails(true);
  }

  function handleOpenUpsertNote(note: Note) {
    setCurrentNote(note);

    toggleShowUpsert(true);
  }

  function handleOpenCreateNote() {
    toggleShowUpsert(true);
  }

  function handleSaveNote(note: { title: string; text: string }) {
    if (!note) return;

    let newNotes = [];

    if (!currentNote) {
      //? create note

      newNotes = [
        ...notes,
        {
          id: getID(),
          title: note.title,
          text: note.text,
          create_at: new Date().getTime(),
          update_at: new Date().getTime(),
        },
      ];
    } else {
      //? edit note

      notes.forEach((n: Note) => {
        if (n.id === currentNote.id) {
          n.title = note.title;
          n.text = note.text;
          n.update_at = new Date().getTime();
        }
      });

      newNotes = notes;
    }

    setNotes(newNotes);

    handleCloseModal();
  }

  function handleDeleteNote(id: string) {
    let newNotes = notes.filter((n: Note) => n.id !== id);

    setNotes(newNotes);

    handleCloseModal();
  }

  return (
    <NotesContext.Provider
      value={{
        notes,
        setNotes,
        currentNote,
        setCurrentNote,

        showUpsert,
        toggleShowUpsert,
        showDetails,
        toggleShowDetails,

        handleCloseModal,

        handleOpenDetailsNote,
        handleOpenUpsertNote,
        handleOpenCreateNote,
        handleSaveNote,
        handleDeleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesContextProvider };
