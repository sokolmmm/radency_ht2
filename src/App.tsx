import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import NotePage from './pages/NotePage';
import './App.scss';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/note/*" element={<NotePage />} />
      </Routes>
    </div>
  );
}

export default App;
