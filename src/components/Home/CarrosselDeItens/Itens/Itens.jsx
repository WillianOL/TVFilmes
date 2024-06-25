import React from 'react';
import style from './style.module.scss'
import { Link } from 'react-router-dom';

const Itens = ({ dado, media }) => {
  const nota = Math.floor(dado.vote_average * 10)
  let corNota;
  if(nota <= 50) {
    corNota = '#f13423'
  } else if(nota > 50 && nota < 70) {
    corNota = '#f1c423'
  } else {
    corNota = '#61e034'
  }

  return (
    <Link to={`/${dado && media || dado.media_type}/${dado.id}`} className={style.itemConteiner}>
      <div>
        <span className={style.itemNota} style={{backgroundColor: corNota}}>{nota}</span>
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
