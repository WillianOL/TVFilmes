import React from 'react';
import style from './style.module.scss'
import { Link } from 'react-router-dom';

const Itens = ({ dado }) => {
  return (
    <Link to="detalhes" className={style.itemConteiner} id={dado.id}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${dado.poster_path}`}
          alt={dado.title}
          className={style.itemImagem}
        />
        <h3 className={style.itemTitulo}>{dado.title || dado.name}</h3>
      </div>
      <p className={style.itemData}>{dado.release_date || dado.first_air_date}</p>
    </Link>
  );
};

export default Itens;
