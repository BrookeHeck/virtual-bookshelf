import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.js';
import MyBooks from './components/myBooks/MyBooks.js';
import BookSearch from './components/bookSearch/BookSearch.js';
import NoPage from './components/header/NoPage.js';
import TopNav from './components/header/TopNav.js';
import { useEffect, useState } from 'react';

// The parent to all my react components
// After authentication, the user is either retrieved from the db or added if no account has been made

export default function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('token')) setIsAuthenticated(true);
  }, [isAuthenticated])

  return (
    <div className="App">
      <TopNav isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='my-books' element=
            {<MyBooks isAuthenticated={isAuthenticated}/>} 
          />
          <Route path='book-search' element={<BookSearch />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
