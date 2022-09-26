import React from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AdaptiveHeader from '../../common/AdaptiveHeader';
import ListElement from '../../common/ListElement';
import IconButton, { EnumIconButton } from '../../common/buttons/IconButton';
import styles from './Note.module.scss';

import { deleteNote, setCurrentNoteId, toggleNoteStatus } from '../../../redux/notes/slice';

interface INote {
  id: number;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
}

const headerItems = ['Name', 'Created', 'Category', 'Content', 'Dates'];

function Note({
  id, name, created, category, content, dates,
}: INote): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteNoteOnClick = (): void => {
    dispatch(deleteNote(id));
  };

  const toggleNoteStatusOnClick = (): void => {
    dispatch(toggleNoteStatus(id));
  };

  const showEditNoteWindowOnClick = (): void => {
    dispatch(setCurrentNoteId(id));
    navigate(`/note/${id}/edit`);
  };

  return (
    <div className={styles.note}>
      <AdaptiveHeader headerItems={headerItems} />

      <div className={styles.elementsList}>
        <ListElement title={name} />
        <ListElement title={created} />
        <ListElement title={category} />
        <ListElement title={content} />
        <ListElement title={dates} />
        <div className={styles.buttonsBlock}>
          <IconButton icon={EnumIconButton.EDIT} onButtonClick={showEditNoteWindowOnClick} />
          <IconButton icon={EnumIconButton.ARCHIVE} onButtonClick={toggleNoteStatusOnClick} />
          <IconButton icon={EnumIconButton.DELETE} onButtonClick={deleteNoteOnClick} />
        </div>
      </div>
    </div>
  );
}

export default Note;
