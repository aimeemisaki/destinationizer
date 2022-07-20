import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Search from './Pages/Search';
import Compare from './Pages/Compare';
import Book from './Pages/Book';
import Navigation from './Components/Navigation';



function App() {

  const [city1, setCity1] = useState()
  const [city2, setCity2] = useState()

  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path ="/" element={<Search setCity1={setCity1} setCity2={setCity2}/>} />
          <Route path="/compare" element= {<Compare city1={city1} city2={city2}/>} />
          <Route path="/book" element={<Book city1={city1} city2={city2}/>} />
          <Route path="*" element={<Navigate to ="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App
