import React from 'react';
import style from './style.module.scss';
import { Link } from 'react-router-dom';

const Historico = ({ dados }) => {
  const historicoLista = dados.combined_credits.cast;
  const HistoricoOrdenado = historicoLista.sort(
    (a, b) =>
      new Date(a.release_date || a.first_air_date) -
      new Date(b.release_date || b.first_air_date)
  );

  return (
    <div className={style.conteiner}>
      <h2 className={style.titulo}>Historico de atuação</h2>
      <ul className={style.historicoLista}>
        {HistoricoOrdenado.map((dado) => {
          if (dado.character || dado.release_date || dado.first_air_date)
            return (
              <li className={style.historicoItem}>
                {dado.release_date && <p>{dado.release_date.slice(0, 4)}</p>}
                {dado.first_air_date && (
                  <p>{dado.first_air_date.slice(0, 4)}</p>
                )}
                <div>
                  <Link to={`/${dado.media_type}/${dado.id}`}>
                    {dado.title || dado.name}
                  </Link>
                  <p>
                    como <span>{dado.character}</span>
                  </p>
                </div>
              </li>
            );
        })}
      </ul>
    </div>
  );
};

export default Historico;
