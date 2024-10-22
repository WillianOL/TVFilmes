import React from 'react'
import useFetch from '../../../../hooks/useFetch';
import { GET_POR_FILTRO } from '../../../../api/api';
import Loading from '../../../helper/Loading/Loading';
import BarraDeFiltro from '../BarraDeFiltro/BarraDeFiltro';
import Resultados from '../Resultados/Resultados';
import style from './style.module.scss';

const SeriesFiltro = () => {
  const [resultadoFiltro, setResultadoFiltro] = React.useState(null);
  const { dados, error, loading, requisicao } = useFetch();

  React.useEffect(() => {
    const { url, options } = GET_POR_FILTRO({type: 'tv'});
    requisicao(url, options);
  }, [requisicao]);

  if (error) return <p>Ocorreu um erro inesperado, voltei ao inicio.</p>;
  return (
    <main className={style.filtroConteiner} >
      {loading && <Loading />}
      <h1>Séries por filtro</h1>
      <div className={style.conteiner}>
        <BarraDeFiltro type="tv" setResultadoFiltro={setResultadoFiltro} />
        {dados && (
          <Resultados
            dados={resultadoFiltro ? resultadoFiltro : dados}
            loading={loading}
            media="tv"
          />
        )}
      </div>
    </main>
  );
}

export default SeriesFiltro
