import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddNote from './pages/AddNote';
import Notes from './pages/Notes';
import Header from './components/Header';
import UpdateNote from './components/UpdateNote';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/add-note" element={<AddNote />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/updates" element={<UpdateNote />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
