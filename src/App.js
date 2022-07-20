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
  console.log(city1)

  const [search1, setSearch1] = useState('')
  const [search2, setSearch2] = useState('')

  // const [searchState1, setSearchState1] = useState('')
  // const [searchState2, setSearchState2] = useState('')

const options = {
  'headers': {
    'Authorization': 'Basic YzUyYjczZDk1NTIxOThhNTM3YzA5MDA4OThlOWQ1NTE6MTkxMGQ2M2IxYmFlY2Q4NTMyOTAzNzcwN2JlMDhhZjE=',
  }
};

let USA = 'usa'

async function getData1(search1) {
        const data = await fetch(`https://api.roadgoat.com/api/v2/destinations/${search1}-${USA}`, options)
        const res = await data.json()
            setCity1(res);
        // (error) = {
        //         // error handle
        //         console.log(error)
        // }
    }

async function getData2(search2) {
    const data = await fetch(`https://api.roadgoat.com/api/v2/destinations/${search2}-${USA}`, options)
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
          <Route path ="/" element={<Search setSearch1={setSearch1} setSearch2={setSearch2} search1={search1} search2={search2} />} />
          <Route path="/compare" element= {<Compare city1={city1} city2={city2} getData1={getData1} getData2={getData2} search1={search1} search2={search2}/>} />
          <Route path="/book" element={<Book city1={city1} city2={city2}/>} />
          <Route path="*" element={<Navigate to ="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App
