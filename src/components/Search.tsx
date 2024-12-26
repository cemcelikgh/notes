'use client';
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { setSearch } from "../redux/searchSlice";

function Search() {

  const searchValue = useSelector((state: RootState) => state.search.searchValue);

  const dispatch = useDispatch<AppDispatch>();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  }

  return (
    <input id='search'
      type="text"
      placeholder="Search"
      value={searchValue}
      onChange={handleChange}
    />
  )
}

export default Search;
