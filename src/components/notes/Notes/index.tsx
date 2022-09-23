import React from 'react';
import GreenButton from '../../common/buttons/GreenButton/GreenButton';
import NotesTable from '../NotesTable';
import Tabs from '../Tabs';
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
