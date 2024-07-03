import React from 'react';
import useFetch from '../../../../../hooks/useFetch';
import { GET_GENERO } from '../../../../../api/api';
import Checkbox from './Checkbox';
import style from './style.module.scss'

const SelecionarGenero = ({ type, genero, setGenero }) => {
  const { dados, requisicao } = useFetch();

  React.useEffect(() => {
    const { url, options } = GET_GENERO(type);
    requisicao(url, options);
  }, [requisicao, type]);

  return (
    <div className={style.conteinerOpcoes}>
      <h3>Gêneros</h3>
      {dados && ( 
        <Checkbox opcoes={dados.genres} genero={genero} setGenero={setGenero} />
      )}
    </div>
  );
};

export default SelecionarGenero;
