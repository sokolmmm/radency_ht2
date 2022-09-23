import React from 'react';

import NoteItem from '../../common/NoteItem';
import IconButton, { EnumIconButton } from '../../common/buttons/IconButton/IconButton';
import styles from './Note.module.scss';

interface INote {
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
}

function Note({
  name, created, category, content, dates,
}: INote) {
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
        <IconButton icon={EnumIconButton.DELETE} onButtonClick={() => null} />
      </div>
    </div>
  );
}

export default Note;
