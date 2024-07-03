import React from 'react';
import style from './style.module.scss';
import { UserContext } from '../../../../GlobalContext';

const Categorias = ({ dados }) => {
  const [categoria, setCategoria] = React.useState('tv');
  const [totalFilmes, setTotalFilmes] = React.useState(null)
  const [totalSeries, setTotalSeries] = React.useState(null)
  const [totalPessoas, setTotalPessoas] = React.useState(null)

  const { setResultadoPesquisa } = React.useContext(UserContext);
  const categorias = [
    { nome: 'Series', value: 'tv', total: totalFilmes},
    { nome: 'Filmes', value: 'movie', total: totalSeries},
    { nome: 'Pessoas', value: 'person', total: totalPessoas},
  ];

  const filtrarPorCategoria = React.useCallback(
    (categoria) => {
      const filtroSelecionado = dados.results.filter((item) => {
        return item.media_type === categoria;
      });
      if (filtroSelecionado) {
        setResultadoPesquisa(filtroSelecionado);
      }
      totalCategorias();
    },
    [dados, setResultadoPesquisa]
  );

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

  function totalCategorias() {
    const totalFilmes = dados.results.filter(item => item.media_type === categorias[0].value)
    const totalSeries = dados.results.filter(item => item.media_type === categorias[1].value)
    const totalPessoas = dados.results.filter(item => item.media_type === categorias[2].value)

    setTotalFilmes(totalFilmes.length)
    setTotalSeries(totalSeries.length)
    setTotalPessoas(totalPessoas.length)
  }

  React.useEffect(() => {
    filtrarPorCategoria(categoria);
  }, [categoria, filtrarPorCategoria]);

  return (
    <aside className={style.categoriaConteiner}>
      <h2 className={style.categoriaTitulo}>Resultados da busca</h2>
      <nav className={style.categorias}>
        {categorias.map((item) => {
          return (
            <label
              style={{
                backgroundColor: categoria === item.value ? '#e5e9f1' : '',
              }}
            >
              <input
                type="radio"
                value={item.value}
                onChange={mudarCategoria}
                checked={categoria === item.value}
              />
              {item.nome}
              <span>{item.total}</span>
            </label>
          );
        })}
      </nav>
    </aside>
  );
};

export default Categorias;
