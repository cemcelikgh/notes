import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './notesSlice';
import searchReducer from './searchSlice';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    search: searchReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
