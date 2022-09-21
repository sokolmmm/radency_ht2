import React from 'react';

import { Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<div>Home</div>} />
        <Route path="/note" element={<div>Outlet</div>}>
          <Route path="create" element={<div>Create</div>} />
          <Route path="edit" element={<div>Edit</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
