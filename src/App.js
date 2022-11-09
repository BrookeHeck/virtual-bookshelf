import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/home/Home.js';
import MyBooks from './components/myBooks/MyBooks.js';
import BookSearch from './components/bookSearch/BookSearch.js';
import NoPage from './components/header/NoPage.js';
import TopNav from './components/header/TopNav.js';

const App = () => {
  return (
    <Provider store={store} >
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
    </Provider>
  );
}

export default App;
