import React from 'react';
import { MdOutlineFavorite } from 'react-icons/md';
import style from './style.module.scss';
import { UserContext } from '../../../GlobalContext';
import { Link } from 'react-router-dom';

const Favoritos = () => {
  const [active, setActive] = React.useState(false);
  const { numFavoritos } = React.useContext(UserContext);

  function toggleMenu() {
    setActive(!active)
  }

  return (
    <div className={style.conteiner}>
      <div onClick={toggleMenu} className={style.botaoFavorito}>
        <MdOutlineFavorite className={style.iconeFavorito} />
        {numFavoritos != 0 && (
          <span className={style.numero_favoritos}>{numFavoritos}</span>
        )}
      </div>
      <div
        style={{ display: active ? 'flex' : 'none' }}
        className={style.conteinerFavoritos}
      >
        <div className={style.favoritos}>
          {numFavoritos === 0 && <p>Adicione filmes aos seus favoritos!</p>}
        </div>
        <Link to="/todosOsFavoritos" onClick={toggleMenu}>Todos os favoritos</Link>
      </div>
    </div>
  );
};

export default Favoritos;
