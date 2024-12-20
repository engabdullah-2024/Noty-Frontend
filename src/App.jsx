import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddNote from './pages/AddNote';
import Notes from './pages/Notes';
import Header from './components/Header';
import UpdateNote from './components/UpdateNote';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/add-note" element={<AddNote />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/updates" element={<UpdateNote />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
