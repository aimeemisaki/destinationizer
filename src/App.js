// PHOTO SOURCES:
// Guide, Rental Car, and Airbnb icons created by Freepik - Flaticon
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Search from './components/search/searchForm'
// import Compare from './Pages/Compare';
// import Book from './Pages/Book';
import Navigation from './components/Navigation';




function App() {

  

  
  // const [city1, setCity1] = useState();
  // const [city2, setCity2] = useState();
  // const [search1, setSearch1] = useState('');
  // const [search2, setSearch2] = useState('');
  // const [searchState1, setSearchState1] = useState('State');
  // const [searchState2, setSearchState2] = useState('State');
  // const [error, setError] = useState('');
  // let USA = 'usa'
  
  

  // async function getData1(search1, searchState1) {
  //   const data = await fetch(`https://api.roadgoat.com/api/v2/destinations/${search1}-${searchState1}-${USA}`, options)
  //   const res = await data.json()
  //     setCity1(res);
  //   if(data.status === 401 || data.status === 402){
  //     setError("Invalid request!")
  //   } else if (data.status === 404) {
  //     setError("Please enter a valid city or town name with the proper state.")
  //   } else if (data.status >= 400) {
  //     setError("Something went wrong!")
  //   }
  //   console.log(res.data.attributes)
  // }

  

  // async function getData2(search2, searchState2) {
  //   const data = await fetch(`https://api.roadgoat.com/api/v2/destinations/${search2}-${searchState2}-${USA}`, options)
  //   const res = await data.json()
  //     setCity2(res);
  //   if(data.status === 401 || data.status === 402){
  //     setError("Invalid request!")
  //   } else if (data.status === 404) {
  //     setError("Please enter a valid city or town name with the proper state.")
  //   } else if (data.status >= 400) {
  //     setError("Something went wrong!")
  //   }
  // }
  
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path ="/" element={<Search />} />
          {/* <Route path="/compare" element= {<Compare city1={city1} city2={city2} getData1={getData1} getData2={getData2} search1={search1} search2={search2} searchState1={searchState1} searchState2={searchState2} error={error}/>} />
          <Route path="/book/:cityId" element={<Book city1={city1} city2={city2} />} /> */}
          <Route path="*" element={<Navigate to ="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App
