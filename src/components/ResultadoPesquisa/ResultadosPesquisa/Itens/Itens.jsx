import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.scss';

const Itens = ({ dado }) => {
  return (
    <div id={dado.id} className={style.itemConteiner}>
      <Link to={`detalhes/${dado.id}`} className={style.conteinerImg}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${dado.poster_path || dado.profile_path}`}
          alt="poster do filme"
        />
      </Link>
      <div className={style.itemInfo}>
        <article className={style.itemTitleDate}>
          <h2>
            {dado.name || dado.title}
          </h2>
          <p>{dado.first_air_date || dado.release_date}</p>
        </article>
        <p className={style.itemOverview}>{dado.overview || dado.known_for[0].title}</p>
      </div>
    </div>
  );
};

export default Itens;
