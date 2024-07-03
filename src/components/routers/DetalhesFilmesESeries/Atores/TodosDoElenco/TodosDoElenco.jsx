import React from 'react';
import style from './style.module.scss';
import Items from '../../Atores/Items/Items';
import { useNavigate } from 'react-router-dom';

const TodosDoElenco = ({ dados }) => {
  const historico = useNavigate()
  const totalPessoasEnvolvidas = dados.cast.length + dados.crew.length

  return (
    <main className={style.conteiner}>
      <section className={style.sectionAtores}>
        <div className={style.tituloEBotaoVoltar}>
          <h1 className={style.tituloAtores}>Todos as pessoas envolvidas <span>{totalPessoasEnvolvidas}</span></h1>
          <button onClick={() => historico(-1)}>Voltar ao Filme</button>
        </div>
        <ul className={style.conteinerAtores}>
          {dados &&
            dados.cast.map((dado) => {
              return <Items dado={dado} />;
            })}
            {dados &&
            dados.crew.map((dado) => {
              return <Items dado={dado} />;
            })}
        </ul>
      </section>
    </main>
  );
};

export default TodosDoElenco;
