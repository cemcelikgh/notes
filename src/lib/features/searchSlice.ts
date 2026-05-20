import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setSearch: (_state, action) => action.payload,
  },
});

export const { setSearch } = searchSlice.actions;
export const selectSearchValue = (state: RootState) => state.search;
export default searchSlice.reducer;
