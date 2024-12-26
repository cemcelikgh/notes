'use client';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NoteType } from '../types/types';
import { RootState } from '../redux/store';
import { addNote } from '../redux/notesSlice';

function NoteInput() {

  const colArr = ['e81123', '8764b8', 'ff8c00', '0063b1', '107c10'];
  const [color, setColor] = useState<string>('e81123');
  const [newNote, setNewNote] = useState<string>('');
  const [selectedButton, setSelectedButton] = useState<number>(0);

  const notes = useSelector((state: RootState) => state.notes.notes);
  const handleClick = (color: string, index: number): void => {
    setColor(color);
    setSelectedButton(index);
  }

  const dispatch = useDispatch();
  const handleAddNote = (): void => {
    if(newNote.trim()) {
      const payload: NoteType = {
        id: notes.length + 1,
        note: newNote,
        color: color
      }
      dispatch(addNote(payload));
      setNewNote('');
    }
  }

  return (
    <section id='note-input'>
      <textarea id='text-input'
        value={newNote}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {setNewNote(e.target.value)}}
        placeholder="Enter your note here..."
      />
      <div id='note-buttons'>
        <div id='color-buttons'>
          {colArr.map((color: string, index: number) => <button key={index}
            className={`color-button${selectedButton === index ? ` selected-${colArr[index]}` : ''}`}
            onClick={() => {handleClick(color, index)}}
          />)}
        </div>
        <button id='add-button'
          onClick={handleAddNote}
        >ADD</button>
      </div>
    </section>
  )
}

export default NoteInput;
