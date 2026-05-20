import NoteInput from "../components/NoteInput";
import Notes from "../components/Notes";
import Search from "../components/Search";
import StoreProvider from "./StoreProvider";

function Home() {
  return (
    <StoreProvider>
      <main>
        <h1>NOTES</h1>
        <Search />
        <NoteInput />
        <Notes />
      </main>
    </StoreProvider>
  );
}

export default Home;
