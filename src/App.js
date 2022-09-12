import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Home from './components/home/Home.js';
import MyBooks from './components/myBooks/MyBooks.js';
import BookSearch from './components/bookSearch/BookSearch.js';
import NoPage from './components/header/NoPage.js';
import TopNav from './components/header/TopNav.js';

export default function App() {
  const [dbUser, updateUser] = useState([]);
  const { isAuthenticated, getIdTokenClaims, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      const getToken = async () => {
        let res = await getIdTokenClaims();
        return res.__raw;
      }
      try {
        getToken().then(jwt => getUser(jwt, user)).then(dbUser => updateUser(dbUser));
      } catch (e) {
        console.log(e);
      }
    }
  }, [isAuthenticated, getIdTokenClaims, user]);

  return (
    <div className="App">
          <TopNav />
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='my-books' element={<MyBooks books={dbUser.userBooks}/>} />
              <Route path='book-search' element={<BookSearch />} />
              <Route path='*' element={<NoPage />} />
            </Routes>
          </BrowserRouter>
        </div>
  );
}

async function getUser(jwt, user) {
  try {
    const config = {
      headers: { "Authorization": `Bearer ${jwt}` },
      method: 'get',
      baseURL: process.env.REACT_APP_SERVER,
      url: '/books',
      params: {email: user.email}
    }
    let res = await axios(config);
    return res.data[0];
  } catch (e) {
    console.log(e);
  }
}
