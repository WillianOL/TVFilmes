import React from 'react';
import Categorias from './Categorias/Categorias';
import ResultadosPesquisa from './ResultadosPesquisa/ResultadosPesquisa';
import useFetch from '../../hooks/useFetch';
import { UserContext } from '../../GlobalContext';
import { GET_RESULTADO_PESQUISA } from '../../api/api';
import style from './style.module.scss';

const ResultadoPesquisa = () => {
  const { valorPesquisa } = React.useContext(UserContext);
  const { requisicao, loading, dados, error } = useFetch();

  React.useEffect(() => {
    const { url, options } = GET_RESULTADO_PESQUISA(valorPesquisa);
    requisicao(url, options);
  }, [requisicao, valorPesquisa]);

  return (
    <section className={style.conteiner}>
      {dados && <Categorias dados={dados} />}
      <ResultadosPesquisa
        loading={loading}
        error={error}
      />
    </section>
  );
};

export default ResultadoPesquisa;