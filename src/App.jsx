import React from 'react';
import './GlobalStyle.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import { GlobalContext } from './GlobalContext';
import PesquisaPorNome from './components/PesquisaPorNome/PesquisaPorNome';
import DetalhesFilme from './components/DetalhesFilmesESeries/DetalhesFilme/DetalhesFilme';
import DetalhesSerie from './components/DetalhesFilmesESeries/DetalhesSerie/DetalhesSerie';
import DetalhesAtor from './components/DetalhesAtor/DetalhesAtor';
import FilmesFiltro from './components/PesquisaPorFiltro/FilmesFiltro/FilmesFiltro';
import SeriesFiltro from './components/PesquisaPorFiltro/SeriesFiltro/SeriesFiltro';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pesquisaPorFiltro/movie" element={<FilmesFiltro />}/>
            <Route path="/pesquisaPorFiltro/tv" element={<SeriesFiltro />}/>
            <Route path="/resultadoPesquisa" element={<PesquisaPorNome />} />
            <Route path="/movie/:id/*" element={<DetalhesFilme />} />
            <Route path="/tv/:id/*" element={<DetalhesSerie />} />
            <Route path="/person/:id/*" element={<DetalhesAtor />} />
          </Routes>
        </GlobalContext>
      </BrowserRouter>
    </>
  );
}

export default App;
