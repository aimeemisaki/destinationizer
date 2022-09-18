// PHOTO SOURCES:
// Guide, Rental Car, and Airbnb icons created by Freepik - Flaticon
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Search from './components/search/searchForm'
import Compare from './components/searchResults/Compare';
import Navigation from './components/navigation/Navigation';




function App() {

  
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path ="/" element={<Search />} />
          <Route path="/compare/:inputCity1/:inputState1/:inputCity2/:inputState2" element={<Compare />} />
          {/* <Route path="/book/:cityId" element={<Book city1={city1} city2={city2} />} /> */}
          {/* <Route path="*" element={<Navigate to ="/" />} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App
