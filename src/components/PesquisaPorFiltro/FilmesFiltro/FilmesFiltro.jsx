import React from 'react';
import BarraDeFiltro from '../BarraDeFiltro/BarraDeFiltro';
import Resultados from '../Resultados/Resultados';
import useFetch from '../../../hooks/useFetch';
import { GET_POR_FILTRO } from '../../../api/api';
import style from './style.module.scss'

const FilmesFiltro = () => {
  const { dados, error, loading, requisicao } = useFetch();

  React.useEffect(() => {
    const { url, options } = GET_POR_FILTRO('movie');
    requisicao(url, options);
  }, [requisicao]);

  return (
    <main className='filtroConteiner'>
      <h1>Filmes Populares</h1>
      <div className={style.conteiner}>
        <BarraDeFiltro type="movie" />
        <Resultados dados={dados} loading={loading} />
      </div>
    </main>
  );
};

export default FilmesFiltro;
