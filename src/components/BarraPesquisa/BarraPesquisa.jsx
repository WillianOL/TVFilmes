import React from 'react';
import { IoSearch } from 'react-icons/io5';
import style from './style.module.scss';

const BarraPesquisa = ({ tipoHeader }) => {
  return (
    <div
      className={tipoHeader ? style.barraPesquisaHeader : style.barraPesquisa}
    >
      <input type="text" />
      <button>
        <IoSearch />
      </button>
    </div>
  );
};

export default BarraPesquisa;
