import React from 'react';

import NoteWindow from '../components/notePage/NoteWindow';

function NotePage(): JSX.Element {
  return (
    <div
      className=" w-screen h-screen bg-gray-100 grid justify-center items-center grid-cols-window"
    >
      <NoteWindow />
    </div>
  );
}

export default NotePage;
