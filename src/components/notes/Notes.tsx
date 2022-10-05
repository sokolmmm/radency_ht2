import React from 'react';

import { useNavigate } from 'react-router-dom';

import Tabs from './Tabs';
import NotesTable from './NotesTable';
import GreenButton from '../common/buttons/GreenButton/GreenButton';

function Notes(): JSX.Element {
  const navigate = useNavigate();

  const showCreateNoteWindow = () => {
    navigate('note/create');
  };

  return (
    <section className="p-5 grid gap-3">
      <Tabs />
      <NotesTable />
      <GreenButton
        title="Create Note"
        isSubmitButton={false}
        onButtonClick={showCreateNoteWindow}
      />
    </section>
  );
}

export default Notes;
