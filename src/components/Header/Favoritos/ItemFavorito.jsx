import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.scss';

const ItemFavorito = ({ dado }) => {
  return (
    <Link
      to={`/${dado.seasons ? 'tv' : 'movie'}/${dado.id}`}
      className={style.itemFavorito}
    >
      <div
        className={style.imgConteiner}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${dado.poster_path})`,
        }}
      ></div>
      <div className={style.informacoes}>
        <h2>{dado.name || dado.title}</h2>
        <p>{dado.tagline && `"${dado.tagline}"`}</p>
      </div>
    </Link>
  );
};

export default ItemFavorito;
