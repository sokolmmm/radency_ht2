import React from 'react';

import NotesList from './NotesList';
import NotesTableHeader from './NotesTableHeader';

function NotesTable(): JSX.Element {
  return (
    <div>
      <NotesTableHeader />
      <NotesList />
    </div>
  );
}

export default NotesTable;
