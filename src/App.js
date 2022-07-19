import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Search from './Pages/Search';
import Compare from './Pages/Compare';
import Book from './Pages/Book';
import Navigation from './Components/Navigation';


function App() {

  return (
    <>
      <Navigation />
      <main>
      {/* <Compare /> */}
        <Routes>
          <Route path ="/" element={<Search />} />
          <Route path="/compare" element= {<Compare />} />
          <Route path="/book" element={<Book />} />
          <Route path="*" element={<Navigate to ="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App
