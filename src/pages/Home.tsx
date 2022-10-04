import React from 'react';

import Notes from '../components/notes/Notes';
import SummaryTable from '../components/summaryTable/SummaryTable';

function Home(): JSX.Element {
  return (
    <div className="w-screen min-h-screen bg-gray-100">
      <Notes />
      <SummaryTable />
    </div>
  );
}

export default Home;
