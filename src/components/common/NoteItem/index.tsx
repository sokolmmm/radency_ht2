import React from 'react';
import styles from './NoteItem.module.scss';

interface INoteItem {
  title: string;
}

function NoteItem({ title }: INoteItem) {
  return (
    <div className={styles.noteItem}>
      <span>{title}</span>
    </div>
  );
}

export default NoteItem;
