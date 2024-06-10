import React from 'react';
import Itens from '../../Home/CarrosselDeItens/Itens/Itens';
import style from './style.module.scss';
import { Link } from 'react-router-dom';

const ConhecidoPor = ({ dados }) => {
  const filtroItens = dados.cast.slice(0, 15);

  return (
    <div className={style.conteiner}>
      <h2>Conhecido(a) por:</h2>
      <ul>
        {filtroItens.map((item) => {
          return (
            <Link key={item.id} to={`/${item.media_type}/${item.id}`}>
              <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${item.poster_path})`}}></div>
              <p>{item.title || item.name}</p>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default ConhecidoPor;
