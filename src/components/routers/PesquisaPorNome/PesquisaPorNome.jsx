import React from 'react';
import Categorias from './Categorias/Categorias';
import ResultadosPesquisa from './ResultadosPesquisa/ResultadosPesquisa';
import useFetch from '../../../hooks/useFetch';
import { UserContext } from '../../../GlobalContext';
import { GET_RESULTADO_PESQUISA } from '../../../api/api';
import style from './style.module.scss';
import Loading from '../../helper/Loading/Loading';

const ResultadoPesquisa = () => {
  const { valorPesquisa } = React.useContext(UserContext);
  const { requisicao, loading, dados, error } = useFetch();

  React.useEffect(() => {
    const { url, options } = GET_RESULTADO_PESQUISA(valorPesquisa);
    requisicao(url, options);
  }, [requisicao, valorPesquisa]);

  if(error) return <p>Ocorreu um erro inesperado, volte ao inicio</p>
  return (
    <main className={style.conteiner}>
      {loading && <Loading />}
      {dados && (
        <>
          <Categorias dados={dados} />
          <ResultadosPesquisa />
        </>
      )}
    </main>
  );
};

export default ResultadoPesquisa;
