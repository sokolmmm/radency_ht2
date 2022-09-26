/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import NoteWindow from '../../components/notePage/NoteWindow';
import styles from './NotePage.module.scss';

function NotePage(): JSX.Element {
  return (
    <div className={styles.notePage}>
      <NoteWindow />
    </div>
  );
}

export default NotePage;
