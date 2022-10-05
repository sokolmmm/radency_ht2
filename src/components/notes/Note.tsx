import React from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AdaptiveHeader from '../common/AdaptiveHeader';
import ListElement from '../common/ListElement';
import IconButton, { EnumIconButton } from '../common/buttons/IconButton';

import { deleteNote, setCurrentNoteId, toggleNoteStatus } from '../../redux/notes/slice';

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
    <div
      className="
      grid grid-cols-element h-30 bg-white rounded-xl shadow-xl md:grid-cols-1
      md:grid-rows-1 md:h-15 md:px-5
      "
    >
      <AdaptiveHeader headerItems={headerItems} />

      <div
        className="h-30 grid grid-rows-5 grid-cols-note items-center justify-center
        md:h-15 md:grid-cols-table md:grid-rows-1
        "
      >
        <ListElement title={name} />
        <ListElement title={created} />
        <ListElement title={category} />
        <ListElement title={content} />
        <ListElement title={dates} />
        <div
          className="
          grid grid-cols-1 grid-rows-3 gap-2.5 justify-self-center col-start-2 col-end-3 row-start-1
          row-end-6 md:col-start-6 md:col-end-7 md:row-start-1 md:grid-cols-3 md:grid-rows-1
          "
        >
          <IconButton icon={EnumIconButton.EDIT} onButtonClick={showEditNoteWindowOnClick} />
          <IconButton icon={EnumIconButton.ARCHIVE} onButtonClick={toggleNoteStatusOnClick} />
          <IconButton icon={EnumIconButton.DELETE} onButtonClick={deleteNoteOnClick} />
        </div>
      </div>
    </div>
  );
}

export default Note;
