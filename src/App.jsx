import React from 'react';
import './GlobalStyle.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import { GlobalContext } from './GlobalContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="filmes" element={<Home />} />
            <Route path="series" element={<Home />} />
          </Routes>
        </GlobalContext>
      </BrowserRouter>
    </>
  );
}

export default App;
