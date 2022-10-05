import React from 'react';

import { useDispatch } from 'react-redux';

import HeaderElement from '../common/HeaderElement';
import IconButton, { EnumIconButton } from '../common/buttons/IconButton/IconButton';

import { deleteNotes, toggleNotesStatus } from '../../redux/notes/slice';

const headerItems = ['Name', 'Created', 'Category', 'Content', 'Dates'];

function NotesTableHeader(): JSX.Element {
  const dispatch = useDispatch();

  const deleteAllNotes = (): void => {
    dispatch(deleteNotes());
  };

  const toggleAllNoteStatus = (): void => {
    dispatch(toggleNotesStatus());
  };

  return (
    <header
      className="
        hidden h-10 shadow-xl bg-teal-700 rounded-lg py-0 px-5 grid-cols-table items-center md:grid
      "
    >
      {headerItems.map((el) => (
        <HeaderElement title={el} key={el} />
      ))}

      <div className="justify-self-end grid h-5 grid-cols-2 gap-2.5">
        <IconButton icon={EnumIconButton.ARCHIVE} onButtonClick={toggleAllNoteStatus} />
        <IconButton icon={EnumIconButton.DELETE} onButtonClick={deleteAllNotes} />
      </div>
    </header>
  );
}

export default NotesTableHeader;
