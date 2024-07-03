import React from 'react';
import style from './style.module.scss';
import ConhecidoPor from '../ConhecidoPor/ConhecidoPor';

const FotoEBiografia = ({ dados, loading }) => {
  return (
    <section className={style.atorConteiner}>
      <div
        className={style.atorFoto}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${dados.profile_path})`,
        }}
      ></div>
      <div className={style.AtorInformacoes}>
        <h1 className={style.atorNome}>{dados.name}</h1>
        <article className={style.atorBiografia}>
          {dados.biography && (
            <>
              <h2>Biografia</h2>
              <p>{dados.biography}</p>
            </>
          )}
        </article>
        <ConhecidoPor dados={dados.combined_credits} loading={loading} />
      </div>
    </section>
  );
};

export default FotoEBiografia;
