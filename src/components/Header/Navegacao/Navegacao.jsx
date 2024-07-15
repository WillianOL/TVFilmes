import React from 'react';
import Favoritos from '../Favoritos/Favoritos';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../GlobalContext';
import style from './style.module.scss';

const Navegacao = () => {
  return (
    <nav className={style.navegacao}>
      <ul className={style.links}>
        <li>
          <NavLink to='/pesquisaPorFiltro/movie'>Filmes</NavLink>
        </li>
        <li>
          <NavLink to="/pesquisaPorFiltro/tv">Séries</NavLink>
        </li>
      </ul>
      <Favoritos />
    </nav>
  );
};

export default Navegacao;
