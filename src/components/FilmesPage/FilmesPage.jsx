import React from 'react';
import Titulo from '../Home/Titulo/Titulo';
import style from './style.module.scss'
import PesquisaPorFiltro from '../PesquisaPorFiltro/PesquisaPorFiltro';

const FilmesPage = () => {
  return (
    <main style={{gap: "10px"}}>
      <section className={style.titulo}>
        <Titulo>Filmes Populares</Titulo>
      </section>
      <PesquisaPorFiltro tipo={'movie'}/>
    </main>
  );
};

export default FilmesPage;
