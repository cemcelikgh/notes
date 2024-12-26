import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { SearchIntStaType } from '../types/types';

const initialState: SearchIntStaType = {
  searchValue: ''
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state: SearchIntStaType, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    }
  }
})

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
