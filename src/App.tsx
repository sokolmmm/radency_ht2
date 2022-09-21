import React from 'react'

import { Route, Routes } from 'react-router-dom'

import './App.scss'
import Home from './pages/Home/Home'

function App (): any {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/note-window" element={<div>Outlet</div>}>
          <Route path="create" element={<div>Create</div>} />
          <Route path="edit" element={<div>Edit</div>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
