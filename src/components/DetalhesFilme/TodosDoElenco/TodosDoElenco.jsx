import React from 'react';
import style from './style.module.scss';
import Items from '../AtoresDoFilme/Items/Items';
import { useNavigate } from 'react-router-dom';

const TodosDoElenco = ({ dados }) => {
  const historico = useNavigate()
  return (
    <main className={style.conteiner}>
      <section className={style.sectionAtores}>
        <div className={style.tituloEBotaoVoltar}>
          <h1 className={style.tituloAtores}>Todos os atores envolvidos</h1>
          <button onClick={() => historico(-1)}>Voltar ao Filme</button>
        </div>
        <ul className={style.conteinerAtores}>
          {dados &&
            dados.map((dado) => {
              return <Items dado={dado} />;
            })}
        </ul>
      </section>
    </main>
  );
};

export default TodosDoElenco;
