import React from 'react';
import style from './style.module.scss';
import useFetch from '../../../../hooks/useFetch';
import { GET_POR_FILTRO } from '../../../../api/api';

const ButtonSubmit = ({ estados, setResultadoFiltro }) => {
  const { dados, error, loading, requisicao } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = GET_POR_FILTRO({
      type: 'movie',
      ano: estados.ano,
      palavras: estados.keyword,
      generos: estados.genero,
    });
    await requisicao(url, options);
  }

  React.useEffect(() => {
    if(dados) {
      setResultadoFiltro(dados)
    }
  }, [dados])

  return (
    <>
      <button
        className={style.buttonSubmit}
        disabled={
          !(
            !loading &&
            (estados.ano.length === 4) | estados.genero.length | estados.keyword
          )
        }
        onClick={handleSubmit}
        style={{cursor: loading ? "wait" : "pointer"}}
      >
        Pesquisar
      </button>
    </>
  );
};

export default ButtonSubmit;
