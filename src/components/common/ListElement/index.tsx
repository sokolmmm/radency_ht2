import React from 'react';
import styles from './NoteItem.module.scss';

interface INoteItem {
  title: string;
}

function ListElement({ title }: INoteItem): JSX.Element {
  return (
    <div className={styles.listElement}>
      <span>{title}</span>
    </div>
  );
}

export default ListElement;
