// PHOTO SOURCES:
// Guide, Rental Car, and Airbnb icons created by Freepik - Flaticon
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Search from './Pages/Search';
import Compare from './Pages/Compare';
import Book from './Pages/Book';
import Navigation from './Components/Navigation';



function App() {


  const [city1, setCity1] = useState()
  const [city2, setCity2] = useState()

  const [search1, setSearch1] = useState('')
  const [search2, setSearch2] = useState('')

  const [searchState1, setSearchState1] = useState('State')
  const [searchState2, setSearchState2] = useState('State')

  let USA = 'usa'
  
  const options = {
    'headers': {
      'Authorization': 'Basic ZGRkNDdjODVkYzM5ZjU1ZjdlN2YzMmU5ZGQ0YmI0YzY6YjNmZTk5NjM4MWQ2MGQ2OTAwYmZjYmI3OWViYjExOGQ=',
    }
  };



  async function getData1(search1, searchState1) {
          const data = await fetch(`https://api.roadgoat.com/api/v2/destinations/${search1}-${searchState1}-${USA}`, options)
          const res = await data.json()
              setCity1(res);
        // (error) = {
        //         // error handle
        //         console.log(error)
        // }
    }

  async function getData2(search2, searchState2) {
      const data = await fetch(`https://api.roadgoat.com/api/v2/destinations/${search2}-${searchState2}-${USA}`, options)
      const res = await data.json()
          setCity2(res);
      // (error) = {
      //         // error handle
      //         console.log(error)
      // }
  }


  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path ="/" element={<Search setSearch1={setSearch1} setSearch2={setSearch2} search1={search1} search2={search2} setSearchState1={setSearchState1} setSearchState2={setSearchState2} searchState1={searchState1} searchState2={searchState2} />} />
          <Route path="/compare" element= {<Compare city1={city1} city2={city2} getData1={getData1} getData2={getData2} search1={search1} search2={search2} searchState1={searchState1} searchState2={searchState2} />} />
          <Route path="/book/:cityId" element={<Book city1={city1} city2={city2} />} />
          <Route path="*" element={<Navigate to ="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App
