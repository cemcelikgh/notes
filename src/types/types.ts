export type NoteType = {
  id: number,
  note: string,
  color: string
}

export type NotesIntStaType = {
  notes: NoteType[]
}

export type SearchIntStaType = {
  searchValue: string
}
