import React from 'react';
import style from './style.module.scss';
import { Link } from 'react-router-dom';

const Item = ({ ator }) => {
  return (
    <Link to="detalhes" className={style.itemConteiner} id={ator.id}>
      <div
        className={style.itemImagem}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${ator.profile_path})`,
        }}
      ></div>
      <p className={style.itemNome}>{ator.name}</p>
      <div className={style.itemFilme}>
        <p>
          {ator.known_for[0].name || ator.known_for[0].original_title}
        </p>
      </div>
    </Link>
  );
};

export default Item;
