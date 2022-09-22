import React from 'react';
import GreenButton from '../../common/buttons/GreenButton/GreenButton';
import NotesTable from '../NotesTable/NotesTable';
import Tabs from '../Tabs/Tabs';
import styles from './Notes.module.scss';

function Notes(): JSX.Element {
  return (
    <section className={styles.notesTable}>
      <Tabs />
      <NotesTable />
      <GreenButton title="Create Note" />
    </section>
  );
}

export default Notes;
