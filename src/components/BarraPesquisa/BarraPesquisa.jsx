import React from 'react';
import { IoSearch } from 'react-icons/io5';
import style from './style.module.scss';
import { UserContext } from '../../GlobalContext';

const BarraPesquisa = ({ tipoHeader }) => {
  const {barraPesquisa} = React.useContext(UserContext)

  return (
    <div
      className={tipoHeader ? style.barraPesquisaHeader : style.barraPesquisa}
      style={{display: barraPesquisa ? 'flex' : 'none'}}
    >
      <input type="text" />
      <button>
        <IoSearch />
      </button>
    </div>
  );
};

export default BarraPesquisa;
