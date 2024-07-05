import React from 'react';
import Categorias from './Categorias/Categorias';
import ResultadosPesquisa from './ResultadosPesquisa/ResultadosPesquisa';
import useFetch from '../../../hooks/useFetch';
import { GET_RESULTADO_PESQUISA } from '../../../api/api';
import style from './style.module.scss';
import Loading from '../../helper/Loading/Loading';
import { useParams } from 'react-router-dom';

const ResultadoPesquisa = () => {
  const { requisicao, loading, dados, error } = useFetch();
  const {name} = useParams()

  React.useEffect(() => {
    const { url, options } = GET_RESULTADO_PESQUISA(name);
    requisicao(url, options);
  }, [requisicao, name]);

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
