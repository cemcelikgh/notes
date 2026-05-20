import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './features/notesSlice';
import searchReducer from './features/searchSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      notes: notesReducer,
      search: searchReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
