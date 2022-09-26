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
