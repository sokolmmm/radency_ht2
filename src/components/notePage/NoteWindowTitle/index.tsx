import React from 'react';

import { useNavigate } from 'react-router-dom';

import IconButton, { EnumIconButton } from '../../common/buttons/IconButton';
import styles from './NoteWindowTitle.module.scss';

interface INoteWindow {
  title: string;
}

function NoteWindowTitle({ title }: INoteWindow): JSX.Element {
  const navigate = useNavigate();

  const closeWindow = (): void => {
    navigate('/');
  };
  return (
    <header className={styles.noteWindowTitle}>
      <h3>{title}</h3>
      <IconButton icon={EnumIconButton.CLOSE} onButtonClick={closeWindow} />
    </header>
  );
}

export default NoteWindowTitle;
