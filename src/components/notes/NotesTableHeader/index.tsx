import React from 'react';

import { useDispatch } from 'react-redux';

import styles from './NotesTableHeader.module.scss';
import HeaderElement from '../../common/HeaderElement';
import IconButton, { EnumIconButton } from '../../common/buttons/IconButton';

import { deleteNotes, toggleNotesStatus } from '../../../redux/notes/slice';

const headerItems = ['Name', 'Created', 'Category', 'Content', 'Dates'];

function NotesTableHeader(): JSX.Element {
  const dispatch = useDispatch();

  const deleteAllNotes = (): void => {
    dispatch(deleteNotes());
  };

  const toggleAllNoteStatus = (): void => {
    dispatch(toggleNotesStatus());
  };

  return (
    <header className={styles.notesTableHeader}>
      {headerItems.map((el) => (
        <HeaderElement title={el} key={el} />
      ))}

      <div className={styles.buttonsBlock}>
        <IconButton icon={EnumIconButton.ARCHIVE} onButtonClick={toggleAllNoteStatus} />
        <IconButton icon={EnumIconButton.DELETE} onButtonClick={deleteAllNotes} />
      </div>
    </header>
  );
}

export default NotesTableHeader;
