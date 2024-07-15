import React from 'react';
import style from './Header.module.scss';
import { PiFilmSlateFill } from 'react-icons/pi';
import Navegacao from './Navegacao/Navegacao';
import { NavLink } from 'react-router-dom';
import MobileMenu from './MobileMenu/MobileMenu';
import BarraPesquisa from '../BarraPesquisa/BarraPesquisa';

const Header = () => {
  return (
    <header className={style.header}>
      <div>
        <NavLink to="/" className={style.marca}>
          <p>TV<span>Filmes</span></p>
          <PiFilmSlateFill />
        </NavLink>
        <BarraPesquisa />
        <Navegacao />
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
