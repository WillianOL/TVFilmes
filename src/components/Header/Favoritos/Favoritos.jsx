import React from 'react';
import { MdOutlineFavorite } from 'react-icons/md';
import style from './style.module.scss';
import { UserContext } from '../../../GlobalContext';
import { Link } from 'react-router-dom';
import ItemFavorito from './ItemFavorito';

const Favoritos = () => {
  const {
    favoritos,
    setBarraPesquisa,
    barraPesquisa,
    modalFavoritos,
    setModalFavoritos,
  } = React.useContext(UserContext);

  function toggleMenu() {
    setModalFavoritos(!modalFavoritos);
    if (barraPesquisa) setBarraPesquisa(!barraPesquisa);
  }

  return (
    <div className={style.conteiner}>
      <div onClick={toggleMenu} className={style.botaoFavorito}>
        <MdOutlineFavorite className={style.iconeFavorito} />
        {favoritos.length != 0 && (
          <span className={style.numero_favoritos}>{favoritos.length}</span>
        )}
      </div>
      <div
        style={{ display: modalFavoritos ? 'flex' : 'none' }}
        className={style.conteinerFavoritos}
      >
        <div className={style.favoritos}>
          {favoritos.length === 0 ? (<p>Adicione filmes aos seus favoritos!</p>) : (
           favoritos.map(dado => <ItemFavorito key={dado.id} dado={dado} />)
          )}
        </div>
        <Link to="/todosOsFavoritos" onClick={toggleMenu}>
          Todos os favoritos
        </Link>
      </div>
    </div>
  );
};

export default Favoritos;
