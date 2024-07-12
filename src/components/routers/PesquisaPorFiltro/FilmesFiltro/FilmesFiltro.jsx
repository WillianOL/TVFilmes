import React from 'react';
import BarraDeFiltro from '../BarraDeFiltro/BarraDeFiltro';
import Resultados from '../Resultados/Resultados';
import useFetch from '../../../../hooks/useFetch';
import { GET_POR_FILTRO } from '../../../../api/api';
import style from './style.module.scss';
import Loading from '../../../helper/Loading/Loading';

const FilmesFiltro = () => {
  const [resultadoFiltro, setResultadoFiltro] = React.useState(null);
  const { dados, error, loading, requisicao } = useFetch();

  React.useEffect(() => {
    const { url, options } = GET_POR_FILTRO({type: 'movie'});
    requisicao(url, options);
  }, [requisicao]);

  if (error) return <p>Ocorreu um erro inesperado, voltei ao inicio.</p>;
  return (
    <main className={style.filtroConteiner} >
      {loading && <Loading />}
      <h1>Filmes por filtro</h1>
      <div className={style.conteiner}>
        <BarraDeFiltro type="movie" setResultadoFiltro={setResultadoFiltro} />
        {dados && (
          <Resultados
            dados={resultadoFiltro ? resultadoFiltro : dados}
            loading={loading}
            media="movie"
          />
        )}
      </div>
    </main>
  );
};

export default FilmesFiltro;
