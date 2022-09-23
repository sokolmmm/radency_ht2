import React from 'react';
import { useSelector } from 'react-redux';
import { selectActiveTabsNotes } from '../../../redux/notes/selectors';
import Note from '../Note';
import styles from './NotesList.module.scss';

function NotesList(): any {
  const notesData = useSelector(selectActiveTabsNotes);

  return (
    <div className={styles.notesList}>
      {notesData.map((el) => (
        <Note
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
