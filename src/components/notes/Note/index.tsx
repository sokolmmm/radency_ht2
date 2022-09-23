import React from 'react';
import { useDispatch } from 'react-redux';

import ListElement from '../../common/ListElement';
import IconButton, { EnumIconButton } from '../../common/buttons/IconButton/IconButton';
import styles from './Note.module.scss';

import { deleteNote, toggleNoteStatus } from '../../../redux/notes/slice';

interface INote {
  id: string;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
}

function Note({
  id, name, created, category, content, dates,
}: INote) {
  const dispatch = useDispatch();

  const deleteNoteOnClick = (): void => {
    dispatch(deleteNote(id));
  };

  const toggleNoteStatusOnClick = (): void => {
    dispatch(toggleNoteStatus(id));
  };

  return (
    <div className={styles.note}>
      <ListElement title={name} />
      <ListElement title={created} />
      <ListElement title={category} />
      <ListElement title={content} />
      <ListElement title={dates} />
      <div className={styles.buttonsBlock}>
        <IconButton icon={EnumIconButton.EDIT} onButtonClick={() => null} />
        <IconButton icon={EnumIconButton.ARCHIVE} onButtonClick={toggleNoteStatusOnClick} />
        <IconButton icon={EnumIconButton.DELETE} onButtonClick={deleteNoteOnClick} />
      </div>
    </div>
  );
}

export default Note;
