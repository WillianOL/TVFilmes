import React from 'react';
import style from './style.module.scss';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import BarraPesquisa from '../../BarraPesquisa/BarraPesquisa';
import Favoritos from '../Favoritos/Favoritos';

const MobileMenu = () => {
  const [ativo, setAtivo] = React.useState(false);

  const fecharMenu = (event) => {
    const listaMenu = event.currentTarget
    const inputMenu = event.currentTarget.querySelector('input')
    if (event.target !== listaMenu && event.target !== inputMenu) {
      setAtivo(false);
    }
  };

  return (
    <nav className={style.conteiner}>
      <Favoritos />
      <FiMenu
        className={`${style.menuButton} ${ativo ? style.menuButtonAtivo : ''}`}
        onClick={() => setAtivo(!ativo)}
      />
      <ul
        className={style.mobileMenu}
        style={{ display: ativo ? 'flex' : 'none' }}
        onClick={fecharMenu}
      >
        <li className={style.mobileLink}>
          <NavLink to="/pesquisaPorFiltro/movie">Filmes</NavLink>
        </li>
        <li className={style.mobileLink}>
          <NavLink to="/pesquisaPorFiltro/tv">Séries</NavLink>
        </li>
        <li className={style.barraPesquisa}>
          <BarraPesquisa mobile={true} />
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
