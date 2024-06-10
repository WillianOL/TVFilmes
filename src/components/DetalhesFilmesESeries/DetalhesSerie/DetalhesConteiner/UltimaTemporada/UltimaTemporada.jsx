import React from 'react';
import style from './style.module.scss';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const UltimaTemporada = ({ dados, loading }) => {
  const ultimaTempNumero = dados.seasons.length - 1;
  const ultimaTemp = dados.seasons[ultimaTempNumero];
  console.log(ultimaTemp);

  return (
    <section className={style.conteiner}>
      <div className={style.tituloELink}>
        <h2>Ultima temporada</h2>
        <Link to="temporadas">Todas as temporadas</Link>
      </div>
      <article className={style.temporadaConteiner}>
        <div
          className={style.temporadaPoster}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${ultimaTemp.poster_path})`,
          }}
        ></div>
        <div className={style.temporadaInfo}>
          <h3>{ultimaTemp.name}</h3>
          <div>
            <span>
              <FaStar className={style.icon} />{' '}
              {Math.floor(ultimaTemp.vote_average * 10)}%
            </span>
            <p>{ultimaTemp.air_date ? ultimaTemp.air_date.slice(0, 4) : ''}</p>
            <p>{ultimaTemp.episode_count} episódios</p>
          </div>
          <p>{ultimaTemp.overview}</p>
        </div>
      </article>
    </section>
  );
};

export default UltimaTemporada;
