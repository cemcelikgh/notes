'use client';

import NoteInput from "../components/NoteInput";
import Notes from "../components/Notes";
import Search from "../components/Search";
import { Provider } from "react-redux";
import { store } from "../lib/store";


function Home() {
  return (
    <Provider store={store}>
      <main>
        <h1>NOTES</h1>
        <Search />
        <NoteInput />
        <Notes />
      </main>
    </Provider>
  )
}

export default Home;
