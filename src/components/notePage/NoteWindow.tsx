/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import NoteWindowForm from './NoteWindowForm';
import NoteWindowTitle from './NoteWindowTitle';
import DateUtils from '../../utils/datesUtils';

import { saveEditedNote, saveCreatedNote } from '../../redux/notes/slice';
import { selectCurrentNote, selectNewNoteId } from '../../redux/notes/selectors';

function NoteWindow() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentNote = useSelector(selectCurrentNote);
  const newNoteId = useSelector(selectNewNoteId);

  const editNoteOnClick = (name: string, content: string, category: string): void => {
    if (currentNote) {
      const dates = DateUtils.getDatesFromText(content);
      dispatch(
        saveEditedNote({
          id: currentNote.id,
          name,
          content,
          category,
          dates,
        }),
      );
      navigate('/');
    }
  };

  const saveNoteOnClick = (name: string, content: string, category: string): void => {
    const created = DateUtils.getFormattedNowDate();
    const dates = DateUtils.getDatesFromText(content);
    dispatch(
      saveCreatedNote({
        id: newNoteId,
        name,
        content,
        category,
        created,
        dates,
        isActive: true,
      }),
    );
    navigate('/');
  };

  const newNoteData = {
    title: 'Create Note',
    noteValues: {
      name: '',
      category: '',
      content: '',
    },
    onSubmitFunction: saveNoteOnClick,
  };

  const [initialData, setInitialData] = React.useState(newNoteData);

  React.useLayoutEffect(() => {
    if (location.pathname === '/note/create') {
      setInitialData(newNoteData);
    } else if (location.pathname.includes('edit') && currentNote) {
      setInitialData({
        title: 'Edit Note',
        noteValues: {
          name: currentNote.name,
          category: currentNote.category,
          content: currentNote.content,
        },
        onSubmitFunction: editNoteOnClick,
      });
    }
  }, [location.pathname]);

  return (
    <section className="mx-5 p-10 bg-white rounded-2xl">
      <NoteWindowTitle title={initialData.title} />
      <NoteWindowForm
        initialData={initialData.noteValues}
        onSubmitFunction={initialData.onSubmitFunction}
      />
    </section>
  );
}

export default NoteWindow;
