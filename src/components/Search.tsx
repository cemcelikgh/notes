'use client';

import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { selectSearchValue, setSearch }
  from "../lib/features/searchSlice";

function Search() {

  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(selectSearchValue);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <input id='search-text-input'
      type="text"
      placeholder="Search"
      value={searchValue}
      onChange={handleInput}
    />
  );

}

export default Search;
