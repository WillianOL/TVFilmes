import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.scss'

const Recomendacoes = ({ dados }) => {
  return (
    <section className={style.conteinerRecomendacoes}>
      <h1 className={style.titulo}>Recomendações</h1>
      <ul className={style.lista}>
        {dados &&
          dados.results.slice(0, 12).map((item) => {
            return (
              <li className={style.itemRecomendacao}>
                <Link to={`/${item.media_type}/${item.id}`}>
                  <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`}}></div>
                  <p>{item.title}</p>
                </Link>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default Recomendacoes;
