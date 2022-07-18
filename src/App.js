import './App.css';
import React, { useEffect } from 'react';
import Form from './Pages/Form';
import Compare from './Pages/Compare';
import Book from './Pages/Book';
import NavBar from './Components/NavBar'


function App() {

    const options = {
      'headers': {
        'Authorization': 'Basic YzUyYjczZDk1NTIxOThhNTM3YzA5MDA4OThlOWQ1NTE6MTkxMGQ2M2IxYmFlY2Q4NTMyOTAzNzcwN2JlMDhhZjE=',
      }
      // 'destionation_type': 'State',
      // 'name': 'CA'
    };
    
  
    const getData = () => {
      fetch('https://api.roadgoat.com/api/v2/destinations/los-angeles-ca-usa', options)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
        },
        (error) => {
          console.log(error)
        }
      )
    }
  
    useEffect(() => {
      getData()
    }, [])


  return (
    <div>
      <NavBar />
      <Form />
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
