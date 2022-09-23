import React from 'react';

import { useSelector } from 'react-redux';

import Note from '../Note';
import styles from './NotesList.module.scss';

import { selectActiveTabsNotes } from '../../../redux/notes/selectors';

function NotesList(): JSX.Element {
  const notesData = useSelector(selectActiveTabsNotes);

  return (
    <div className={styles.notesList}>
      {notesData.map((el) => (
        <Note
          id={el.id}
          name={el.name}
          created={el.created}
          category={el.category}
          content={el.content}
          dates={el.dates}
        />
      ))}
    </div>
  );
}

export default NotesList;
