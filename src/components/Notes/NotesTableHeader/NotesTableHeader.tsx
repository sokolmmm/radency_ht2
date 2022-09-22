import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNotes } from '../../../redux/notes/slice';
import IconButton, { EnumIconButton } from '../../common/buttons/IconButton/IconButton';
import TableHeaderItem from '../../common/TableHeaderItem';
import styles from './NotesTableHeader.module.scss';

const headerItems = ['Name', 'Created', 'Category', 'Content', 'Dates'];

function NotesTableHeader(): JSX.Element {
  const dispatch = useDispatch();

  const deleteAllNotes = (): void => {
    dispatch(deleteNotes());
  };

  return (
    <header className={styles.notesTableHeader}>
      {headerItems.map((el) => (
        <TableHeaderItem title={el} key={el} />
      ))}

      <div className={styles.buttonsBlock}>
        <IconButton icon={EnumIconButton.ARCHIVE} onButtonClick={deleteAllNotes} />
        <IconButton icon={EnumIconButton.DELETE} onButtonClick={deleteAllNotes} />
      </div>
    </header>
  );
}

export default NotesTableHeader;
