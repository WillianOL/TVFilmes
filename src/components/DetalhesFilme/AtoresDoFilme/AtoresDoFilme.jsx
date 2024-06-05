import React from 'react';
import Items from './Items/Items';
import Loading from '../../helper/Loading/Loading';
import style from './style.module.scss';
import { Link } from 'react-router-dom';

const AtoresDoFilme = ({ dados, loading }) => {
  return (
    <section className={style.elencoConteiner}>
      <div className={style.elencoTituloEBotao}>
        <h2 className={style.elencoTitulo}>Elenco Principal</h2>
        <Link to={'elenco'} className={style.elencoBotaoTodos}>
          Todo o elenco
        </Link>
      </div>
      <ul className={style.elencoAtores}>
        {loading && <Loading />}
        {dados &&
          dados.slice(0, 14).map((dado) => {
            return <Items key={dado.id} dado={dado} />;
          })}
      </ul>
    </section>
    
  );
};

export default AtoresDoFilme;
