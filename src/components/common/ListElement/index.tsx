import React from 'react';
import styles from './NoteItem.module.scss';

interface INoteItem {
  title: string;
}

function ListElement({ title }: INoteItem) {
  return (
    <div className={styles.noteItem}>
      <span>{title}</span>
    </div>
  );
}

export default ListElement;
