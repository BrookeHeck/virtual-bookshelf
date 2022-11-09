import './App.css';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { When } from 'react-if'
import Home from './components/home/Home.js';
import MyBooks from './components/myBooks/MyBooks.js';
import BookSearch from './components/bookSearch/BookSearch.js';
import TopNav from './components/header/TopNav.js';

const App = () => {
  const [ page, setPage ] = useState('home');
  
  return (
    <Provider store={store} >
      <div className="App">
        <TopNav setPage={setPage} />

        <When condition={page === 'home'}><Home/></When>
        <When condition={page === 'my-books'}><MyBooks/></When>
        <When condition={page === 'search-books'}><BookSearch/></When>
      </div>
    </Provider>
  );
}

export default App;
