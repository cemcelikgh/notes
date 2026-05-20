import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Note } from '@/types/types';

const notesAdaptor = createEntityAdapter<Note>();
const initialState = notesAdaptor.getInitialState();

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: notesAdaptor.addOne,
    removeNote: notesAdaptor.removeOne,
    addAllNotes: notesAdaptor.setAll,
  },
});

export const { addNote, removeNote, addAllNotes } = notesSlice.actions;
export const selectNotes = (state: RootState) => state.notes;
export default notesSlice.reducer;
