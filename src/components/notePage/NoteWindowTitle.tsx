import React from 'react';

import { useNavigate } from 'react-router-dom';

import IconButton, { EnumIconButton } from '../common/buttons/IconButton/IconButton';

interface INoteWindow {
  title: string;
}

function NoteWindowTitle({ title }: INoteWindow): JSX.Element {
  const navigate = useNavigate();

  const closeWindow = (): void => {
    navigate('/');
  };
  return (
    <header className="h-10 flex justify-between items-center mb-5">
      <h3 className="font-mono text-2xl font-semibold text-teal-700">{title}</h3>
      <IconButton icon={EnumIconButton.CLOSE} onButtonClick={closeWindow} />
    </header>
  );
}

export default NoteWindowTitle;
