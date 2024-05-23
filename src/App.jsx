import React from 'react';
import './GlobalStyle.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import { GlobalContext } from './GlobalContext';
import FilmesPage from './components/FilmesPage/FilmesPage';
import SeriesPage from './components/SeriesPage/SeriesPage';
import PesquisaPorNome from './components/PesquisaPorNome/PesquisaPorNome'


function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filmes" element={<FilmesPage />} />
            <Route path="/series" element={<SeriesPage />} />
            <Route path='/resultadoPesquisa' element={<PesquisaPorNome />}/>
          </Routes>
        </GlobalContext>
      </BrowserRouter>
    </>
  );
}

export default App;
