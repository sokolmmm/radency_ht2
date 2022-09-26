import React from 'react';

import { Route, Routes } from 'react-router-dom';

import './App.scss';
import Home from './pages/Home/Home';
import NotePage from './pages/NotePage';

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
