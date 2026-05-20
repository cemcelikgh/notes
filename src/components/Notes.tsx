'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { addAllNotes, removeNote, selectNotes }
  from '../lib/features/notesSlice';
import { selectSearchValue } from '../lib/features/searchSlice';
import { useEffect } from 'react';
import { Note } from '@/types/types';

function Notes() {

  const notes = useAppSelector(selectNotes);
  const searchValue = useAppSelector(selectSearchValue);
  const dispatch = useAppDispatch();

  const filteredNotesIds = searchValue === '' ? notes.ids
    : notes.ids.filter(
        noteId => notes.entities[noteId].note
                    .toLowerCase().includes(searchValue.toLowerCase())
      );
  
  const handleRemove = (id: string) => {
    dispatch(removeNote(id));
    const notesSFLS = localStorage.getItem('notes');
    const notesAFLS = notesSFLS ? JSON.parse(notesSFLS) : [];
    const remainedNotes = notesAFLS.filter((note: Note) => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(remainedNotes));
  };

  useEffect(() => {
    const notesSFLS = localStorage.getItem('notes');
    const notesAFLS = notesSFLS ? JSON.parse(notesSFLS) : [];
    dispatch(addAllNotes(notesAFLS));
  }, []);

  return (
    <section id="notes">
      {filteredNotesIds.map(id => <div key={id}
        className={`note ${notes.entities[id].color}`} >
        <div className="remove" onClick={() => {handleRemove(id)}}>
          <svg id='xmark' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm71 135c9.4-9.4 24.6-9.4 33.9 0l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9z"/>
          </svg>
        </div>
        <p>
          {notes.entities[id].note}
        </p>
      </div>)}
    </section>
  );

}

export default Notes;
