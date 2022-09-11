import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/main/Home.js';
import MyBooks from './components/main/MyBooks.js';
import BookSearch from './components/main/BookSearch.js';
import NoPage from './components/NoPage.js';
import TopNav from './components/header/TopNav.js';

const App = () => {
  return (
    <div className="App">
          <TopNav />
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='my-books' element={<MyBooks />} />
              <Route path='book-search' element={<BookSearch />} />
              <Route path='*' element={<NoPage />} />
            </Routes>
          </BrowserRouter>
        </div>
  );
}

export default App;
