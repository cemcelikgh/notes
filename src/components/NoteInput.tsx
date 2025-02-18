'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import type { NoteType } from '../types/NoteType';
import { addNote } from '../lib/features/notesSlice';
import { nanoid } from '@reduxjs/toolkit';

function NoteInput() {

  const colArr = ['e81123', '8764b8', 'ff8c00', '0063b1', '107c10'];
  const [color, setColor] = useState<string>('e81123');
  const [newNote, setNewNote] = useState<string>('');
  const [selectedButton, setSelectedButton] = useState<number>(0);
  const dispatch = useDispatch();

  const handleAddNote = (): void => {
    if(newNote.trim()) {
      const noteObj: NoteType = {
        id: nanoid(),
        note: newNote,
        color: color
      }
      dispatch(addNote(noteObj));
      setNewNote('');
    }
  }

  const handleSelectColor = (color: string, index: number): void => {
    setColor(color);
    setSelectedButton(index);
  }

  return (
    <section id='note-input'>
      <textarea id='text-input'
        value={newNote}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setNewNote(e.target.value);
        }}
        placeholder="Enter your note here..."
      />
      <div id='note-buttons'>
        <div id='color-buttons'>
          {colArr.map((color: string, index: number) => <button key={index}
            className={`color-button${selectedButton === index ? ` selected` : ''}`}
            onClick={() => {handleSelectColor(color, index)}}
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
