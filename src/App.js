import { Routes, Route } from 'react-router-dom';
import SearchForm from './Components/Search/SearchForm'
import Compare from './Components/SearchResults/Compare';
import Navigation from './Components/Navigation/Navigation';
import Book from './Components/Booking/Book';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path ="/" element={<SearchForm />} />
          <Route path="/compare/:inputCity1/:inputState1/:inputCity2/:inputState2" element={<Compare />} />
          <Route path="/book" element={<Book />}/>
        </Routes>
      </main>
    </>
  )
}

export default App
