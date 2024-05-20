import React from 'react';
import useFetch from '../../../hooks/useFetch';
import { GET_POPULARES } from '../../../api/api';
import Itens from '../../Home/CarrosselDeItens/Itens/Itens';
import style from './style.module.scss';
import Loading from '../../helper/Loading/Loading';

const Resultados = ({ tipo }) => {
  const { loading, requisicao, dados } = useFetch();
  React.useEffect(() => {
    const { url, options } = GET_POPULARES(tipo);
    requisicao(url, options);
  }, [requisicao, tipo]);

  return (
    <article className={style.resultadosConteiner}>
      {loading && <Loading />}
      {dados && (
        <ul>
          {dados.results.map((dado) => (
            <Itens key={dado.id} dado={dado} />
          ))}
        </ul>
      )}
    </article>
  );
};

export default Resultados;
