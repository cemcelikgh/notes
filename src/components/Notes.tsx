'use client';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

function Notes() {

  const notes = useSelector((state: RootState) => state.notes.notes);
  const searchValue = useSelector((state: RootState) => state.search.searchValue);
  const filteredNotes = searchValue === '' ? notes
    : notes.filter(note => note.note.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <section id="notes">
      {filteredNotes.map((filNote) => <p
        id={`note-${filNote.id}`}
        key={filNote.id}
        style={{backgroundColor: '#' + filNote.color}}
      >
        {filNote.note}
      </p>)}
    </section>
  )
}

export default Notes;
