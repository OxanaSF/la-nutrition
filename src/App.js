import { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import Nav from './components/Nav';
import Pages from './pages/Pages';
import Categories from './components/CuisineTypes';
import Search from './components/Search';

const App = () => {
  return (
    <div>
      <GlobalStyles />

      <BrowserRouter>
        <Header />
        <Nav />
        <Search />
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
};

export default App;
