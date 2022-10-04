import React from 'react';
import { useSelector } from 'react-redux';

import Note from './Note';
import { selectNotesByActiveTabs } from '../../redux/notes/selectors';

function NotesList(): JSX.Element {
  const notesData = useSelector(selectNotesByActiveTabs);

  return (
    <div className="mt-3 grid gap-3">
      {notesData.map((el) => (
        <Note
          key={el.id}
          id={el.id}
          name={el.name}
          created={el.created}
          category={el.category}
          content={el.content}
          dates={el.dates}
        />
      ))}
    </div>
  );
}

export default NotesList;
