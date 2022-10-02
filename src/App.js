import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.js';
import MyBooks from './components/myBooks/MyBooks.js';
import BookSearch from './components/bookSearch/BookSearch.js';
import NoPage from './components/header/NoPage.js';
import TopNav from './components/header/TopNav.js';

// The parent to all my react components
// After authentication, the user is either retrieved from the db or added if no account has been made

export default function App() {

  return (
    <div className="App">
      <TopNav/>

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='my-books' element=
            {<MyBooks />} 
          />
          <Route path='book-search' element={<BookSearch />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
