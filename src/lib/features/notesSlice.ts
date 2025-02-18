import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { NoteType } from '../../types/NoteType';
import { RootState } from '../store';

const noteAdaptor = createEntityAdapter<NoteType>();

export const notesSlice = createSlice({
  name: 'notes',
  initialState: noteAdaptor.getInitialState(),
  reducers: {
    addNote: noteAdaptor.addOne
  }
})

export const { addNote } = notesSlice.actions;
export const selectNotes = (state: RootState) => state.notes;
export default notesSlice.reducer;
