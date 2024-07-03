import React from 'react';
import style from './style.module.scss';
import { useNavigate } from 'react-router-dom';

const Temporadas = ({ dados }) => {
  const historico = useNavigate();

  return (
    <main>
      <section className={style.conteiner}>
        <div className={style.tituloBotao}>
          <h1 className={style.titulo}>
            Todas as Temporadas <span>{dados.length}</span>
          </h1>
          <button onClick={() => historico(-1)}>Voltar a Serie</button>
        </div>
        <ul className={style.temporadasConteiner}>
          {dados &&
            dados.map((dado) => {
              return (
                <li key={dado.id} className={style.temporada}>
                  <div
                    className={style.poster}
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/original/${dado.poster_path})`,
                    }}
                  ></div>
                  <div className={style.informacoes}>
                    <div>
                      <h2>
                        {dado.name}{' '}
                        {dado.air_date && (
                          <span>
                            {'('}
                            {dado.air_date.slice(0, 4)}
                            {')'}
                          </span>
                        )}
                      </h2>
                      <p>{dado.episode_count} episódios</p>
                    </div>
                    <p>{dado.overview}</p>
                  </div>
                </li>
              );
            })}
        </ul>
      </section>
    </main>
  );
};

export default Temporadas;
