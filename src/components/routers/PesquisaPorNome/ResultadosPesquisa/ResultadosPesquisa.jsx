import React from 'react';
import Itens from './Itens/Itens';
import style from './style.module.scss';
import { FaRegSadCry } from 'react-icons/fa';
import { UserContext } from '../../../../GlobalContext';

const ResultadosPesquisa = ({ error }) => {
  const { resultadoPesquisa } = React.useContext(UserContext);

  return (
    <div className={style.conteiner}>
      {resultadoPesquisa && !resultadoPesquisa.length && (
        <div className={style.mensagemDeErro}>
          <FaRegSadCry />
          <p>Sem resultados nesta categoria, infelizmente.</p>
        </div>
      )}
      {resultadoPesquisa && (
        <ul>
          {resultadoPesquisa.map((dado) => {
            return <Itens dado={dado} key={dado.id} />;
          })}
        </ul>
      )}
      {error && <p>Não existem resultados para essa pesquisa</p>}
    </div>
  );
};

export default ResultadosPesquisa;
