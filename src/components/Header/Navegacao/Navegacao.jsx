import React from 'react';
import Favoritos from '../Favoritos/Favoritos';
import BarraPesquisa from '../../BarraPesquisa/BarraPesquisa';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../GlobalContext';
import style from './style.module.scss';

const Navegacao = () => {
  const { barraPesquisa, setBarraPesquisa, modalFavoritos, setModalFavoritos } = React.useContext(UserContext);

  function handleClick() {
    setBarraPesquisa(!barraPesquisa)
    if(modalFavoritos) setModalFavoritos(!modalFavoritos)
  }

  return (
    <nav className={style.navegacao}>
      <ul className={style.links}>
        <li>
          <NavLink to="/filmesPopulares">Filmes</NavLink>
        </li>
        <li>
          <NavLink to="/seriesPopulares">Séries</NavLink>
        </li>
      </ul>
      <Favoritos />
      <button onClick={handleClick}>Procurar</button>
    </nav>
  );
};

export default Navegacao;
