import React from 'react';
import style from './style.module.scss';
import { FaHeart } from 'react-icons/fa';
import Loading from '../../helper/Loading/Loading';

const Banner = ({ dados, loading }) => {
  const avaliacao = Math.floor(dados.vote_average * 10);

  return (
    <section
      className={style.bannerSection}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${dados.backdrop_path})`,
      }}
    >
      {loading && <Loading />}
      <div className={style.bannerConteiner}>
        <article className={style.bannerImg}>
          <img
            src={`https://image.tmdb.org/t/p/original/${dados.poster_path}`}
            alt={`Poster de ${dados.title || dados.name}`}
          />
        </article>
        <article className={style.bannerDados}>
          <div className={style.bannerTitulo}>
            <h1>
              {dados.title || dados.name}{' '}
              <span>
                {'('}
                {dados.release_date ? dados.release_date.slice(0, 4) : dados.first_air_date.slice(0, 4)}
                {')'}
              </span>
            </h1>
            <div className={style.bannerGeneros}>
              <p>{dados.release_date || dados.first_air_date}</p>
              <ul>
                {dados.genres.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={style.bannerAvaliacao}>
            <span
              style={{
                backgroundColor: avaliacao >= 60 ? '#61e034' : '#f13423',
              }}
            >
              {avaliacao}
            </span>
            <p>Avaliação dos usuários</p>
          </div>
          <div className={style.bannerBotaoFavorito}>
            <button>
              <FaHeart />
            </button>
          </div>
          <div className={style.bannerTexto}>
            <p>{dados.tagline && `"${dados.tagline}"`}</p>
            <div className={style.bannerSinopse}>
              <h2>Sinopse</h2>
              <p>{dados.overview}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Banner;
