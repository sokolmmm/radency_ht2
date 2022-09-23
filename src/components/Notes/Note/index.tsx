import React from 'react';
import { useDispatch } from 'react-redux';

import NoteItem from '../../common/NoteItem';
import IconButton, { EnumIconButton } from '../../common/buttons/IconButton/IconButton';
import styles from './Note.module.scss';
import { deleteNote } from '../../../redux/notes/slice';

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

  return (
    <div className={styles.note}>
      <NoteItem title={name} />
      <NoteItem title={created} />
      <NoteItem title={category} />
      <NoteItem title={content} />
      <NoteItem title={dates} />
      <div className={styles.buttonsBlock}>
        <IconButton icon={EnumIconButton.EDIT} onButtonClick={() => null} />
        <IconButton icon={EnumIconButton.ARCHIVE} onButtonClick={() => null} />
        <IconButton icon={EnumIconButton.DELETE} onButtonClick={deleteNoteOnClick} />
      </div>
    </div>
  );
}

export default Note;
