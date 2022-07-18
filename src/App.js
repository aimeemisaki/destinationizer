import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Form from './Pages/Form';
import Compare from './Pages/Compare';
import Book from './Pages/Book';
import NavBar from './Components/NavBar'


function App() {

  return (
    <div>
      <NavBar />
      <Compare />
      <main>
        {/* <Routes>
          <Route path ="/" element={<Form />} />
          <Route path="/compare" element= {<Compare />} />
          <Route path="/book" element={<Book />} />
          <Route path="*" element={<Navigate to ="/" />} />
        </Routes> */}
      </main>
    </div>
  );
}

export default App
