import { Routes, Route } from 'react-router-dom';
import SearchForm from './components/search/searchForm'
import Compare from './components/searchResults/Compare';
import Navigation from './components/navigation/Navigation';
import Book from './components/booking/Book';

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
