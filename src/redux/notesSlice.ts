import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { NotesIntStaType, NoteType } from '../types/types';

const initialState: NotesIntStaType = {
  notes: []
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state: NotesIntStaType, action: PayloadAction<NoteType>) => {
      state.notes = [...state.notes, action.payload];
    }
  }
})

export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;
