'use client';

import { useState } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { addNote } from '../lib/features/notesSlice';
import { nanoid } from '@reduxjs/toolkit';

const colArr = ['red', 'purple', 'yellow', 'blue', 'green'];

function NoteInput() {

  const dispatch = useAppDispatch();
  const [newNote, setNewNote] = useState('');
  const [color, setColor] = useState('red');
  const [selectedButton, setSelectedButton] = useState(0);

  const handleAddNote = () => {
    if(newNote.trim()) {
      const noteObj = {
        id: nanoid(),
        note: newNote,
        color: color,
      };
      dispatch(addNote(noteObj));
      setNewNote('');
      const notesSFLS = localStorage.getItem('notes');
      const notesAFLS = notesSFLS ? JSON.parse(notesSFLS) : [];
      const notesWNN = [...notesAFLS, noteObj];
      localStorage.setItem('notes', JSON.stringify(notesWNN));
    };
  };

  const handleSelectColor = (color: string, index: number) => {
    setColor(color);
    setSelectedButton(index);
  };

  return (
    <section id='note-input'>
      <textarea id='note-text-input'
        value={newNote}
        onChange={(e) => {
          setNewNote(e.target.value);
        }}
        placeholder="Enter your note here..."
      />
      <div id='note-buttons'>
        <div id='color-buttons'>
          {colArr.map((color, index) => <button key={index}
            className={`color-button ${selectedButton === index ? 'selected' : ''}`}
            onClick={() => {handleSelectColor(color, index)}}
          />)}
        </div>
        <button id='add-button'
          onClick={handleAddNote}
        >ADD</button>
      </div>
    </section>
  );

}

export default NoteInput;
