import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/main/Home.js';
import MyBooks from './components/main/MyBooks.js';
import BookSearch from './components/main/BookSearch.js';
import NoPage from './components/NoPage.js';
import TopNav from './components/header/TopNav.js';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './components/auth0/Login';

const App = () => {
  const { isAuthenticated, error } = useAuth0();

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      {isAuthenticated ?
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
        :
        <Login />
    }
    </>
  );
}

export default App;
