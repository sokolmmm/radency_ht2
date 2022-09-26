import React from 'react';

import NotesList from '../NotesList';
import NotesTableHeader from '../NotesTableHeader';
import styles from './NotesTable.module.scss';

function NotesTable(): JSX.Element {
  return (
    <div className={styles.notesTable}>
      <NotesTableHeader />
      <NotesList />
    </div>
  );
}

export default NotesTable;
