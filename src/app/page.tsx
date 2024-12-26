import type { Metadata } from "next";
import styles from "./page.module.css";
import NoteInput from "../components/NoteInput";
import Notes from "../components/Notes";
import Search from "../components/Search";

export const metadata: Metadata = {
  title: "Notes",
  icons: {
    icon: 'note-sticky-solid.svg'
  }
};

function Home() {
  return (
    <main>
      <h1 className={styles.heading}>NOTES</h1>
      <Search />
      <NoteInput />
      <Notes />
    </main>
  )
}

export default Home;
