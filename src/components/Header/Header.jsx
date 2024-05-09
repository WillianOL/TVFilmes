import React from 'react';
import style from './Header.module.scss';
import { PiFilmSlateFill } from 'react-icons/pi';
import Navegacao from './Navegacao/Navegacao';
import { NavLink } from 'react-router-dom';
import BarraPesquisa from '../BarraPesquisa/BarraPesquisa';

const Header = () => {
  return (
    <header className={style.header}>
      <NavLink to="/" className={style.marca}>
        <p>TV<span>Filmes</span></p>
        <PiFilmSlateFill />
      </NavLink>
      <Navegacao />
      <BarraPesquisa tipoHeader={true}/>
    </header>
  );
};

export default Header;
