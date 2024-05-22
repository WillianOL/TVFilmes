import React from 'react';
import style from './style.module.scss';
import { UserContext } from '../../../GlobalContext';

const Categorias = ({ dados }) => {
  const [categoria, setCategoria] = React.useState('tv');
  const { setResultadoPesquisa } = React.useContext(UserContext);

  const filtrarPorCategoria = React.useCallback((categoria) => {
    const filtro = dados.results.filter((item) => {
      return item.media_type === categoria;
    });
    if(filtro) {
      setResultadoPesquisa(filtro);
    }

  }, [dados, setResultadoPesquisa])

  React.useEffect(() => {
    filtrarPorCategoria(categoria)
  }, [categoria, filtrarPorCategoria])

  function mudarCategoria({ target }) {
    setCategoria(target.value);
    switch (target.value) {
      case 'tv':
        filtrarPorCategoria('tv');
        break;
      case 'movie':
        filtrarPorCategoria('movie');
        break;
      case 'person':
        filtrarPorCategoria('person');
        break;
    }
  }

  return (
    <aside className={style.categoriaConteiner}>
      <h2 className={style.categoriaTitulo}>Resultados da busca</h2>
      <nav className={style.categorias}>
        <label style={{ backgroundColor: categoria === 'tv' ? '#e5e9f1' : '' }}>
          <input
            type="radio"
            value="tv"
            onChange={mudarCategoria}
            checked={categoria === 'tv'}
          />
          Series
        </label>
        <label
          style={{ backgroundColor: categoria === 'movie' ? '#e5e9f1' : '' }}
        >
          <input
            type="radio"
            value="movie"
            onChange={mudarCategoria}
            checked={categoria === 'movie'}
          />
          Filmes
        </label>
        <label
          style={{ backgroundColor: categoria === 'person' ? '#e5e9f1' : '' }}
        >
          <input
            type="radio"
            value="person"
            onChange={mudarCategoria}
            checked={categoria === 'person'}
          />
          Pessoas
        </label>
      </nav>
    </aside>
  );
};

export default Categorias;
