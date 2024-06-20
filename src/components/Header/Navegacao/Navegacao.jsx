import React from 'react';
import Favoritos from '../Favoritos/Favoritos';
import BarraPesquisa from '../../BarraPesquisa/BarraPesquisa';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../GlobalContext';
import style from './style.module.scss';

const Navegacao = () => {
  const { activeBarraPesquisa, setActiveBarraPesquisa, modalFavoritos, setModalFavoritos } =
    React.useContext(UserContext);

  function handleClick() {
    setActiveBarraPesquisa(!activeBarraPesquisa);
    if (modalFavoritos) setModalFavoritos(!modalFavoritos);
  }

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
      <button onClick={handleClick}>
        {activeBarraPesquisa ? 'Cancelar' : 'Pesquisar'}
      </button>
    </nav>
  );
};

export default Navegacao;
