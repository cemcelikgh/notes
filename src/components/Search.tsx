'use client';

import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../lib/store";
import { selectSearchValue, setSearch }
  from "../lib/features/searchSlice";

function Search() {

  const searchValue = useSelector(selectSearchValue);

  const dispatch = useDispatch<AppDispatch>();
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  }

  return (
    <input id='search'
      type="text"
      placeholder="Search"
      value={searchValue}
      onChange={handleInput}
    />
  )
}

export default Search;
