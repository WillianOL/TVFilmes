import React from 'react';
import Itens from './Itens/Itens';
import style from './style.module.scss'
import { UserContext } from '../../../GlobalContext';

const ResultadosPesquisa = ({loading, error }) => {
  const {resultadoPesquisa} = React.useContext(UserContext)
  console.log(resultadoPesquisa);

  return (
    <div className={style.conteiner}>
      {resultadoPesquisa && (
        <ul>
          {resultadoPesquisa.map((dado) => (
            <Itens dado={dado} />
          ))}
        </ul>
      )}
      {error && <p>Não existem resultados para essa pesquisa</p>}
    </div>
  );
};

export default ResultadosPesquisa;
