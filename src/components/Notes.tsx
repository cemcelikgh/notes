'use client';

import { useSelector } from 'react-redux';
import { selectNotes } from '../lib/features/notesSlice';
import { selectSearchValue } from '../lib/features/searchSlice';

function Notes() {

  const notes = useSelector(selectNotes);
  const searchValue = useSelector(selectSearchValue);
  const filteredNotesIDs = searchValue === '' ? notes.ids
    : notes.ids.filter(
        noteID =>  notes.entities[noteID].note
                    .toLowerCase().includes(searchValue.toLowerCase())
      );

  return (
    <section id="notes">
      {filteredNotesIDs.map((ID) => <p
        id={ID} key={ID}
        style={{backgroundColor: '#' + notes.entities[ID].color}}
      >
        {notes.entities[ID].note}
      </p>)}
    </section>
  )
}

export default Notes;
