import React from 'react';
import './GlobalStyle.scss';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalContext } from './GlobalContext';
import PesquisaPorNome from './components/routers/PesquisaPorNome/PesquisaPorNome';
import DetalhesFilme from './components/routers/DetalhesFilmesESeries/DetalhesFilme/DetalhesFilme';
import DetalhesSerie from './components/routers/DetalhesFilmesESeries/DetalhesSerie/DetalhesSerie';
import DetalhesAtor from './components/routers/DetalhesAtor/DetalhesAtor';
import FilmesFiltro from './components/routers/PesquisaPorFiltro/FilmesFiltro/FilmesFiltro';
import SeriesFiltro from './components/routers/PesquisaPorFiltro/SeriesFiltro/SeriesFiltro';
import TodosOsFavoritos from './components/routers/TodosOsFavoritos/TodosOsFavoritos';

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
            <Route path="/resultadoPesquisa/:name" element={<PesquisaPorNome />} />
            <Route path="/movie/:id/*" element={<DetalhesFilme />} />
            <Route path="/tv/:id/*" element={<DetalhesSerie />} />
            <Route path="/person/:id/*" element={<DetalhesAtor />} />
            <Route path="/todosOsFavoritos" element={<TodosOsFavoritos />}/>
          </Routes>
          <Footer />
        </GlobalContext>
      </BrowserRouter>
    </>
  );
}

export default App;
