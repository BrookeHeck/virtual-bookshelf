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

// The parent to all my react components
// After authentication, the user is either retrieved from the db or added if no account has been made

export default function App() {
  const [dbUser, setUser] = useState([]);
  const { isAuthenticated, getIdTokenClaims, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      const getToken = async () => {
        let res = await getIdTokenClaims();
        return res.__raw;
      }
      try {
        getToken()
        .then(jwt => getUser(jwt, user))
        .then(dbUser => setUser(dbUser))
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
          <Route path='my-books' element={<MyBooks setUser={setUser} dbUser={dbUser} />} />
          <Route path='book-search' element={<BookSearch />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// get a user from the database, search database by the email
async function getUser(jwt, user) {
  // console.log(jwt);
  try {
    const config = {
      headers: { "Authorization": `Bearer ${jwt}` },
      method: 'get',
      baseURL: process.env.REACT_APP_SERVER,
      url: '/user',
      params: {email: user.email}
    }
    let res = await axios(config);
    return res.data.length === 0 ? createUser(jwt, user) : res.data[0];
  } catch (e) {
    console.log(e);
  }
}

// if the database search comes up empty, create a user using credentials from Auth0
async function createUser(jwt, user) {
  try {
    const config = {
      headers: { "Authorization": `Bearer ${jwt}` }
    }
    let res = await axios.post(`${process.env.REACT_APP_SERVER}/user`, {userName: user.name, email: user.email}, config);
    return res.data[0];
  } catch(e) {
    console.log(e);
  }
}
